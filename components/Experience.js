import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, j) => {
          return (
            <Badge pill className="" key={j}>
              {i === 1 ? "" : technology}
            </Badge>
          );
        });

        var tech = technologies.map((technology, j) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={j}>
              {i === 1 ? "" : technology}
            </Badge>
          );
        });

        // Ajout de la condition pour une deuxième classe
        const elementClassName =
          i === 1
            ? "vertical-timeline-element--work second-work-element"
            : "vertical-timeline-element--work";

        // Définir l'icône conditionnelle
        const icon = i === 1 
          ? <i className="fas fa-user-headset experience-icon"></i>
          : <i className="fab fa-dev experience-icon"></i>;

        return (
          <VerticalTimelineElement
            className={elementClassName}
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={icon}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;