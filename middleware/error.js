const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // when name exists
  if (err.name == "SequelizeUniqueConstraintError") {
    error = new ErrorResponse(
      `Resource name already exist in table ${err.parent.table}`,
      400
    );
  }

  // when incorect format ( id must be integer )
  if (err.name === "SequelizeDatabaseError") {
    error = new ErrorResponse(`Resource id must be integer`, 400);
  }
  res
    .status(error.statusCode || 500)
    .json({ success: false, errMessage: error.message || "Server Error" });
};

module.exports = errorHandler;
