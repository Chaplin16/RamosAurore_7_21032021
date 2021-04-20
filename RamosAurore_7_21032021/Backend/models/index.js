const User = require('../models/user');
const Tchat = require('../models/tchat');
const Comment = require('../models/comment');

 //User.hasMany(Tchat, { onDelete: 'cascade' });
 Tchat.belongsTo(User, { onDelete: 'cascade', hooks:true });   
 Tchat.hasMany(Comment, { onDelete: 'cascade', hooks:true });
 Comment.belongsTo(User, { onDelete: 'cascade', hooks:true });
 User.hasMany(Tchat, { onDelete: 'cascade', hooks:true });

 
async function loadModel() {
    await  User.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null)
    await User.sync({alter:true});
    await Tchat.sync({alter:true});
    await Comment.sync({alter:true});
    await User.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null)
};

loadModel();

module.exports = {User, Tchat, Comment};
