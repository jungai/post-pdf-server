import type { FastifyInstance } from "fastify";
import { getPdfBuffer } from "../../utils/pdf";

const schema = {
    body: {
        type: "object",
        required: ["html"],
        properties: {
            html: {
                type: "string",
            },
        },
    },
};

interface IBody {
    html: string;
}

export const postPdf = (fast: FastifyInstance["post"], path: string) => {
    fast<{ Body: IBody }>(path, { schema }, async (req, reply) => {
        const pdfBuffer = await getPdfBuffer(req.body.html);

        reply.send(pdfBuffer);
    });
};
