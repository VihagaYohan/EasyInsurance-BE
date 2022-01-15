const express = require("express");
const router = express.Router();
const {
  getInsuranceTypes,
  getInsuranceType,
  addInsuranceType,
  updateInsuranceType,
  deleteInsuranceType,
} = require("../controllers/InsuranceTypes");

router.route("/").get(getInsuranceTypes).post(addInsuranceType);
router
  .route("/:id")
  .get(getInsuranceType)
  .put(updateInsuranceType)
  .delete(deleteInsuranceType);

module.exports = router;
