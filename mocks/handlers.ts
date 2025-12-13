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
  http.get("/api/dummy/:id", ({ params }) => {
    const id = Number(params.id);
    const items = [
      { id: 1, name: "Example 1" },
      { id: 2, name: "Example 2" },
    ];
    const found = items.find((i) => i.id === id);
    if (!found) {
      return HttpResponse.json({ title: "Not Found" }, { status: 404 });
    }
    return HttpResponse.json(found);
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
      return HttpResponse.json({
        authenticated: true,
        user: { id: "1", username: "user", email: "user@example.com", name: "Test User" },
      });
    }
    return HttpResponse.json({ authenticated: false }, { status: 401 });
  }),
  http.get("/api/v1/users/profile", async ({ request }) => {
    const cookie = request.headers.get("cookie") || "";
    if (!cookie.includes("AUTH_TOKEN=")) {
      return HttpResponse.json({ title: "Unauthorized" }, { status: 401 });
    }
    return HttpResponse.json({
      id: "1",
      username: "user",
      email: "user@example.com",
      name: "Test User",
    });
  }),
  http.put("/api/v1/users/profile", async ({ request }) => {
    const cookie = request.headers.get("cookie") || "";
    if (!cookie.includes("AUTH_TOKEN=")) {
      return HttpResponse.json({ title: "Unauthorized" }, { status: 401 });
    }
    const body = (await request.json()) as { name?: string; email?: string };
    return HttpResponse.json({
      id: "1",
      username: "user",
      email: body.email || "user@example.com",
      name: body.name || "Test User",
    });
  }),
  http.post("/api/v1/logout", async () => {
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "AUTH_TOKEN=; Path=/; Max-Age=0",
      },
    });
  }),
];
