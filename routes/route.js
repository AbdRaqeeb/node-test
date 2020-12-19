import express from "express";

const router = express.Router();

import {lowestIndex} from "../controllers/magic.js";

import {validate} from "../controllers/validation.js";

import {removeItem} from "../controllers/remove.js";

router.route('/valid').post(validate);

router.route('/magic').post(lowestIndex);

router.route('/remove').delete(removeItem);

export default router;