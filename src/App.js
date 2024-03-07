import "./App.css";
import BackgroundAnimation from "./components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Timeline from "./components/TimeLine/TimeLine";
import { Layout } from "./layout/Layout";
import { Section } from "./styles/GlobalComponents";
import Theme from "./styles/theme";

function App() {
  return (
    <Theme>
      <Layout>
        <Section grid>
          <Hero />
          <BackgroundAnimation />
        </Section>
        <Timeline />
        <Technologies />
        <Projects />
      </Layout>
    </Theme>
  );
}

export default App;
