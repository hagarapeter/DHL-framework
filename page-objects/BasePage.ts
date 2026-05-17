import { Page } from "@playwright/test";

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });
    }

    async acceptCookies() {
        const acceptBtn = this.page.locator("#onetrust-accept-btn-handler");
        if (await acceptBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
            await acceptBtn.click();
        }
    }
}