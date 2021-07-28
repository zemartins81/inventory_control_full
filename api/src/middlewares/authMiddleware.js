import jwt from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';

function extractToken(data) {
  const token = data || '';
  return token.replace('Bearer ', '');
}

export default function (req, res, next) {
  const token = extractToken(req.headers.authorization);

  jwt.verify(
    token,
    process.env.JWT_PUBLIC_KEY,
    {
      algorithm: 'RS256',
    },
    (err, decoded) => {
      if (err) return res.status(401).send({ error: 'Token invalid' });

      req.userId = decoded.id;

      return next();
    }
  );
}
