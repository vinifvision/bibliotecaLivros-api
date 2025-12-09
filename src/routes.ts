import { Router } from "express";
import { LivroController } from "./controller/LivroController";

const router = Router();
const controller = new LivroController();

router.post("/livros", (req, res) => controller.create(req, res));
router.get("/livros", (req, res) => controller.getAll(req, res));
router.get("/livros/:id", (req, res) => controller.getOne(req, res));
router.put("/livros/:id", (req, res) => controller.update(req, res));
router.delete("/livros/:id", (req, res) => controller.remove(req, res));

export default router;
