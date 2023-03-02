const express = require("express");

const ctrl = require("../../controllers/books");

const {validateBody, isValidId} = require("../../middlewares");

const {schemas} = require("../../models/book");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

router.delete("/:id", isValidId, ctrl.deleteById);

module.exports = router;