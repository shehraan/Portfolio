import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi, I am <span className="purple">Shehraan </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            <br /> */}
            <div className="about-content">
              <section className="about-section-block">
                <h3>My Focus</h3>
                <p>
                  I’ve been working across both software and hardware, with a focus on real-time systems that interact directly with the physical world. My recent projects include a DIY VR headset and controller, where I’ve explored low-latency tracking, sensor fusion, and full-stack interaction pipelines from embedded hardware to the application layer..
                </p>
              </section>

              <br />

              <section className="about-section-block">
                <h3>Why this work interests me</h3>
                <p>
                  In parallel to my VR projects, I’ve built AI-driven communication and workflow systems around voice agents and operational tooling. What connects these projects is a broader interest in interfaces that feel more natural and less rigid. I’m especially interested in systems that can operate directly within real-world contexts, whether through voice, XR, or other forms of low-friction interaction.
                </p>
              </section>

              <br />

              <section className="about-section-block">
                <h3>How I work</h3>
                <p>
                  I learn fastest by building end-to-end systems under real constraints. I
                  tend to move quickly, prototype early, and use projects to understand how
                  systems behave in practice, especially when timing, reliability, or
                  physical constraints matter.
                </p>
              </section>

              <br />

              <section className="about-section-block">
                <h3>What I’m looking for</h3>
                <p>
I’m looking for roles where I can work on products with strong technical teams and keep growing through hard, hands-on engineering work. I’m especially interested in applied AI, communication workflows, and embedded systems. I’m most motivated by environments where I can move quickly, build end-to-end, and contribute to systems that have real-world impact.
                </p>
              </section>
            </div>
          </p>
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
