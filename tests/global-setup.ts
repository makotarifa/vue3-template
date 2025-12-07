import { server } from '../src/mocks/server';

const startServer = async () => {
  server.listen({ onUnhandledRequest: 'warn' });
};

export default startServer;
