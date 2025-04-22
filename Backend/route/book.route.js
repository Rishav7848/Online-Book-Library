import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);//router will execute getBook fun when it gets req in "/" URL

export default router;