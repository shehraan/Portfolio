import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import rearView from "../../Assets/Projects/rearView.jpg";
import msft from "../../Assets/Projects/image.png";
import dragon from "../../Assets/Projects/Dragon.jpg";
import health from "../../Assets/Projects/healthcare_800x600_newcolors.gif";
import Luminet from "../../Assets/Projects/laser.png";
import Interac from "../../Assets/Projects/SS.png";
import slackbot from "../../Assets/Projects/Slackbot.png";
import nanny from "../../Assets/Projects/Screenshot 2025-04-19 132754.png"
import vapi from "../../Assets/Projects/1722190046010-bd1a05f5a5309646.png"
import chat from "../../Assets/Projects/chaticonimages.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Selected projects in AI, XR, and hardware-software systems.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slackbot}
              isBlog={false}
              title="Bluma Slackbot"
              description="This is a Slack bot that generates viral video content using OpenAI's GPT-4 and Sora-2 models."
              githubLink="https://github.com/shehraan/Bluma-Slack-App"
              webLink="https://www.tella.tv/video/i-made-an-app-for-you-4x38"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rearView}
              isBlog={false}
              title="DIY VR Headset"
              description="VR Headset made for <$50 using a modified GearVR shell. The system handles head tracking through onboard sensor fusion and streams orientation data to a custom SteamVR driver for real-time rendering. It’s a low-cost, self-built XR platform focused on 3DoF tracking, latency, and hardware–software integration."
              githubLink="https://github.com/shehraan/DIY_VR_HEADSET"
              webLink="https://drive.google.com/file/d/19pGWAnTyWovqxkzj7VpuWR-0w2q3KPno/view?usp=sharing"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Vapi Interview Practice"
              description="This webapp allows users to generate mock interview questions based on job criteria and then practice answering those questions with a voice agent, receiving feedback afterward."
              websiteLink="https://vapi-interview-practice.vercel.app/"
              webLink="https://x.com/ShehraanH/status/1916909295892832410"
              githubLink="https://github.com/shehraan/Vapi-Interview-Practice"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vapi}
              isBlog={false}
              title="Vapi Discord Bot"
              description="This Discord Bot brings voice‑powered AI assistance right into your Discord server. With a simple slash‑command interface, you can start natural‑language calls to your Vapi AI assistant, monitor live call progress and retrieve call statuses, browse your recent conversations with adjustable history limits, terminate ongoing sessions on demand, and get help anytime with built‑in command guidance."
              webLink="https://drive.google.com/file/d/1roRtP3aeANeL9YAZuFCNjqsAz5cVMrF_/view?usp=sharingg"
              githubLink="https://github.com/shehraan/Vapi-based-Discord-Bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nanny}
              isBlog={false}
              title="AeyeR"
              description="Created a 'ChatGPT for Eyes' app, which allows you to speak with AI in Augmented Reality. The app can take an image of what you're looking at, and provide a response to your message, based upon the image. My Nanny used it to learn English."
              webLink="https://youtu.be/KbjbYzSsAtg"
              githubLink="https://github.com/shehraan/AR-Glasses-Assistant"
            />
            {/* Instructions: Triple‑tap to get audio with image, then single tap to end message. ONLY single‑tap to start/stop audio message without image */}
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Interac}
              isBlog={false}
              title="Parkinson's Disease Detector"
              description="A program that can detect Parkinson's Disease with over 95% accuracy just by using MRI scans. I collaborated with the University of Southern California to get access to private medical data. It is based on Ultralytics' Yolo V8, a highly-advanced computer vision model which I used for the object classification."
              demoLink="https://medium.com/insights-of-nature/mri-scans-and-ai-a-novel-approach-to-diagnose-parkinsons-disease-in-a-matter-of-seconds-2b04e414e834"
              webLink="https://youtu.be/odBd20KFAdE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dragon}
              isBlog={false}
              title="AR Dragon"
              description="My first time diving into the AR space. This app allows you to fly a dragon in AR on your phone. Built using Unity Engine and C#."
              webLink="https://youtube.com/shorts/aZA7hzXDWKg?si=IGjJWXSTNYj6fSsF"
              demoLink="https://medium.com/@shehraanhafiz/flying-a-dragon-in-ar-f0ea0b902dcf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Luminet}
              isBlog={false}
              title="Luminet"
              description="Discovered a solution to the issue of internet inacessibility through free-space optical communication (aka satellites with lasers). I created a demonstration for this concept using an Arduino, a laserbeam, a light sensor, and a little bit of C++ which enabled the song 'Never Gonna Give You Up' to be played based on the laserbeam's transmission."
              websiteLink="https://luminet.typedream.app/"
              webLink="https://youtu.be/KbjbYzSsAtg?si=FPKgI_i3yQV2Hzhu"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={msft}
              isBlog={false}
              title="Microsoft Consulting"
              description="Had the opportunity to pitch our energy efficiency solution to a partner at Microsoft. Using a technique called Voltage Underscaling, we hoped to reduce GPU chip + cooling energy consumption by ~20%. Our idea ended up being selected out of 800+ other participants, and we were chosen to have our ideas be presented to executives and potentially implemented."
              slideLink="https://drive.google.com/file/d/1FbwyXGqiU5Waj860xmDyftjKCUuEJH81/view?usp=sharing"
              webLink="https://youtu.be/UwmFg5E4orE"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="Medical chatbot"
              description="A chatbot webapp that allows you to talk with MedpaLM 2, Google's latest large language model oriented towards the medical domain."
              demoLink="https://medium.com/insights-of-nature/medpalm-the-doctor-of-tomorrow-8db91b9e26b0"
              webLink="https://youtu.be/4UiZsw3aTjk"     
              githubLink="https://github.com/shehraan/MedpaLM-based-chatbot"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
