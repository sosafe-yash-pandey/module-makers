import type { ViteDevServer } from 'vite';

export default function customLogger() {
  return {
    name: 'custom-logger',
    configureServer(server: ViteDevServer) {
      server.httpServer?.once('listening', () => {
        const address = server.httpServer?.address();
        if (address && typeof address !== 'string') {
          const PORT = address.port;
          console.log('\x1b[35m%s\x1b[0m', `

    ███████╗██████╗  ██████╗ ███╗   ██╗████████╗███████╗███╗   ██╗██████╗ 
    ██╔════╝██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝████╗  ██║██╔══██╗
    █████╗  ██████╔╝██║   ██║██╔██╗ ██║   ██║   █████╗  ██╔██╗ ██║██║  ██║
    ██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║╚██╗██║██║  ██║
    ██║     ██║  ██║╚██████╔╝██║ ╚████║   ██║   ███████╗██║ ╚████║██████╔╝
    ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚═════╝ 
                                                                                  
            `);
          console.log('\x1b[36m%s\x1b[0m', `\n🚀 To open frontend please go to this link: http://localhost:${PORT}/\n`);
        }
      });
    },
  }
}