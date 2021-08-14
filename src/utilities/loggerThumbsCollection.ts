import express from 'express';

// Since not a function that is part of Express, it does not have type definitions by default.
// So we have to add them.
const loggerThumbs = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  let url = req.url;
  console.log(`Thumbs was visited`);
  next();
};

export default loggerThumbs;
