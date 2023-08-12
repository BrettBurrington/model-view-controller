const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  // Your database configuration here
});

const User = require('./User')(sequelize, Sequelize);
const Comment = require('./comment')(sequelize, Sequelize);
const Post = require('./post')(sequelize, Sequelize);


User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = {
    Sequelize,
    User,
    Comment,
    Post,
  };
