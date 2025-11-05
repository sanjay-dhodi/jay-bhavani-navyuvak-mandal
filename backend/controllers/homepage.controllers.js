const collectionModel = require("../models/collection.model");

// fetch all record function
async function getAllRecord(req, resp) {
  try {
    const allRecord = await collectionModel.find({});

    if (allRecord.length === 0) {
      return resp.status(404).json({ message: "no record found" });
    }
    return resp.status(200).json(allRecord);
  } catch (error) {
    resp
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
}

// fetch single record
async function getSingleRecord(req, resp) {
  try {
    const { id } = req.params;
    const singleRecord = await collectionModel.findById(id);

    if (singleRecord) {
      return resp.status(200).json(singleRecord);
    }
  } catch (error) {
    resp
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
}

module.exports = {
  getAllRecord,
  getSingleRecord,
};
