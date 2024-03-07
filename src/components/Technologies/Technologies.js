import React, { Fragment } from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import { skillsSection } from "../../constants/constants";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world,
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with React.js
            <br />
            HTML5, CSS3, JavaScript, Redux, ES6, SCSS, Next.js, Bootstrap,
            <br />
            MaterialUI, Angular , HTML5 & CSS3 <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Node.js
            <br />
            Express.js, TypeScript,
            <br />
            MongoDB & OracleDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            React testing library & JEST
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider divider />
  </Section>
);

export default Technologies;
