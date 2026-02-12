import express from 'express';
import { createShortUrl, redirectToOriginalUrl, getAllUrls } from '../controller/urlController.js';

const router = express.Router();
// Create short URL
router.post('/shorten', createShortUrl);
// Get original URL
router.get('/s/:token', redirectToOriginalUrl);
// Get all URLs (for dashboard)
router.get('/urls', getAllUrls);

export default router;
