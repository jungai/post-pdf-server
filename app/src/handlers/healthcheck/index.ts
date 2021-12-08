import type { FastifyInstance } from "fastify";

export const healthCheck = (fast: FastifyInstance["get"], path: string) => {
    fast("/healthcheck", (_req, reply) => {
        reply.send({ msg: "good" });
    });
};
