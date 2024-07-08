import { PageBase } from '../pages/page-base';

export default class PageBikeQuote extends PageBase {

  protected path = '/bike/quote?key=pk_9153C6B0DDB3C97367AE&locale=en-BE';
  protected title = 'Bike insurance';

  private readonly locatorLinkInsuranceProductInformationDocument = this.getLocatorByCss('a[data-test="faq.insuranceProductInformationLink"]');
  private readonly locatorLinkDataGeneralTermsAndConditions = this.getLocatorByCss('a[data-test="faq.generalPolicyLink"]');
  private readonly locatorLinkDataPrivacyPolicy = this.getLocatorByCss('a[data-test="faq.privacyPolicyLink"]');
  private readonly locatorLinkComplaint = this.getLocatorByCss('a[data-test="faq.complaintsLink"]');
  private readonly locatorLinkConflictsOfInterests = this.getLocatorByCss('a[data-test="faq.conflictsOfInterestPolicyLink"]');
  private readonly locatorLinkSeeAllFaqs = this.getLocatorByCss('a[data-test="faq.fullFaqLink"]');

  async clickLinkSeeAllFaqs() {
    return super.clickLocatorToOpenNewPage(this.locatorLinkSeeAllFaqs);
  }

  async clickLinkDataPrivacyPolicy() {
    return super.clickLocatorToOpenNewPage(this.locatorLinkDataPrivacyPolicy);
  }

  async clickLinkComplaint() {
    return super.clickLocatorToOpenNewPage(this.locatorLinkComplaint);
  }

  async clickLinkConflictsOfInterests() {
    return super.clickLocatorToOpenNewPage(this.locatorLinkConflictsOfInterests);
  }

  async clickLinkInsuranceProductInformationDocument() {
    return super.clickLocatorToGetDownloadReference(this.locatorLinkInsuranceProductInformationDocument);
  }

  async clickLinkDataGeneralTermsAndConditions() {
    return super.clickLocatorToGetDownloadReference(this.locatorLinkDataGeneralTermsAndConditions);
  }
}