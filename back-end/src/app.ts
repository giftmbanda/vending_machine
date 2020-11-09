import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import router from './routes/productRoute';
import JSONResponse from './utils/JSONResponse';

class App {
    public express: Application;;

    constructor() {
        this.express = express();
        this.express.use(bodyParser.json({ limit: '50mb' }));
        this.loadRoutes();
    }

    private loadRoutes(): void {

        // handle routes
        this.express.use('/', router);

        // handle non-existence routes
        this.express.use('*', (req: Request, res: Response) => {
            JSONResponse.notFound(req, res, 'Page not found')
        });

        // handle server error
        this.express.use((req: Request, res: Response) => {
            const error: Error = new Error();
            JSONResponse.serverError(req, res, error.message);
        });
    }
}

export default new App().express;