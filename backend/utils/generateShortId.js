import crypto from 'crypto';

const generateUniqueId = (length = 4) => {
  const timestamp = Date.now().toString(36); // e.g., 'kfj7s'
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomPart = '';
  const randomBytes = crypto.randomBytes(length);

  for (let i = 0; i < length; i++) {
    randomPart += chars[randomBytes[i] % chars.length];
  }

  return `${timestamp}${randomPart}`; // e.g., 'kfj7sA1bC'
};

export { generateUniqueId };
