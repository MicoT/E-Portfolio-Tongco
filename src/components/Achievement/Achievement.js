import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCard";
import Particle from "../Particle";
import achievementImage1 from "../../Assets/Achievements/achievement1.png";
import achievementImage2 from "../../Assets/Achievements/achievement2.png";
import achievementImage3 from "../../Assets/Achievements/achievement3.png";
import achievementImage4 from "../../Assets/Achievements/achievement4.png";
import achievementImage5 from "../../Assets/Achievements/achievement5.png";
import achievementImage6 from "../../Assets/Achievements/achievement6.png";
import achievementImage7 from "../../Assets/Achievements/achievement7.png";
import achievementImage8 from "../../Assets/Achievements/achievement8.png";
import achievementImage9 from "../../Assets/Achievements/achievement9.jpeg";

function Achievements() {
  return (
    <Container fluid className="achievement-section">
      <Particle />
      <Container>
        <h1 className="achievement-heading">
          My <strong className="purple">Achievements</strong>
        </h1>
        <Row>
          <Col md={4} className="achievement-card">
            <AchievementCard
              imgPath={achievementImage1}
              title="Information Systems Auditing, Controls and
              Assurance"
              description=""
              cLink="https://coursera.org/verify/9NW8SJNKDVWQ"
              liLink=""
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
              imgPath={achievementImage2}
              title="Innovation Management"
              description=""
              cLink="https://coursera.org/verify/L2EK2CQTGAYF"
              liLink=""
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
              imgPath={achievementImage3}
              title="Intro to Analytic Thinking, Data Science, and Data
              Mining"
              description=""
              cLink="https://coursera.org/verify/JD7YPNE79SMV"
              liLink=""
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
              imgPath={achievementImage4}
              title="Project Management: Life cycle and project
              planning"
              description=""
              cLink="https://coursera.org/verify/SD5HK6HEZAQY"
              liLink=""
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
              imgPath={achievementImage5}
              title="Project Management: Beyond planning and control"
              description=""
              cLink="https://coursera.org/verify/N55GYA4KHQ96"
              liLink=""
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
              imgPath={achievementImage6}
              title="Introduction to Finance: The Basics"
              description=""
              cLink="https://coursera.org/verify/LZTND8K3HTGR"
              liLink=""
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
              imgPath={achievementImage7}
              title="Advanced Microsoft Power BI"
              description=""
              cLink=""
              liLink="https://www.linkedin.com/learning/certificates/a15f161cba3d09e173c083b84b6c3febb617a2f922eb7ab37b1a1b03e190dbcc?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BYewCtuppSU2W2hRHDKE9Xw%3D%3D&accountId=89213594&u=89213594&success=true&authUUID=mg2w%2FIHESuuR%2FchsQD4wkQ%3D%3D"
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
              imgPath={achievementImage8}
              title="Programming Foundations: Discrete Mathematics"
              description=""
              cLink=""
              liLink="https://www.linkedin.com/learning/certificates/c7e9d3eb5a7008ed1289ecc0adec3227533a9720e47e365a4bca5088fb836f72?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BYewCtuppSU2W2hRHDKE9Xw%3D%3D&accountId=89213594&u=89213594&success=true&authUUID=aq9%2FVUSKTpSqFincMN4RtQ%3D%3D"
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
              imgPath={achievementImage9}
              title="Programming for Everybody (Getting Started with
                Python)"
              description=""
              cLink="https://coursera.org/verify/P7HE5NEXWEMA"
              liLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
