import * as express from "express";

const router = express.Router();

/* GET home page. */
router.get("/projects/", function (req, res, next) {
    res.json({ success: true });
});

/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({ success: true });
});

export default router;
