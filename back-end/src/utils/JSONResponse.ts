import { Request, Response } from 'express';

class JSONResponse {
  constructor() { }

  static success(req: Request, res: Response, message: string, data?: any) {
    res.status(200).json({ code: 200, message: message || "success", data });
  }

  static badRequest(req: Request, res: Response, message: string, data?: any) {
    res.status(400).json({ code: 400, message: message || "bad request", data });
  }

  static notFound(req: Request, res: Response, message: string, data?: any) {
    res.status(404).json({ code: 404, message: message || "page not found", data });
  }

  static serverError(req: Request, res: Response, message: string, data?: any) {
    res.status(500).json({ code: 500, message: message || "internal server error", data });
  }
  
}

export default JSONResponse;
