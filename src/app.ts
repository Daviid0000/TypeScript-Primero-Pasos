import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import router from "./router/routes";

export default class Server {

    private app: Application;
    private port: number;
    private host: string;

    constructor() {
        this.app = express();
        this.port = 3000;
        this.host = "localhost";

        this.dbConnect();
        this.middleware();
        this.routes()
        
    }

    dbConnect(){
        console.log("Conexión con la base de datos exitosa")
    };

    middleware(){
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(helmet())
    };

    routes(){
        this.app.use("/api", router)
    };

    listen(){
        this.app.listen(`Servidor escuchando en el puerto http://localhost:${this.port}`)
    };
}