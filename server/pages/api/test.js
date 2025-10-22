import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const key = process.env.TMDB_API_KEY;
    if (!key) return res.status(500).json({ error: "TMDB key missing" });

    const tmdbRes = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${key}`);
    const data = await tmdbRes.json();

    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
