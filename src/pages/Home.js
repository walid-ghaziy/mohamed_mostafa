import "./pages.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import profile from "./image/photo_2026-06-03_15-15-07.jpg"
function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <img
          src={profile}
          alt="Profile"
          className="profile-image"
        />

        <div className="hero-content">
          <h1>Hi, I'm Your Name</h1>

          <h3>Chemistry & Pharmacy Student</h3>

          <p>
            Passionate about Chemistry, Pharmacy, Medical Sciences,
            Research, and Education. I enjoy learning new technologies,
            scientific concepts, and sharing knowledge with others.
          </p>

          <div className="socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="section">
        <h2>About Me</h2>

        <p>
          I am a dedicated student interested in pharmaceutical sciences,
          chemistry, healthcare, and technology. My goal is to develop
          strong scientific knowledge while contributing to education
          and healthcare innovation.
        </p>
      </section>

      {/* Summary */}
      <section className="section">
        <h2>Professional Summary</h2>

        <div className="summary-card">
          <p>
            Motivated and detail-oriented student with a strong
            foundation in chemistry and pharmacy. Skilled in scientific
            research, laboratory practices, communication, teamwork,
            and problem solving.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2>Education</h2>

        <div className="card">
          <h3>Bachelor Degree in Pharmacy</h3>

          <p>University Name</p>

          <p>2022 - Present</p>

          <p>
            Specialized in Pharmacology, Pharmaceutical Chemistry,
            Clinical Pharmacy, and Drug Development.
          </p>
        </div>
      </section>



<Link to={'Chemistry'}>
    <section id="founderProfileWrapper" >
      <div className="founderBannerArea">
        <img
          src="https://durhamcollege.ca/wp-content/uploads/Chemical-Laboratory-Technician.jpg"
          alt="Founder"
          className="founderBannerImage"
        />
      </div>

      <div className="founderInfoSection">
        <h1 className="founderMainTitle">Chemistry</h1>
        <p className="founderDesignation">
          President,Mohamad mostafa
        </p>
      </div>

      <div className="founderAchievementRow">
        <div className="achievementCard">
          <span className="achievementIcon">👤</span>
          <span className="achievementText">120 Learners</span>
        </div>

        <div className="achievementCard">
          <span className="achievementIcon">🎓</span>
          <span className="achievementText">24+ Lectures</span>
        </div>

        <div className="achievementCard">
          <span className="achievementIcon">▶</span>
          <span className="achievementText">Free</span>
        </div>
      </div>
    </section>
</Link>



<Link to={'Pharmacy'}>
    <section id="founderProfileWrapper">
      <div className="founderBannerArea">
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2272636195/display_1500/stock-photo-man-pharmacist-and-medication-consulting-customer-at-counter-for-prescription-drugs-or-medicine-at-2272636195.jpg"
          alt="Founder"
          className="founderBannerImage"
        />
      </div>

      <div className="founderInfoSection">
        <h1 className="founderMainTitle">pharmacist</h1>
        <p className="founderDesignation">
          President,Mohamad mostafa
        </p>
      </div>

      <div className="founderAchievementRow">
        <div className="achievementCard">
          <span className="achievementIcon">👤</span>
          <span className="achievementText">50 Learners</span>
        </div>

        <div className="achievementCard">
          <span className="achievementIcon">🎓</span>
          <span className="achievementText">10+ Lectures</span>
        </div>

        <div className="achievementCard">
          <span className="achievementIcon">▶</span>
          <span className="achievementText">Free</span>
        </div>
      </div>
    </section>
</Link>


    <section id="founderProfileWrapper">
      <div className="founderBannerArea">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.DCCmXrTEwmOuxSVv0Js3iwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Founder"
          className="founderBannerImage"
        />
      </div>

      <div className="founderInfoSection">
        <h1 className="founderMainTitle">پسیارین ویزاری</h1>
        <p className="founderDesignation">
          President,Mohamad mostafa
        </p>
      </div>

      <div className="founderAchievementRow">
        <div className="achievementCard">
          <span className="achievementIcon">👤</span>
          <span className="achievementText">23 pirsonal</span>
        </div>

        <div className="achievementCard">
          <span className="achievementIcon">🎓</span>
          <span className="achievementText">24+ qusten</span>
        </div>

        <div className="achievementCard">
          <span className="achievementIcon">▶</span>
          <span className="achievementText">Free</span>
        </div>
      </div>
    </section>










      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>

        <div className="skills">
          <span>Chemistry</span>
          <span>Pharmacology</span>
          <span>Laboratory Skills</span>
          <span>Research</span>
          <span>Microsoft Office</span>
          <span>Communication</span>
          <span>Teamwork</span>
          <span>Problem Solving</span>
          <span>React JS</span>
          <span>HTML & CSS</span>
        </div>
      </section>

      {/* Quick Information */}
      <section className="section">
        <h2>Personal Information</h2>

        <div className="info-grid">
          <div className="info-card">
            <FaEnvelope />
            <p>yourmail@gmail.com</p>
          </div>

          <div className="info-card">
            <FaPhone />
            <p>+964 XXX XXX XXXX</p>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <p>Iraq</p>
          </div>
        </div>
      </section>

      {/* Questions About Me */}
      <section className="section">
        <h2>Quick Questions About Me</h2>

        <div className="qa">
          <div className="qa-item">
            <h4>Who am I?</h4>
            <p>
              A pharmacy student passionate about science and education.
            </p>
          </div>

          <div className="qa-item">
            <h4>What are my interests?</h4>
            <p>
              Chemistry, Pharmacy, Research, Medical Education,
              Technology, and Web Development.
            </p>
          </div>

          <div className="qa-item">
            <h4>My Goal?</h4>
            <p>
              To become a successful healthcare professional and
              scientific educator.
            </p>
          </div>

          <div className="qa-item">
            <h4>What can I offer?</h4>
            <p>
              Dedication, continuous learning, teamwork, and
              scientific knowledge.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;