import express from "express";
import axios from "axios";
import cors from "cors";
import { Buffer } from "node:buffer";
import dotenv from "dotenv";

dotenv.config();

if (typeof process === "undefined") {
  throw new Error("The 'process' object is not defined. Ensure you are running this in a Node.js environment.");
}

// Ensure required environment variables are defined
// if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET || !process.env.SPOTIFY_REFRESH_TOKEN) {
//   throw new Error("Missing required environment variables. Please check your .env file.");
// }

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/refresh-token", async (req, res) => {
  const authBuffer = Buffer.from(
    `${process.env.VITE_SPOTIFY_CLIENT_ID}:${process.env.VITE_SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.VITE_SPOTIFY_REFRESH_TOKEN,
      }),
      {
        headers: {
          Authorization: `Basic ${authBuffer}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.json({
      accessToken: response.data.access_token,
      expiresIn: response.data.expires_in,
    });
  } catch (error) {
    console.error(
      "Error refreshing token:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to refresh token" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
