import express from "express";
import { GenerateQuantidadeMusicasByGeneroController } from "../controller/generate-quantidade-musicas-by-genero-controller.js";
const router = express.Router();

router.post(`/generate/quantidade/genero`, new GenerateQuantidadeMusicasByGeneroController().handle)

export default router;