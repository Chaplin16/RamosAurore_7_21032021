const User = require('../models/user');
const Tchat = require('../models/tchat');
const Comment = require('../models/comment');

 //User.hasMany(Tchat, { onDelete: 'cascade' });
 Tchat.belongsTo(User);   
 Tchat.hasMany(Comment, { onDelete: 'cascade' });
 Comment.belongsTo(User);
 User.hasMany(Tchat, { onDelete: 'cascade' });
 
async function loadModel() {
    await  User.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null)
    await User.sync({alter:true});
    await Tchat.sync({alter:true});
    await Comment.sync({alter:true});
    await User.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null)
};

loadModel();

module.exports = {User, Tchat, Comment};
