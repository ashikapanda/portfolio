import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import BackgroundAnimation from "../BackgrooundAnimation/BackgroundAnimation";

const Hero = (props) => {
  const onButtonClick = () => {
    const pdfUrl = "Ashika_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Ashika Panda
        </SectionTitle>
        <SectionText>
          A Passionate Front-end React Developer based in India 📍 <br />{" "}
          Proficient in frontend technologies like React.js, JavaScript, HTML,
          CSS, Next.js.
        </SectionText>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "0 0 80px",
          }}
        >
          <Button alt="resume" onClick={onButtonClick}>
            Resume
          </Button>
          {/* <Button alt="resume">
            <a
              className="button"
              href="./Ashika_resume.pdf"
              download="ResumeOfficial.pdf"
            >
              Resume
            </a>
          </Button> */}
        </div>
      </LeftSection>
    </Section>
  );
};

export default Hero;
