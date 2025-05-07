const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");

router.get("/", supplierController.getSuppliers);
router.get("/:id", supplierController.getSupplierById);
router.post("/", supplierController.createSupplier);
router.put("/:id", supplierController.updateSupplier);
router.post("/:id", supplierController.deleteSupplier);
router.post("/restore/:id", supplierController.restoreSupplier);

module.exports = router;
