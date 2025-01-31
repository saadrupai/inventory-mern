const express = require("express");
const authVerifyMiddleware = require("../middlewares/authVerifyMiddleware");

const userController = require("../controllers/user/userController");
const brandController = require("../controllers/brand/brandController");
const categoryController = require("../controllers/category/categoryController");
const customerController = require("../controllers/customer/customerController");
const supplierController = require("../controllers/supplier/supplierController");
const expenseTypesController = require("../controllers/expense/expenseTypeController");

const router = express.Router();

//user profile
router.post("/registration", userController.registrtion);
router.post("/login", userController.login);
router.post(
  "/profile-update",
  authVerifyMiddleware,
  userController.profileUpdate
);
router.get(
  "/profile-details",
  authVerifyMiddleware,
  userController.profileDetails
);
router.get("/recover-email-verify/:email", userController.recoverEmailVerify);
router.get("/recover-otp-verify/:email/:otp", userController.recoverOTPVerify);
router.post("/recover-reset-password", userController.recoverResetPassword);

//brand
router.post("/create-brand", authVerifyMiddleware, brandController.createBrand);
router.post(
  "/update-brand/:id",
  authVerifyMiddleware,
  brandController.updateBrand
);
router.get(
  "/brand-list/:pageNo/:perPage/:searchKeyword",
  authVerifyMiddleware,
  brandController.listBrand
);
router.get(
  "/brand-drop-down",
  authVerifyMiddleware,
  brandController.dropDownBrand
);

//category
router.post(
  "/create-category",
  authVerifyMiddleware,
  categoryController.createCategory
);
router.post(
  "/update-category/:id",
  authVerifyMiddleware,
  categoryController.updateCategory
);
router.get(
  "/category-list/:pageNo/:perPage/:searchKeyword",
  authVerifyMiddleware,
  categoryController.listCategory
);
router.get(
  "/category-drop-down",
  authVerifyMiddleware,
  categoryController.dropDownCategory
);

//customer
router.post(
  "/create-customer",
  authVerifyMiddleware,
  customerController.createCustomer
);
router.post(
  "/update-customer/:id",
  authVerifyMiddleware,
  customerController.updateCustomer
);
router.get(
  "/customer-list/:pageNo/:perPage/:searchKeyword",
  authVerifyMiddleware,
  customerController.listCustomer
);
router.get(
  "/customer-drop-down",
  authVerifyMiddleware,
  customerController.dropDownCustomer
);

//supplier
router.post(
  "/create-supplier",
  authVerifyMiddleware,
  supplierController.createSupplier
);
router.post(
  "/update-supplier/:id",
  authVerifyMiddleware,
  supplierController.updateSupplier
);
router.get(
  "/supplier-list/:pageNo/:perPage/:searchKeyword",
  authVerifyMiddleware,
  supplierController.listSupplier
);
router.get(
  "/supplier-drop-down",
  authVerifyMiddleware,
  supplierController.dropDownSupplier
);

//expense
router.post(
  "/create-expense-types",
  authVerifyMiddleware,
  expenseTypesController.createExpenseTypes
);
router.post(
  "/update-expense-types/:id",
  authVerifyMiddleware,
  expenseTypesController.updateExpenseTypes
);
router.get(
  "/expense-types-list/:pageNo/:perPage/:searchKeyword",
  authVerifyMiddleware,
  expenseTypesController.listExpenseTypes
);
router.get(
  "/expense-types-drop-down",
  authVerifyMiddleware,
  expenseTypesController.dropDownExpenseTypes
);

module.exports = router;
