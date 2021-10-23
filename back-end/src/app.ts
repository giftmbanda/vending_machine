import cors from "cors";
import express, { Application, Response } from 'express';
import router from './routes/productRoute';
import JSONResponse from './utils/JSONResponse';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json({ limit: '50mb' }));
        this.loadRoutes();
    }

    private loadRoutes(): void {

        // handle routes
        this.app.use('/', router);

        // handle non-existence routes
        this.app.use('*', (res: Response) => {
            JSONResponse.notFound(res, 'Page not found')
        });

        // handle server error
        this.app.use((res: Response) => {
            const error: Error = new Error();
            JSONResponse.serverError(res, error.message);
        });
    }
}

export default new App().app;
