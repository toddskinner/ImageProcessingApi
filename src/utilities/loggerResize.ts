import express from 'express';

// Just for reference and example of middleware
// Since not a function that is part of Express, it does not have type definitions by default.
// So we have to add them.
const loggerResize = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  console.log(`Resize was visited`);
  next();
};

export default loggerResize;
