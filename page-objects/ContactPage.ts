import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactPage extends BasePage {
    mainContent: Locator;

    constructor(page: Page) {
        super(page);
        this.mainContent = page.locator("main").first();
    }

    async assertLoadedSuccessfully(): Promise<string> {
        const [response] = await Promise.all([
            this.page.waitForResponse(resp => resp.url().includes("find-your-contact.html")),
            this.page.waitForURL("**/find-your-contact.html", { timeout: 10000 }),
        ]);

        expect(response.status()).toBeLessThan(300);
        await expect(this.mainContent).toBeVisible();

        return this.page.url();
    }
}