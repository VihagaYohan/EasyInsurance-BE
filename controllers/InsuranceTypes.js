// @desc    Get all Insurance types
// @route   GET /api/v1/insuranceTypes
// @access  Public
exports.getInsuranceTypes = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all insurance types",
  });
};

// @desc    Get a Insurance type
// @route   GET /api/v1/insuranceTypes/:id
// @access  Public
exports.getInsuranceType = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show insurance type for ${req.params.id}`,
  });
};

// @desc    Create insurance type
// @route   POST /api/v1/insuranceTypes
// @access  Private
exports.addInsuranceType = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Add new insurance type",
  });
};

// @desc   Update insurance type
// @route  PUT /api/v1/insuranceTypes/:id
// @access Private
exports.updateInsuranceType = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update insurance type data for ${req.params.id}`,
  });
};

// @desc    Delete insurance type
// @route   DELET /api/v1/insuranceTypes/:id
// @access  Private
exports.deleteInsuranceType = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete insurance type data for ${req.params.id}`,
  });
};
