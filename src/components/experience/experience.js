import * as React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import iu from "../../assets/IU.jpeg";
import adp from "../../assets/adp.jpg";
import mgit from "../../assets/mgit.png";
import "./experience.scss";
import { useTheme } from "@mui/material";

const Icon = (props) => (
  <img src={props.path} style={{ borderRadius: 40 }} alt="" />
);
export default function Experience() {
  const experiences = [
    {
      date: "May 2022 - Present",
      position: "left",
      title: "Application Developer",
      description:
        "Designed web applications using Angular, Ngxs, Storybook, and Figma. Automated the deployment process using Github actions to deploy the application on Netlify under 5 minutes.",
      path: iu,
    },
    {
      date: "Aug 2021 - May 2023",
      position: "right",
      title: "Masters in Computer Science",
      description:
        "Graduated with a Masters in CS at Indiana University Bloomington.",
      path: iu,
    },
    {
      date: "Aug 2019 - Aug 2021",
      position: "left",
      title: "Full Stack Engineer",
      description:
        "Revamped a Jenkins pipeline and utilized Docker to reduce build times by 20 minutes. Slashed the initial load size of the application by 80% by migrating AngularJS to Angular 8 and implementing a lazy loading approach. Spearheaded an initiative to establish a unified user experience across multiple applications, ensuring a seamless and intuitive interaction for users",
      path: adp,
    },
    {
      date: "Aug 2015 - May 2019",
      position: "right",
      title: "Bachelor in Technology",
      description:
        "Pursued a bachelor in Computer Science at Mahatma Gandhi Institute of Technology",
      path: mgit,
    },
  ];
  const theme = useTheme().palette.mode;
  return (
    <VerticalTimeline>
      {experiences &&
        experiences.map((exp) => {
          return (
            <VerticalTimelineElement
              key={exp.title}
              date={exp.date}
              position={exp.position}
              icon={<Icon path={exp.path}></Icon>}
              contentArrowStyle={{ borderRight: "7px solid  lightblue" }}
              contentStyle={{
                background: theme==='light' ? "white": "#282c34",
                boxShadow: "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)",
              }}
              iconStyle={{
                height: "5rem",
                width: "5rem",
                boxShadow:
                  "0 0 0 4px grey, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              }}
            >
              <h3 className="exp-title">{exp.title}</h3>
              <div className="exp-desc">{exp.description}</div>
            </VerticalTimelineElement>
          );
        })}
    </VerticalTimeline>
  );
}
