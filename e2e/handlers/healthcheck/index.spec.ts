import { app } from "app";

test("should get msg", async () => {
    const response = await app.inject({
        path: "/api/v1/healthcheck",
        method: "GET",
    });

    const body = response.json();

    expect(body.msg).toBe("good");
});
