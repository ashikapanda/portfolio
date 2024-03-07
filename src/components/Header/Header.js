import { Link } from "react-router-dom";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import { FacebookUrl, GithubUrl, LinkedInUrl } from "../../constants/constants";

const Header = () => (
  <Container>
    <Div1>
      <Link to="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" />{" "}
          <span>
            <i>Ashika Panda</i>
          </span>
        </a>
      </Link>
    </Div1>
    {/* <Div2>
      <li>
        <Link to="/projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link to="/tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2> */}
    <Div3>
      <SocialIcons href={GithubUrl} target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={LinkedInUrl} target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href={FacebookUrl} target="_blank">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <div style={{ marginLeft: "20px" }}>
        <p>+917978646832</p>
        <p>ashikapanda995@gmail.com</p>
      </div>
    </Div3>
  </Container>
);

export default Header;
