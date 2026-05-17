import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CustomerServicePage extends BasePage {
  faqHeading: Locator;
  faqQuestions: Locator;
  findContactLink: Locator;

  constructor(page: Page) {
    super(page);
    this.faqHeading = page.locator('.c-component-accordion-list').first();
    this.faqQuestions = page.locator('.c-component-accordion-list').getByRole('button');
    this.findContactLink = page.locator('.c-component-accordion-list a').first();
  }

  async open() {
    await this.goto("https://www.dhl.com/us-en/home/customer-service.html");
    await this.acceptCookies();
  }

  async scrollToFaqSection() {
    await expect(this.faqHeading).toBeVisible();
  }

  async clickFaqQuestion(questionNumber: number) {
    const question = this.faqQuestions.nth(questionNumber - 1);
    await question.click();
  }

  async clickFindContactLink() {
    await expect(this.findContactLink).toBeVisible();
    await this.findContactLink.click();
  }
}