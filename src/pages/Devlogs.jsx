import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import DevlogsHero from "../components/devlogs/DevlogsHero.jsx";
import DevlogsIntro from "../components/devlogs/DevlogsIntro.jsx";
import DevlogSummaryTable from "../components/devlogs/DevlogSummaryTable.jsx";
import DevlogArchive from "../components/devlogs/DevlogArchive.jsx";
import { siteMeta } from "../data/site.js";
import { devlogs } from "../data/devlogs.js";

export default function Devlogs() {
  return (
    <div className="app-shell">
      <Header title={siteMeta.title} compact />
      <main className="page">
        <DevlogsHero />
        <DevlogsIntro />
        <DevlogSummaryTable entries={devlogs} />
        <DevlogArchive entries={devlogs} />
      </main>
      <Footer />
    </div>
  );
}
