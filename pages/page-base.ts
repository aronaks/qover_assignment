//Base Page
import type { Locator, Page } from "@playwright/test";

export abstract class PageBase {
  constructor(public readonly page: Page) { }

  protected path = '/';
  protected title = '';

  /**
   * navigates to url
   */
  async goTo() {
    await this.page.goto(this.path);
  }

  /**
   * closes a page
   */
  async close() {
    await this.page.close();
  }

  protected getLocatorByCss(cssSelector: string): Locator {
    return this.page.locator(cssSelector);
  }

  /**
   * returns true if url and title match appropriate values
   */
  async at() {
    const actualTitle = await this.page.title();
    const actualURL = this.page.url();

    var result = actualURL === (this.path);
    result = result && actualTitle === this.title;
    return result;
  }

  /**
   * returns Save as handler after clicking on a link that triggers it
   */
  protected async clickLocatorToGetDownloadReference(locator: Locator) {
    const downloadPromise = this.page.waitForEvent('download');
    await locator.click();
    const download = await downloadPromise;
    return download;
  }

  /**
   * returns a new page Page Object after clicking on the link that triggers it
   */
  protected async clickLocatorToOpenNewPage(locator: Locator) {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      await locator.click()
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }
}