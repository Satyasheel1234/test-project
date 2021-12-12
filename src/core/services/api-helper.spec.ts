import {
  getMustacheReplaceString,
  addLeadsApiPath,
  updateLeadsApiPath,
  getLeadsByRmidPath,
  getLeadByIdPath,
  getFinanceStatusByCifPath,
  addNotePath,
  updateNotePath,
  getNotesByIdPath,
  getLatestNoteByIdPath,
  deleteNotePath,
  loginPath,
  logoutPath,
  updatedTokenPath,
  userManagementPath,
  updateUserPath,
  addFeedbackPath,
  listFeedbackPath,
  requestCtosLitePath,
  requestGuarantorForLeadPath,
  requestCtosFullForApplicantPath,
  requestCtosFullForGuarantorPath,
  downloadPdfPath,
  applicantCreditCheckConsentPath,
  addGuarantorPath,
  updateConsentStatusForGuarantorPath,
  updateGuarantorStatusForGuarantorPath,
  deleteGuarantorPath,
  getApplicationsForRm,
  getLoanApplicationPath,
  saveLoanApplicationPath,
  sendFinancialCalculationPath,
  getSitevisitReportPath,
  saveSiteVisitPath,
  getKycDetails,
  saveKycDetails,
  getUploadedFilesPath,
  deleteFilePath,
  uploadFilePath,
  updateChecklistPath,
  analyseBankStatementsPath,
  rpaEligibilityCheckPath,
  submitRpaPath,
  uploadPhotoPath,
  deletePhotoPath,
  updateOverdraftInfoPath,
  downloadItamReportPath,
  downloadInterimReportPath,
  submitReviewPath,
  uploadBankStatement,
  uploadFinanceStatement,
  configOfUserAccessMatrix,
  getProductCollectionList,
  getProductMaintenanceList,
  getBNMFundtypeList,
  getShariahFinancingList,
  getShariahFinancingGroupingList,
  getBNMPurposeCodeGroupList,
  getBNMPurposeCodeList,
  getShariahListMapping,
  getBNMPurposeCodeMappingList
} from "./api-helper";

describe("Test ApiHelper to make sure helper functions work correctly", () => {
  it("Should return empty params if there are no inputs at getMustacheReplaceString", () => {
    expect(getMustacheReplaceString("someURL/{{params}}", { params: "" })).toEqual("someURL/");
  });
  it("Should return the params if there are inputs at getMustacheReplaceString", () => {
    expect(getMustacheReplaceString("someURL/{{params}}", { params: "hello&goodbye" })).toEqual("someURL/hello&goodbye");
  });
});

