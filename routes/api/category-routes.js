const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const data = await Category.findAll({
    include: Product
  });
  return res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const data = await Category.findByPk(req.params.id, {
    include: Product
  });
  return res.status(200).json(data);
});

router.post('/', async (req, res) => {
  // create a new category
  // expect req.body
  /*
    {
      category_name: "Sports",
    }
  */
  
  const newData = await Category.create(req.body);
  return res.status(201).json(newData); 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
