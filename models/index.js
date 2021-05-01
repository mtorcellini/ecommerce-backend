// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Categories have many Products

// These are used in pairs so that each model "knows" about the other and we can perform certain sequelize functonality on either model
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
Product.belongsTo(Category);

// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag});
Tag.belongsToMany(Product, {through: ProductTag});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
