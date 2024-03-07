import CustomButton from "@/components/shared/custom-button";

export default function Home() {
  return (
    <main className="background_primary">
      <div>
        {/* Main section  */}
        <div className="flex h-screen items-center justify-center">
          <div className="flex max-w-4xl flex-col items-center justify-center gap-6  text-white">
            <h1 className="text-center text-8xl font-bold">
              Create Value That Empowers
            </h1>
            <p className="text-center text-3xl text-[#C0C0C0]">
              with the Salesforce Consulting Partner and Salesforce
              Implementation.
            </p>
            <CustomButton text="Let's grow together" className="" href="" />
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <p className="max-w-6xl text-center text-3xl leading-9 text-white">
            Cloudprism a certified digital consulting partner specializing in
            Directing Business Progress via Salesforce implementation and
            consulting services. Promising 100+ Salesforce-certified developers
            and delivering over 120 projects in more than 20 countries. An AGILE
            methodology enables Cloudprism to provide tailored solutions, cost
            savings, and faster implementation and adoption. Empowering
            small-town talent, resource outsourcing, and prioritizing empathy
            for the end-user in their professional and technical services.
          </p>
        </div>
      </div>
    </main>
  );
}
