import { Box, Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import "./projects.scss";
function TabPanel(props) {
  const { children, value, index, height, width, ...other } = props;
  return (
    <div
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: width || "60rem" }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Projects() {
  const cards = [
    {
      name: "Wellness Tracking Application",
      tools: ["React", "ExpressJS", "MongoDB", "Firebase"],
      description:
        "Created a wellness application using React and ExpressJS which allows users to view content uploaded by fitness professionals. Built three distinct dashboards tailored for users, fitness professionals, and administrators. Devised a subscription-based model using Express and MongoDB, delivering personalized content to users based on their subscription preferences",
    },
    {
      name: "Parts of Speech Tagging",
      tools: ["Python"],
      description:
        "Built a Simple Hidden Markov Model in Python to classify parts of speech for words in sentences. Improved the accuracy of the algorithm by 10\% using the Viterbi Algorithm",
    },
    {
      name: "News Category Classification",
      tools: ["Python", "Tensorflow", "FastAPI", "Deep Learning"],
      description:
        "Built a bidirectional LSTM model that classifies a news sentence into four categories.",
    },
    {
      name: "File System in Xinu",
      tools: ["C Progamming Language"],
      description: "Designed a File System in the Xinu OS. Implemented operations for creation, opening, reading, and writing of files.",
    },
  ];
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="projects-container">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
      >
        {cards.map((card) => (
          <Tab key={card.name} label={card.name} />
        ))}
        ;
      </Tabs>
      {cards.map((card, i) => {
        const desc = card.description.split('.');
        return (
          <TabPanel key={i} value={value} index={i}>
            <Paper elevation={3} style={{ height: "16rem" }}>
              <div className="tab-container">
                <div>
                  <strong>Description: </strong>
                  <div>{card.description}</div>
                  {/* <ul >
                  {desc && desc.map(d=><li>{d}</li>)}
                  </ul> */}
                  
                </div>
                <div>
                  <strong>Tools: </strong>
                  <div>{card.tools.join(", ")}</div>
                </div>
              </div>
            </Paper>
          </TabPanel>
        );
      })}
    </div>
  );
}
