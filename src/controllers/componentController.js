const { ComponentsCollection } = require("../collections/Collections");

const componentPost = async (req, res) => {
  try {
    const componentData = req.body;
    const query = { name: componentData.name };
    const isExist = await ComponentsCollection.findOne(query);
    if (isExist) {
      return res.status(201).send({ isExist, message: "user exist" });
    } else {
      const insert = await ComponentsCollection(componentData).save();
      return res.status(200).send({ insert });
    }
  } catch (error) {
    res.status(404).send({ message: "Server Problem" });
  }
};
const getComponentByCategory = async (req, res) => {
  try {
    const component = await ComponentsCollection.find({
      category: req.query.category,
    });
    return res.status(200).send({ component });
  } catch (error) {
    res.status(404).send({ message: "Server Problem" });
  }
};

const getAllComponent = async (req, res) => {
  try {
    const component = await ComponentsCollection.find();
    return res.status(200).send({ component });
  } catch (error) {
    res.status(404).send({ message: "Server Problem" });
  }
};
const updateComponent = async (req, res) => {
  const componentData = req.body;
  try {
    const update = await ComponentsCollection.findOneAndUpdate(
      { _id: componentData._id },
      componentData
    );
    return res.status(200).send({ update });
  } catch (error) {
    res.status(404).send({ message: "Server Problem" });
  }
};
const deletebyComponent = async (req, res) => {
  try {
    const deleteComponent = await ComponentsCollection.findOneAndDelete({
      _id: req.query.id,
    });
    return res.status(200).send({ deleteComponent });
  } catch (error) {
    res.status(404).send({ message: "Server Problem" });
  }
};
module.exports = {
  componentPost,
  getAllComponent,
  getComponentByCategory,
  updateComponent,
  deletebyComponent,
};
