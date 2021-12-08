import fastify from "fastify";
import type { FastifyInstance } from "fastify";
import { setupV1Routes } from "./routes/v1";

const app: FastifyInstance = fastify({ logger: true });

app.register(require("fastify-cors"));

// api routes
app.register(
    (instance, opts, done) => {
        // all routes for v1
        setupV1Routes(instance);

        done();
    },
    { prefix: "/api/v1" }
);

export { app };
export default app;
