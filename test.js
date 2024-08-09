async function submitCtaForm({ values, leadInfo }) {
  try {
    const url =
      "https://cloudprismsolutionpvtltd.my.salesforce-sites.com/services/apexrest/createLeadCP";

    const bodyData = {
      FirstName: values.firstName || "",
      LastName: values.lastName || "",
      Email: values.email || "",
      Phone: values.phone || "",
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
      const errorBody = await response.text(); // Fetching text instead of json in case it's not in JSON format
      throw new Error(`HTTP error ${response.status}: ${errorBody}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

const leadInfo = {
  leadType: "Subscribe",
  recordTypeName: "Cloudprism",
};

const values = {
  firstName: "",
  lastName: "doe",
  email: "mukeshkumar@cloudprism.in",
  // email: "uttam.kumar@cloudprism.in",
  phone: "",
};

const call = async () => {
  try {
    const res = await submitCtaForm({ values, leadInfo });
    if (res === null) {
      console.error("Failed to submit form due to an error.");
    } else {
      console.log("Form submitted successfully:", res);
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
};

call();


// test
