// @ts-ignore
import { rest } from "msw";

export const handlers = [
  rest.post("/api/auth/login", (req: any, res: any, ctx: any) => {
    const { username, password } = req.body as any;
    if (username === "user" && password === "password") {
      return res(
        ctx.status(200),
        ctx.json({ token: "fake-token-123", user: { id: 1, name: "Test User", username } })
      );
    }
    return res(ctx.status(401), ctx.json({ message: "Invalid credentials" }));
  }),

  rest.get("/api/dummy", (req: any, res: any, ctx: any) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "Example 1" },
        { id: 2, name: "Example 2" },
      ])
    );
  }),
];
