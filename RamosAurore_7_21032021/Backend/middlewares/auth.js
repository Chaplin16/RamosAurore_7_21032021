// //securité pour verifier le TOKEN
// const jsonwebtoken = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     try {   
//         const token = req.headers.authorization.split(' ')[1]; //on trouve le numero du token par son emplacement 
//         const decodedToken = jsonwebtoken.verify(token, `${process.env.TOP_SECRET}`);
//         const userId = decodedToken.userId;//on en fait un objet JS pour récupérer l'Id qui est dedans
    
//         if (req.body.id && req.body.id !== id) {  //on verifie userId avec celui de la requete
//           throw "Identitée de l'utilisateur non enregistrée";
//         } else {
//           next();
//         }
//     } catch {
//         res.status(401).json({
//             error: new Error('requête non authentifiée!')
//         });
//     }
// };