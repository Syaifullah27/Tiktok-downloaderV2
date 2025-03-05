import { RotateLoader } from 'react-spinners';

const VideoResult = ({ data, loading, error }) => {
  if (loading) return (
    <div className="loader">
      <RotateLoader color="var(--primary-color)" />
    </div>
  );

  if (error) return <div className="error">⚠️ Error: {error.message}</div>;

  if (!data) return null;

  return (
    <section className="video-result">
      <div className="video-container">
        <video 
          controls 
          poster={data.data.cover}
          className="video-player"
          aria-label="TikTok video player"
        >
          <source src={data.data.hdplay || data.data.play} type="video/mp4" />
        </video>
      </div>

      <div className="video-info">
        <h2 className="video-title">{data.data.title}</h2>
        
        <div className="video-meta">
          <div className="meta-item">
            <span>👤 Author:</span>
            <span>@{data.data.author.nickname}</span>
          </div>
          
          <div className="meta-item">
            <span>📅 Created:</span>
            <span>
              {new Date(data.data.create_time * 1000).toLocaleDateString()}
            </span>
          </div>
          
          <div className="meta-item">
            <span>❤️ Likes:</span>
            <span>{data.data.digg_count.toLocaleString()}</span>
          </div>
        </div>

        <div className="actions">
          <a
            href={data.data.hdplay || data.data.play}
            download={`tiktok-${data.data.aweme_id}.mp4`}
            className="download-btn video-download"
          >
            📥 Download HD Video
          </a>
          <a 
            href={data.data.music}
            download={`tiktok-audio-${data.data.aweme_id}.mp3`}
            className="download-btn audio-download"
          >
            🎧 Download Audio
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoResult;