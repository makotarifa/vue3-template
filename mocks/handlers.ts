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
];
