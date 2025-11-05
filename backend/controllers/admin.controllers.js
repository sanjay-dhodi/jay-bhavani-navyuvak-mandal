const collectionModel = require("../models/collection.model");

// cretae record
async function createRecord(req, resp) {
  try {
    const inputData = req.body;
    const createdRecord = await collectionModel.create(inputData);

    if (!createdRecord) {
      return resp.status(500).json({ message: "failed to create member" });
    }

    return resp.status(201).json({ message: "member created succefully" });
  } catch (error) {
    resp
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
}

// update record
async function updateRecord(req, resp) {
  try {
    const { id } = req.params;
    const monthObj = req.body.month;

    const dataForUpdate = {};

    for (let key in monthObj) {
      dataForUpdate[`month.${key}`] = monthObj[key];
    }

    const updatedRecord = await collectionModel.findByIdAndUpdate(
      id,
      {
        $set: dataForUpdate,
      },
      { new: true }
    );

    if (!updatedRecord) {
      return resp.status(500).json({ message: "failed to update" });
    }

    return resp.status(200).json({ message: "record successfully updated" });
  } catch (error) {
    resp
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
}

// delete record
async function deleteRecord(req, resp) {
  try {
    const { id } = req.params;
    const deletedRecord = await collectionModel.findByIdAndDelete(id);

    if (!deletedRecord) {
      return resp.status(500).json({ message: "record not found for delete " });
    }

    return resp.status(200).json({ message: "record succesfully deleted" });
  } catch (error) {
    return resp.status(500).json({ message: "internal server error" });
  }
}

module.exports = {
  updateRecord,
  deleteRecord,
  createRecord,
};
