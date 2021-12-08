import { chromium, Browser } from "playwright";

export async function getPdfBuffer(html: string): Promise<Buffer> {
    let browser: null | Browser = null;

    try {
        browser = await chromium.launch();
        const page = await browser.newPage();
        await page.setContent(html, {
            waitUntil: "networkidle",
        });
        const pdfBuffer = await page.pdf({ path: "example.pdf", format: "A4" });

        return pdfBuffer;
    } catch (error: any) {
        throw new Error(error);
    } finally {
        // should close browser
        if (browser) {
            await browser.close();
        }
    }
}
