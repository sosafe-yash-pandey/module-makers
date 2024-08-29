export default function customLogger() {
    return {
      name: 'custom-logger',
      configureServer(server) {
        server.httpServer.once('listening', () => {
          const address = server.httpServer.address();
          const PORT = address.port;
          console.log('\x1b[36m%s\x1b[0m', `\n🚀 To open frontend please go to this link: http://localhost:${PORT}/\n`);
        });
      },
    }
  }