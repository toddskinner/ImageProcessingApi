import express from 'express';

// since not a function that is part of Express, it does not have type definitions by default. 
// So we have to add them.
const loggerFullsize = (req: express.Request, res: express.Response, next: Function): void => {
    let url = req.url;
    console.log(`Fullsize was visited`);
    next();
};

export default loggerFullsize;