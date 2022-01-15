const InsuranceType = require("../models/InsuranceType");
const ErrorResponse = require("../util/errorResponse");

// @desc    Get all Insurance types
// @route   GET /api/v1/insuranceTypes
// @access  Public
exports.getInsuranceTypes = async (req, res, next) => {
  try {
    const insuranceTypes = await InsuranceType.find();
    res.status(200).json({
      success: true,
      data: insuranceTypes,
    });
  } catch (error) {
    next(error);
  }
};
  // @desc    Get a Insurance type
  // @route   GET /api/v1/insuranceTypes/:id
  // @access  Public
  exports.getInsuranceType = async (req, res, next) => {
    try {
      const insuranceType = await InsuranceType.findById(req.params.id);
      if (!insuranceType) {
        return next(
          new ErrorResponse(
            `Unable to locate insurance type for ${req.params.id}`,
            404
          )
        );
      }
      res.status(200).json({
        success: true,
        data: insuranceType,
      });
    } catch (error) {
      next(error);
    }
  };

  // @desc    Create insurance type
  // @route   POST /api/v1/insuranceTypes
  // @access  Private
  exports.addInsuranceType = async (req, res, next) => {
    try {
      const insuranceType = await InsuranceType.create(req.body);

      res.status(201).json({
        success: true,
        data: insuranceType,
      });
    } catch (error) {
      next(error);
    }
  };

  // @desc   Update insurance type
  // @route  PUT /api/v1/insuranceTypes/:id
  // @access Private
  exports.updateInsuranceType = async (req, res, next) => {
    try {
      const insuranceType = await InsuranceType.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!insuranceType) {
        return next(
          new ErrorResponse(
            `Unable to locate insurance type for ${req.params.id}`,
            404
          )
        );
      }
      res.status(200).json({
        success: true,
        data: insuranceType,
        msg: `Update insurance type data for ${req.params.id}`,
      });
    } catch (error) {
      next(error);
    }
  };

  // @desc    Delete insurance type
  // @route   DELET /api/v1/insuranceTypes/:id
  // @access  Private
  exports.deleteInsuranceType = async (req, res, next) => {
    try {
      const insuranceType = await InsuranceType.findByIdAndDelete(
        req.params.id
      );
      if (!insuranceType) {
        return next(
          new ErrorResponse(
            `Unable to locate insurance type for ${req.params.id}`,
            404
          )
        );
      }
      res.status(200).json({
        success: true,
        data: insuranceType,
        msg: `Delete insurance type data for ${req.params.id}`,
      });
    } catch (error) {
      next(error);
      /*  res.status(400).json({
      success: false,
      msg: "Bad request",
    }); */
    }
  };

