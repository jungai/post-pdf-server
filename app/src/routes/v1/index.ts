import type { FastifyInstance } from "fastify";
import { healthCheck } from "../../handlers/healthcheck";
import { postPdf } from "../../handlers/post_pdf";

export function setupV1Routes(instance: FastifyInstance) {
    // health check
    healthCheck(instance.get.bind(instance), "/healthcheck");

    // pdf
    postPdf(instance.post.bind(instance), "/pdf");
}
