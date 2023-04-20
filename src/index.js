import express from "express";
import cors from "cors";
import status from "./routes/service-status-route.js";
import musicas from "./routes/consult-musicas-route.js"
import generateQuantidadeMusicaAnoGenero from "./routes/generate-quantidade-musicas-by-genero-route.js"

const server = express();
console.clear();
server.use(
    express.urlencoded({
        extended: true,
    })
);
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
const port = 3050;

server.listen(port, async () => {
    server.use("/api", status);
    server.use("/api", musicas);
    server.use("/api", generateQuantidadeMusicaAnoGenero);


    console.log("--SERVER ON--");
}) 