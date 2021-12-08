import fastify from "fastify";
import type { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify({ logger: true });

app.register(require("fastify-cors"));

// api routes
app.register(
    (v1Ctx, opts, done) => {
        v1Ctx.get("/", (_req, reply) => {
            reply.send({ hello: "world" });
        });

        v1Ctx.post("/pdf", (_req, reply) => {
            reply.send({ hello: "world" });
        });

        done();
    },
    { prefix: "/api/v1" }
);

export { app };
export default app;
