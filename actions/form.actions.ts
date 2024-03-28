"use server";

export async function submitForm(
  values: any,
  data: {
    recordName: string;
    leadType: string;
  }
) {
  const webHookUrl = process.env.WEB_HOOK_URL!;

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

    console.log("Form submitted successfully");

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
