import http from 'http';
import app from './app';

class Server {
  private server: http.Server;
  private port: string | number;

  constructor(port?: string | number ) {
    this.server = http.createServer(app);
    this.port = process.env.PORT || port || 4000;
    this.listenToPort(this.port);
  }

  private listenToPort(port: string | number): void {
    this.server.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  }
}

const server = new Server();
