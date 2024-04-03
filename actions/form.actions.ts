"use server";

export async function submitForm(
  values: any,
  data: {
    recordName: string;
    leadType: string;
  }
) {
  const webHookUrl =
    process.env.WEB_HOOK_URL! ||
    "https://cloudprismsolutionpvtltd.my.salesforce-sites.com/services/apexrest/createLeadCP";

  try {
    const response = await fetch(webHookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        Email: values.email,
        Phone: values.phone,
        Message__c: values.message,
        RecordTypeName: data?.recordName || "Cloudprism",
        city: "",
        State: "",
        Company: "Outsource",
        Designation__c: "",
        Lead_Type__c: data.leadType,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form to Salesforce");
    }

    return {
      message: "Submitted successfully",
    };
  } catch (error: any) {
    console.error("Error submitting form:", error);
    return {
      message: "Failed to submit form",
    };
  }
}

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
