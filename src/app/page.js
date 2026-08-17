import HomePageContent from "./components/home/HomePageContent";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

export const metadata = {
  title: "Custom Software, Automation, and ERP Solutions | SchlaTech",
  description:
    "SchlaTech builds custom software, automation, integrations, and ERP solutions for businesses that need technology built around real workflows, operational needs, and process improvement.",
};

export default function Home() {
  return <HomePageContent />;
}
