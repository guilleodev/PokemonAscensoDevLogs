import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import HomeHero from "../components/home/HomeHero.jsx";
import HomeDevlogsIntro from "../components/home/HomeDevlogsIntro.jsx";
import MediaGallery from "../components/home/MediaGallery.jsx";
import { homeSections, siteMeta } from "../data/site.js";
import { devlogs } from "../data/devlogs.js";

export default function Home() {
  const latest = devlogs[devlogs.length - 1];

  return (
    <div className="app-shell">
      <Header title={siteMeta.title} />
      <main className="page">
        <HomeHero meta={siteMeta} intro={homeSections.intro} />
        <HomeDevlogsIntro pitch={homeSections.devlogsPitch} latest={latest} />
        <MediaGallery />
      </main>
      <Footer />
    </div>
  );
}
