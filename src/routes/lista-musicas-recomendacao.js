import express from "express";
import { GenerateListaRecomendacaoController } from "../controller/generate-lista-recomendacao-controller.js";
import { GenerateListaRecomendacaoMiddleware } from "../middleware/generate-lista-recomendacao-middleware.js";
const router = express.Router();

router.get(`/lista/recomendacao`, new GenerateListaRecomendacaoMiddleware().handle, new GenerateListaRecomendacaoController().handle)

export default router;