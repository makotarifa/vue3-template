import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/auth/login", async ({ request }) => {
    const { username, password } = (await request.json()) as any;
    if (username === "user" && password === "password") {
      return HttpResponse.json({
        token: "fake-token-123",
        user: { id: 1, name: "Test User", username },
      });
    }
    return HttpResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }),

  http.get("/api/dummy", () => {
    return HttpResponse.json([
      { id: 1, name: "Example 1" },
      { id: 2, name: "Example 2" },
    ]);
  }),

  // New API v1 endpoints for auth (mocked)
  http.post("/api/v1/register", async ({ request }) => {
    const payload = (await request.json()) as unknown as { username?: string; password?: string };
    const { username, password } = payload;
    if (!username || !password) {
      return HttpResponse.json(
        { title: "Bad Request", detail: "Validation failed" },
        { status: 400 }
      );
    }
    const token = "fake-jwt-registered";
    const maxAge = 3600;
    const expiresAt = new Date(Date.now() + maxAge * 1000).toISOString();
    return HttpResponse.json(
      { token, expiresAt, username },
      {
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": `AUTH_TOKEN=${token}; HttpOnly; Path=/; Max-Age=${maxAge}`,
        },
      }
    );
  }),

  http.post("/api/v1/login", async ({ request }) => {
    const payload = (await request.json()) as unknown as { username?: string; password?: string };
    const { username, password } = payload;
    if (username === "user" && password && password.length >= 8) {
      const token = "fake-jwt-login";
      const maxAge = 3600;
      const expiresAt = new Date(Date.now() + maxAge * 1000).toISOString();
      return HttpResponse.json(
        { token, expiresAt, username },
        {
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `AUTH_TOKEN=${token}; HttpOnly; Path=/; Max-Age=${maxAge}`,
          },
        }
      );
    }
    return HttpResponse.json(
      { title: "Unauthorized", detail: "Invalid credentials" },
      { status: 401 }
    );
  }),
  http.get("/api/v1/me", async ({ request }) => {
    const cookie = request.headers.get("cookie") || "";
    if (cookie.includes("AUTH_TOKEN=")) {
      return HttpResponse.json({ username: "user" });
    }
    return HttpResponse.json({ title: "Unauthorized", detail: "Not logged in" }, { status: 401 });
  }),
];
