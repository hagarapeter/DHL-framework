import { test } from "@playwright/test";
import { CustomerServicePage } from "../page-objects/CustomerServicePage";
import { ContactPage } from "../page-objects/ContactPage";

  test("verify redirect from customer service page to contact page", async ({ page }) => {
    //scenario:
    //open customer service page -> scroll to FAQ -> click on 4th question -> follow contact link -> verify redirect
    const customerServicePage = new CustomerServicePage(page);
    const contactPage = new ContactPage(page);

    await customerServicePage.open();
    await customerServicePage.scrollToFaqSection();
    const questionText = await customerServicePage.clickFaqQuestion(4);
    console.log(`Clicking on (4th) question: "${questionText}"`); 
    await customerServicePage.clickFindContactLink();
    const redirectedUrl = await contactPage.assertLoadedSuccessfully();
    console.log(`Redirected to: ${redirectedUrl}`);
  });