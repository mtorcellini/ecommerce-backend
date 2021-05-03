const router = require('express').Router();
const { Tag, Product, ProductTag} = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  const tags = await Tag.findAll({
    include: Product
  });
  return res.status(200).json(tags);

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  const tag = await Tag.findByPk(req.params.id, {
    include: Product
  });
  return res.status(200).json(tag);

});

router.post('/', async (req, res) => {
  // create a new tag

  // expect req.body
  /* 
    {
      "tag_name" : "extra spicy"
    }
  */

  const newTag = await Tag.create(req.body);
  return res.status(201).json(newTag)
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
