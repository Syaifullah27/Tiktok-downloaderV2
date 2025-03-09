import { connectDB } from "@/lib/MongoDB";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Fungsi validasi email sederhana
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  export async function POST(req) {
    try {
      await connectDB();
      const { username, email, password } = await req.json();
  
      // Validasi input
      if (!username || !email || !password) {
        return NextResponse.json({ error: "Semua field harus diisi" }, { status: 400 });
      }
      if (!isValidEmail(email)) {
        return NextResponse.json({ error: "Format email tidak valid" }, { status: 400 });
      }
      if (password.length < 6) {
        return NextResponse.json({ error: "Password minimal 6 karakter" }, { status: 400 });
      }
  
      // Cek apakah email sudah digunakan
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json({ error: "Email sudah digunakan" }, { status: 400 });
      }
  
      // Hash password dan simpan user
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
  
      return NextResponse.json({ message: "Registrasi berhasil" }, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
  }
