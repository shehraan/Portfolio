import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/UpdatedProfilePic.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>QUICK INTRO</h1>
            <p className="home-about-body">I’ve previously worked at Social Ventures Zone and CareCycle (YC W25), where I focused on building and deploying real-world AI systems.

              <br />
              <br />
              My recent work spans real-time AI, embedded systems, and hardware-software interaction, including a DIY VR headset/controller and AI communication tools built around voice agents and workflow automation.

              <br />
              <br />
              I build quickly, end-to-end, and use projects to understand how systems behave under real constraints.
              <br />
              <br />
              Check out my latest project, a slackbot that lets you generate AI videos via slash commands, on the{" "}
              <a href="https://shehraan.com/project">projects page</a>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid profile-image-solid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shehraan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/ShehraanH"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shehraan-hafiz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shehraan_ah/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
