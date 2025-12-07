import { server } from '../mocks/server';

export default async function globalTeardown() {
  server.close();
}
