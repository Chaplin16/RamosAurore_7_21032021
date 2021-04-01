const User = require('../models/user');
const Tchat = require('../models/tchat');
const Comment = require('../models/comment');

 User.hasMany(Tchat, { onDelete: 'cascade' });

 //User.hasMany(Comment, { onDelete: 'cascade' });

// Tchat.belongsTo(User, { onDelete: 'cascade'});
    
 Tchat.hasMany(Comment, { onDelete: 'cascade' });

 //Comment.belongsTo(Tchat, { onDelete: 'cascade'});

// Comment.belongsTo(User, { onDelete: 'cascade' });
async function loadModel() {
    await  User.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null)
    await User.sync({force:true});
    await Tchat.sync({force:true});
    await Comment.sync({force:true});
    await User.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null)
};

loadModel();

module.exports = {User, Tchat, Comment};
