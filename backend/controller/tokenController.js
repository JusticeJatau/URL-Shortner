import token from '../model/Token.js';
import { generateUniqueId } from '../utils/generateShortId.js';

const generateToken = async (req, res) => {
  const { originalUrl, customAlias } = req.body;
  if (!originalUrl) return res.status(400).json({ error: 'URL is required' });

  let shortId;

  if (customAlias) {
    const aliasRegex = /^[a-zA-Z0-9\-]+$/;
    if (!aliasRegex.test(customAlias))
      return res.status(400).json({ error: 'Invalid custom alias' });

    const existing = await Url.findOne({ shortId: customAlias });
    if (existing) return res.status(400).json({ error: 'Alias already taken' });

    shortId = customAlias;
  } else {
    shortId = generateUniqueId(); // generate unique short ID
  }

  const shortUrl = `${BASE_URL}/s/${shortId}`;

  const url = await Url.create({
    originalUrl,
    shortId,
    shortUrl,
    customAlias: customAlias || '',
    clicks: 0
  });

  res.status(201).json({
    success: true,
    data: {
      originalUrl,
      shortUrl,
      shortId,
      customAlias: customAlias || null,
      analyticsUrl: `${BASE_URL}/analytics/${shortId}`
    }
  });
};

// Redirect to original URL
const redirectToOriginalUrl = async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortId });
  if (!url) return res.status(404).json({ error: 'URL not found' });

  url.clicks += 1;
  await url.save();

  res.redirect(url.originalUrl);
};

// Get URL analytics
const getUrlAnalytics = async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortId });
  if (!url) return res.status(404).json({ error: 'URL not found' });

  res.json({
    success: true,
    data: {
      originalUrl: url.originalUrl,
      shortUrl: url.shortUrl,
      shortId: url.shortId,
      clicks: url.clicks
    }
  });
};

// Get all URLs
const getAllUrls = async (req, res) => {
  const urls = await Url.find().sort({ createdAt: -1 }).select('originalUrl shortUrl shortId clicks');
  res.json({ success: true, data: urls });
};

export { createShortUrl, redirectToOriginalUrl, getUrlAnalytics, getAllUrls };
