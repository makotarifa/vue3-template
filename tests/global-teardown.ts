import { server } from '../src/mocks/server';

export default async function globalTeardown() {
  server.close();
}