describe("Test ApiHelper to make sure all url's are correct", () => {
  const notePath = "lead/testParams/note";
  it("Should return the ApiPathReturn object for addLeadsApiPath", () => {
    expect(addLeadsApiPath({ params: "testParams" }).path).toEqual("lead");
  });

  it("Should return the ApiPathReturn object for addLeadsApiPath", () => {
    expect(addLeadsApiPath({ params: "testParams" }).path).toEqual("lead");
  });

  it("Should return the ApiPathReturn object for updateLeadsApiPath", () => {
    expect(updateLeadsApiPath({ params: "testParams" }).path).toEqual("lead/{{lead_id}}");
  });

  it("Should return the ApiPathReturn object for getLeadsByRmidPath", () => {
    expect(getLeadsByRmidPath.path).toEqual("lead/list");
  });

  it("Should return the ApiPathReturn object for getLeadByIdPath", () => {
    expect(getLeadByIdPath({ params: "testParams" }).path).toEqual("lead/{{lead_id}}");
  });

  it("Should return the ApiPathReturn object for getFinanceStatusByCifPath", () => {
    expect(getFinanceStatusByCifPath({ params: "testParams" }).path).toEqual("lead/finance/status?cifs={{cifs}}");
  });

  it("Should return the ApiPathReturn object for addNotePath", () => {
    expect(addNotePath({ params: "testParams" }).path).toEqual("lead/{{lead_id}}/note");
  });

  it("Should return the ApiPathReturn object for updateNotePath", () => {
    // since the params are part of api contract, we cannot change this
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(updateNotePath({ lead_id: "testParams" }).path).toEqual(notePath);
  });

  it("Should return the ApiPathReturn object for getNotesByIdPath", () => {
    // since the params are part of api contract, we cannot change this
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(getNotesByIdPath({ lead_id: "testParams" }).path).toEqual("lead/testParams/notes");
  });

  it("Should return the ApiPathReturn object for getLatestNoteByIdPath", () => {
    // since the params are part of api contract, we cannot change this
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(getLatestNoteByIdPath({ lead_id: "testParams" }).path).toEqual(notePath);
  });

  it("Should return the ApiPathReturn object for deleteNotePath", () => {
    expect(deleteNotePath({ params: "testParams" }).path).toEqual("lead/{{lead_id}}/note/{{note_id}}");
  });

  it("Should return the ApiPathReturn object for loginPath", () => {
    expect(loginPath("xxx", "yyy").path).toEqual("token/login");
  });

  it("Should return the ApiPathReturn object for logoutPath", () => {
    expect(logoutPath("sss").path).toEqual("token/logout");
  });

  it("Should return the ApiPathReturn object for updatedTokenPath", () => {
    expect(updatedTokenPath("ttt").path).toEqual("token/login");
  });

  it("Should return the ApiPathReturn object for userManagementPath", () => {
    expect(userManagementPath.path).toEqual("admin/users");
  });

  it("Should return the ApiPathReturn object for updateUserPath", () => {
    expect(updateUserPath({ params: "testParams" }).path).toEqual("admin/users/{{username}}/status");
  });

  it("Should return the ApiPathReturn object for addFeedbackPath", () => {
    expect(addFeedbackPath("aaa", "bbb", "ccc").path).toEqual("feedback");
  });

  it("Should return the ApiPathReturn object for listFeedbackPath", () => {
    expect(listFeedbackPath().path).toEqual("feedback");
  });

  it("Should return the ApiPathReturn object for requestCtosLitePath", () => {
    expect(requestCtosLitePath({ params: "testParams" }).path).toEqual("{{lead_id}}/ctoslite");
  });

  it("Should return the ApiPathReturn object for requestGuarantorForLeadPath", () => {
    expect(requestGuarantorForLeadPath({ params: "testParams" }).path).toEqual("{{lead_id}}/ctos/guarantors");
  });

  it("Should return the ApiPathReturn object for requestCtosFullForApplicantPath", () => {
    expect(requestCtosFullForApplicantPath({ params: "testParams" }).path).toEqual("{{lead_id}}/ctos");
  });

  it("Should return the ApiPathReturn object for requestCtosFullForGuarantorPath", () => {
    expect(requestCtosFullForGuarantorPath({ params: "testParams" }).path).toEqual("{{lead_id}}/guarantor/{{id_no}}/ctos");
  });

  it("Should return the ApiPathReturn object for downloadPdfPath", () => {
    expect(downloadPdfPath("someUrl").path).toEqual("someUrl");
  });

  it("Should return the ApiPathReturn object for applicantCreditCheckConsentPath", () => {
    // since the params are part of api contract, we cannot change this
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(applicantCreditCheckConsentPath({ lead_id: "testParams" }).path).toEqual("credit-checks/testParams/consent");
  });

  it("Should return the ApiPathReturn object for addGuarantorPath", () => {
    expect(addGuarantorPath({ params: "testParams" }).path).toEqual("lead/{{lead_id}}/guarantor");
  });

  it("Should return the ApiPathReturn object for updateConsentStatusForGuarantorPath", () => {
    expect(updateConsentStatusForGuarantorPath({ params: "testParams" }).path).toEqual(
      "lead/{{lead_id}}/guarantor/{{customer_id}}/consent"
    );
  });

  it("Should return the ApiPathReturn object for updateGuarantorStatusForGuarantorPath", () => {
    expect(updateGuarantorStatusForGuarantorPath({ params: "testParams" }).path).toEqual("lead/{{lead_id}}/guarantor/{{customer_id}}");
  });

  it("Should return the ApiPathReturn object for deleteGuarantorPath", () => {
    expect(deleteGuarantorPath({ params: "testParams" }).path).toEqual("lead/{{lead_id}}/guarantor/{{customer_id}}");
  });

  it("Should return the ApiPathReturn object for getApplicationsForRm", () => {
    expect(getApplicationsForRm.path).toEqual("applications/list");
  });

  it("Should return the ApiPathReturn object for getLoanApplicationPath", () => {
    expect(getLoanApplicationPath({ params: "testParams" }).path).toEqual("applications/{{lead_id}}");
  });

  it("Should return the ApiPathReturn object for saveLoanApplicationPath", () => {
    expect(saveLoanApplicationPath().path).toEqual("application");
  });

  it("Should return the ApiPathReturn object for sendFinancialCalculationPath", () => {
    expect(sendFinancialCalculationPath({ params: "testParams" }).path).toEqual(
      "calculate?interestRate={{interestRate}}&amount={{amount}}&tenure={{tenure}}"
    );
  });

  it("Should return the ApiPathReturn object for getSitevisitReportPath", () => {
    // since the params are part of api contract, we cannot change this
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(getSitevisitReportPath({ lead_id: "testParams" }).path).toEqual("sitevisitreport/testParams");
  });

  it("Should return the ApiPathReturn object for saveSiteVisitPath", () => {
    // since the params are part of api contract, we cannot change this
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(saveSiteVisitPath({ lead_id: "testParams" }).path).toEqual("sitevisitreport/testParams");
  });

  it("Should return the ApiPathReturn object for getKycDetails", () => {
    // since the params are part of api contract, we cannot change this
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(getKycDetails({ lead_id: "testParams" }).path).toEqual("kycdetails/testParams");
  });

  it("Should return the ApiPathReturn object for saveKycDetails", () => {
    // since the params are part of api contract, we cannot change this
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(saveKycDetails({ lead_id: "testParams" }).path).toEqual("kycdetails/testParams");
  });

  it("Should return the ApiPathReturn object for getUploadedFilesPath", () => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(getUploadedFilesPath({ lead_id: "someId" }).path).toEqual("someId/files");
  });

  it("Should return the ApiPathReturn object for deleteFilePath", () => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(deleteFilePath({ lead_id: "someString", file_id: "someString" }).path).toEqual("someString/file/someString");
  });

  it("Should return the ApiPathReturn object for uploadFilePath", () => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(uploadFilePath({ lead_id: "someString", document_type: "someString" }).path).toEqual("someString/file/someString");
  });

  it("Should return the ApiPathReturn object for updateChecklistPath", () => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(updateChecklistPath({ lead_id: "someId" }).path).toEqual("someId/file/checklist");
  });

  it("Should return the ApiPathReturn object for analyseBankStatementsPath", () => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(analyseBankStatementsPath({ lead_id: "someId" }).path).toEqual("someId/bankstatement/bsa/analyse");
  });

  it("Should return the ApiPathReturn object for rpaEligibilityCheckPath", () => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(rpaEligibilityCheckPath({ lead_id: "someId" }).path).toEqual("someId/bankstatement/rpa-eligibility");
  });

  it("Should return the ApiPathReturn object for submitRpaPath", () => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    expect(submitRpaPath({ lead_id: "someId" }).path).toEqual("someId/bankstatement/rpa-submit");
  });

  it("Should return the ApiPathReturn object for uploadPhotoPath", () => {
    expect(uploadPhotoPath({ params: "testParams" }).path).toEqual("{{guarantorId}}/sitevisitfile/{{section}}/{{role}}");
  });

  it("Should return the ApiPathReturn object for deletePhotoPath", () => {
    expect(deletePhotoPath({ params: "testParams" }).path).toEqual("sitevisitfile/{{file_id}}");
  });

  it("Should return the ApiPathReturn object for updateOverdraftInfoPath", () => {
    expect(updateOverdraftInfoPath({ params: "testParams" }).path).toEqual("{{lead_id}}/bankstatement/od-limit");
  });

  it("Should return the ApiPathReturn object for downloadItamReportPath", () => {
    expect(downloadItamReportPath.path).toEqual("admin/reports/itam");
  });

  it("Should return the ApiPathReturn object for downloadInterimReportPath", () => {
    expect(downloadInterimReportPath.path).toEqual("interim-report");
  });

  it("Should return the ApiPathReturn object for submitReviewPath", () => {
    expect(submitReviewPath({ params: "testParams" }).path).toEqual("submit-application/{{lead_id}}/{{application_no}}");
  });

  it("Should return the ApiPathReturn object for configOfUserAccessMatrix", () => {
    expect(configOfUserAccessMatrix().path).toEqual("admin/users/access-matrix");
  });

  it("Should return the ApiPathReturn object for uploadBankStatement", () => {
    expect(uploadBankStatement({ leadId: "1234", documentType: "abc" }).path).toEqual("1234/bankstatement/file/abc");
  });

  it("Should return the ApiPathReturn object for uploadFinanceStatement", () => {
    expect(uploadFinanceStatement({ leadId: "1234", documentType: "abc" }).path).toEqual("1234/financialstatement/file/abc");
  });

  it("Should return the ApiPathReturn object for getProductCollectionList", () => {
    expect(getProductCollectionList.path).toEqual("admin/productcollection");
  });

  it("Should return the ApiPathReturn object for getProductMaintenanceList", () => {
    expect(getProductMaintenanceList.path).toEqual("admin/productcollection/product");
  });

  it("Should return the ApiPathReturn object for getBNMFundtypeList", () => {
    expect(getBNMFundtypeList.path).toEqual("admin/bnmfundtype");
  });

  it("Should return the ApiPathReturn object for getBNMPurposeCodeGroupList", () => {
    expect(getBNMPurposeCodeGroupList.path).toEqual("admin/bnmpurposecode/collection");
  });

  it("Should return the ApiPathReturn object for getBNMPurposeCodeMappingList", () => {
    expect(getBNMPurposeCodeMappingList.path).toEqual("admin/bnmpurposecode/mapping");
  });

  it("Should return the ApiPathReturn object for getBNMPurposeCodeList", () => {
    expect(getBNMPurposeCodeList.path).toEqual("admin/bnmpurposecode");
  });

  it("Should return the ApiPathReturn object for getShariahConceptMaintenanceList", () => {
    expect(getShariahFinancingList.path).toEqual("admin/syariahconcept");
  });

  it("Should return the ApiPathReturn object for getShariahListMapping", () => {
    expect(getShariahListMapping.path).toEqual("admin/syariahconcept/mapping");
  });

  it("Should return the ApiPathReturn object for getShariahFinancingGroupListing", () => {
    expect(getShariahFinancingGroupingList.path).toEqual("admin/syariahconcept/collection");
  });
});
