import http from 'http';
import app from './app';
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

class Server {
  public server: http.Server;
  public port: string | number;

  constructor(port?: string | number) {
    this.server = http.createServer(app);
    this.port = process.env.PORT || 4000;
    this.listenToPort(this.port);
  }

  private listenToPort(port: string | number): void {
    this.server.listen(port, () => {
      console.log(`App running on http://localhost:${port}`);
    });
  }
}

const createServer = new Server();
