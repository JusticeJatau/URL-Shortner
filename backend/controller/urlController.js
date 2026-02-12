import Url from '../model/URL.js';
import Token from '../model/Token.js';
import { generateUniqueId } from '../utils/generateShortId.js'; // <-- our new unique ID generator

// const BASE_URL = process.env.BASE_URL;
const REACT_URL = process.env.REACT_URL;

// Create short URL
const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    if (!originalUrl) return res.status(400).json({ error: 'URL is required' });

    // Check if this URL already has a token
    let url = await Url.findOne({ originalUrl }).lean(); // lean for faster read
    let token;

    if (url) {
      // URL already exists → get its token
      const shortId = generateUniqueId(2);
      token = await Token.create({
        token: shortId,
        Url: url._id,
        clicks: 0
      });
    } else {
      // URL doesn't exist → create new entry
      url = await Url.create({
        originalUrl,
        is_active: true
      });

      const shortId = generateUniqueId();
      token = await Token.create({
        token: shortId,
        Url: url._id,
        clicks: 0
      });
    }

    // Return response with short URL
    res.status(201).json({
      success: true,
      shortUrl: `${REACT_URL}/s/${token.token}`,
      token: token.token
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Redirect to original URL
const redirectToOriginalUrl = async (req, res) => {
  const { token } = req.params;
  const _token = await Token.findOne({ token: token }).populate("Url");
  console.log(_token)
  if (!_token) return res.status(404).json({ error: 'URL not found' });

  _token.clicks += 1;
  await _token.save();

  res.status(200).json({
    url: _token.Url.originalUrl
  })
};

// Get all URLs
const getAllUrls = async (req, res) => {
  const urls = await Url.find().sort({ createdAt: -1 }).select('originalUrl shortUrl shortId clicks');
  res.json({ success: true, data: urls });
};

export { createShortUrl, redirectToOriginalUrl, getAllUrls };
