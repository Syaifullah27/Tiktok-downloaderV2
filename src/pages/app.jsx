'use client'
import { useState } from 'react';
import Head from 'next/head';
import { fetchTikTokData } from '../utils/api';
import Navbar from '../components/Navbar';
import VideoResult from '../components/VideoResult';

export default function Home() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;

    try {
      setLoading(true);
      setError(null);
      const result = await fetchTikTokData(url);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>TikTok Downloader - No Watermark</title>
        <meta name="description" content="Download TikTok videos without watermark in HD quality" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="container">
        <form onSubmit={handleSubmit} className="url-form">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste TikTok URL here..."
            aria-label="TikTok video URL"
            required
          />
          <button type="submit" className="submit-btn">
            {loading ? 'Processing...' : 'Analyze'}
          </button>
        </form>

        <VideoResult data={data} loading={loading} error={error} />
      </main>
    </>
  );
}