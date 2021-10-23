import bodyParser from 'body-parser';
import cors from "cors";
import express, { Application, Request, Response } from 'express';
import router from './routes/productRoute';
import JSONResponse from './utils/JSONResponse';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.loadRoutes();
    }

    private loadRoutes(): void {

        // handle routes
        this.app.use('/', router);

        // handle non-existence routes
        this.app.use('*', (req: Request, res: Response) => {
            JSONResponse.notFound(req, res, 'Page not found')
        });

        // handle server error
        this.app.use((req: Request, res: Response) => {
            const error: Error = new Error();
            JSONResponse.serverError(req, res, error.message);
        });
    }
}

export default new App().app;
