import express from 'express';
import { createShortUrl, redirectToOriginalUrl, getUrlAnalytics, getAllUrls } from '../controller/URLController.js';

const router = express.Router();
// Create short URL
router.post('/shorten', createShortUrl);
// Redirect to original URL
router.get('/s/:token', redirectToOriginalUrl);

// Get URL analytics
router.get('/analytics/:shortId', getUrlAnalytics);

// Get all URLs (for dashboard)
router.get('/urls', getAllUrls);

export default router;