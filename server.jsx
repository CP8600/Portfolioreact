require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
let cachedToken = null;
let tokenExpiresAt = null;

async function refreshToken() {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({ grant_type: "client_credentials" }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: process.env.SPOTIFY_CLIENT_ID,
        password: process.env.SPOTIFY_CLIENT_SECRET,
      },
    }
  );

  cachedToken = response.data.access_token;
  tokenExpiresAt = Date.now() + response.data.expires_in * 1000;
  console.log("✅ Spotify token updated");
}

app.get("/spotify-token", async (req, res) => {
  if (!cachedToken || Date.now() >= tokenExpiresAt) {
    await refreshToken();
  }
  res.json({ access_token: cachedToken });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
