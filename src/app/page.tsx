import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Work } from "../components/Work";
import { Education } from "../components/Education";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
