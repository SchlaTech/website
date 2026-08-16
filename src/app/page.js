import HomePageContent from "./components/home/HomePageContent";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

export const metadata = {
  title: "SchlaTech | Custom Software, Automation, and ERP Solutions",
  description:
    "SchlaTech builds custom software, automation, integrations, and business systems that solve real operational problems, with deep experience in manufacturing and ERP.",
};

export default function Home() {
  return <HomePageContent />;
}
