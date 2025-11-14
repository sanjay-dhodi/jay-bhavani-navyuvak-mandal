const collectionModel = require("../models/collection.model");

// cretae record
async function createRecord(req, resp) {
  try {
    const { name, month } = req.body;

    if (!name || !name.trim()) {
      return resp.status(400).json({ message: "name required" });
    }

    if (name.trim().length < 2) {
      return resp
        .status(400)
        .json({ message: "name must be at least 2 characters" });
    }

    if (!month || !Object.values(month).some((v) => v === true)) {
      return resp.status(400).json({ message: "month required" });
    }

    const createdRecord = await collectionModel.create({ name, month });

    if (!createdRecord) {
      return resp.status(500).json({ message: "failed to create member" });
    }

    return resp.status(201).json({ message: "member created succefully" });
  } catch (error) {
    if (error.code === 11000) {
      return resp.status(400).json({ message: "Name already exists" });
    }

    resp.status(500).json({ message: "internal server error" });
  }
}

// update record
async function updateRecord(req, resp) {
  try {
    const { id } = req.params;
    const name = req.body.name;
    const monthObj = req.body.month;

    if (!name || !name.trim()) {
      return resp.status(400).json({ message: "name required" });
    }

    if (name.trim().length < 2) {
      return resp
        .status(400)
        .json({ message: "name must be at least 2 characters" });
    }

    if (!monthObj || Object.keys(monthObj).length === 0) {
      return resp.status(400).json({ message: "month is required" });
    }

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
