import express from "express";
import { ConsultQuantidadeGeneroByAnoController } from "../controller/consult-quantidade-musicas-by-genero-controller.js";
import { GenerateQuantidadeMusicasByGeneroController } from "../controller/generate-quantidade-musicas-by-genero-controller.js";
import { ConsultQuantidadeMusicasByGeneroMiddleware } from "../middleware/consult-quantidade-musicas-by-genero-middleware.js";

const router = express.Router();

router.get(`/quantidade/genero`, new ConsultQuantidadeMusicasByGeneroMiddleware().handle, new ConsultQuantidadeGeneroByAnoController().handle)

router.post(`/quantidade/genero`, new GenerateQuantidadeMusicasByGeneroController().handle)
export default router;