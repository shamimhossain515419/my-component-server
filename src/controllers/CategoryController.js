const { CategoryCollection } = require("../collections/Collections");

const CategoryPost = async (req, res) => {
  try {
    const category = req.body;
    const query = { name: category.name };
    const isExist = await CategoryCollection.findOne(query);
    if (isExist) {
      return res.status(201).send({ isExist, message: "category exist" });
    } else {
      const insert = await CategoryCollection(category).save();
      return res.status(200).send({ insert });
    }
  } catch (error) {
    res.status(404).send({ message: "Server Problem" });
  }
};

const CategoryDelete = async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const deleteCategory = await CategoryCollection.findOneAndDelete(query);
    return res.status(200).send({ deleteCategory });
  } catch (error) {
    res.status(404).send({ message: "Server Problem" });
  }
};

const CategoryGet = async (req, res) => {
  try {
    const category = await CategoryCollection.find();
    return res.status(200).send({ category });
  } catch (error) {
    res.status(404).send({ message: "Server Problem" });
  }
};

module.exports = {
  CategoryPost,
  CategoryDelete,
  CategoryGet,
};
