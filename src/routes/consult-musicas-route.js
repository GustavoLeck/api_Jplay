import express from "express";
import { ConsultMusicasMidleware } from "../middleware/consult-musicas-middleware.js";
import { ConsultMusicasController } from "../controller/consult-musicas-controller.js";
const router = express.Router();

router.post(`/musicas`, new ConsultMusicasMidleware().handle, new ConsultMusicasController().handle)

export default router;