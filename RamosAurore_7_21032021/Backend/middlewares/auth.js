// //securité pour verifier le TOKEN
const jsonwebtoken = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //on trouve le numero du token par son emplacement 
    req.token = jsonwebtoken.verify(token, `${process.env.TOP_SECRET}`);

    next();
  } catch {

    res.status(401).json({
      error: new Error('requête non authentifiée!')
    });
  }
};