# DHL Playwright Test Suite

Automated test for the DHL Customer Service FAQ flow, built with Playwright (TS) using the Page Object Model architecture.

## Setup

```bash
npm install
npx playwright install chromium
```

## Run

```bash
npm test                  # headless
npm run test:headed       # watch the browser
npm run test:debug        # step through
npm run report            # open HTML report
```

## Structure

```
page-objects/
  BasePage.ts             # shared navigation and cookie handling
  CustomerServicePage.ts  # FAQ interactions
  ContactPage.ts          # redirect assertions
tests/
  customerService.test.ts
playwright.config.ts
tsconfig.json
```