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
    const { username, password } = (await request.json()) as any;
    if (!username || !password) {
      return HttpResponse.json(
        { title: "Bad Request", detail: "Validation failed" },
        { status: 400 }
      );
    }
    const token = "fake-jwt-registered";
    return new HttpResponse(
      JSON.stringify({ token, expiresAt: new Date(Date.now() + 3600_000).toISOString(), username }),
      {
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": `AUTH_TOKEN=${token}; HttpOnly; Path=/; Max-Age=3600`,
        },
      }
    );
  }),

  http.post("/api/v1/login", async ({ request }) => {
    const { username, password } = (await request.json()) as any;
    if (username === "user" && password && password.length >= 8) {
      const token = "fake-jwt-login";
      return new HttpResponse(
        JSON.stringify({
          token,
          expiresAt: new Date(Date.now() + 3600_000).toISOString(),
          username,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `AUTH_TOKEN=${token}; HttpOnly; Path=/; Max-Age=3600`,
          },
        }
      );
    }
    return HttpResponse.json(
      { title: "Unauthorized", detail: "Invalid credentials" },
      { status: 401 }
    );
  }),
];
