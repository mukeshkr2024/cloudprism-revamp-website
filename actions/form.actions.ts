"use server";

export async function submitCtaForm(
  values: any,
  leadInfo: {
    leadType: string;
    recordTypeName: string;
  }
) {
  try {
    const url =
      "https://cloudprismsolutionpvtltd.my.salesforce-sites.com/services/apexrest/createLeadCP";

    const bodyData = {
      FirstName: values.firstName,
      LastName: values.lastName,
      Email: values.email,
      Phone: values.phone,
      Message__c: values.message || "",
      city: "",
      State: "",
      Company: "Outsource",
      Designation__c: "",
      Lead_Type__c: leadInfo.leadType,
      RecordTypeName: leadInfo.recordTypeName || "Cloudprism",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    if (!response.ok) {
      throw new Error("Network response is not ok ");
    }
    console.log("Successfully created", response);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
