import { test, expect } from '@playwright/test';
import PageBikeQuote from '../pages/page-bike-quote';


test.describe('PageBikeQuote tests', () => {
  let pageBikeQuote: PageBikeQuote;

  test.beforeEach(async ({ page }) => {
    pageBikeQuote = new PageBikeQuote(page);
    
    await pageBikeQuote.goTo();
  });

  test.afterEach(async () => {
    await pageBikeQuote.close();
  });

  test('clicking the link "See All FAQs" should redirect to page FAQs page', async () => {
    const pageFaqs = await pageBikeQuote.clickLinkSeeAllFaqs();
    await expect(pageFaqs).toHaveTitle('Frequenly asked questions');
  });

  test('click the link "Data privacy policy", check url and title, expect correct URL and title', async () => {
    const pageTermsAndPolicies = await pageBikeQuote.clickLinkDataPrivacyPolicy();
    await expect(pageTermsAndPolicies).toHaveURL('https://www.qover.com/terms-and-policies#parentVerticalTab4');
    await expect(pageTermsAndPolicies).toHaveTitle('Terms & policies | Qover');
  });

  test('click the link "Complaint", check url and title, expect correct URL and title', async () => {
    const pageTermsAndPolicies = await pageBikeQuote.clickLinkComplaint();
    await expect(pageTermsAndPolicies).toHaveURL('https://www.qover.com/terms-and-policies#complaints');
    await expect(pageTermsAndPolicies).toHaveTitle('Terms & policies | Qover');
  });

  test('click the link "Conflicts of interests", check url and title, expect correct URL and title', async () => {
    const pageTermsAndPolicies = await pageBikeQuote.clickLinkConflictsOfInterests();
    await expect(pageTermsAndPolicies).toHaveURL('https://www.qover.com/terms-and-policies#conflicts');
    await expect(pageTermsAndPolicies).toHaveTitle('Terms & policies | Qover');
  });

  test('click the link "Insurance product information document", check default name of a file to download, expect "IPID.pdf"', async () => {
    const downloadReference = await pageBikeQuote.clickLinkInsuranceProductInformationDocument();
    expect(downloadReference.suggestedFilename()).toBe('IPID.pdf');
  });

  test('click the link "General Terms & Conditions", check default name of a file to download, expect "generalConditions.pdf"', async () => {
    const downloadReference = await pageBikeQuote.clickLinkDataGeneralTermsAndConditions();
    expect(downloadReference.suggestedFilename()).toBe('generalConditions.pdf');
  });
});