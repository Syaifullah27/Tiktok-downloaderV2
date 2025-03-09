import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET || "secret");
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: "Invalid Token" }, { status: 403 });
  }
}

export const config = {
  matcher: "/api/protected-route",
};
