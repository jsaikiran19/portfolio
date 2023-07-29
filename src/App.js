import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadIcon from "@mui/icons-material/Download";
import { Backdrop, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "./App.scss";
import resume from "./assets/Sai_Kiran_Jella_Resume.pdf";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [progress, setProgress] = React.useState(1);
  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 200);

    setTimeout(() => {
      clearInterval(timer);
      setProgress(100);
    }, 1100);
  }, []);
  function preventNavigation(e) {
    const el = e.target.hash || e.target.attributes.getNamedItem('href').nodeValue;
    e.preventDefault();
    document.getElementById(el.slice(1)).scrollIntoView();
    setOpen(false);
    // console.log(el);

    // e.stopPropagation();
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };
  return (
    <div className="App">
      {progress < 100 ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgressWithLabel value={progress} />
        </Backdrop>
      ) : (
        <React.Fragment>
          <header className="app-header">
            <div className="left-pane"></div>
            <div className="right-pane">
              { isMobile ? <><IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu open={open} onClose={() => setOpen(false)} anchorEl={anchorEl}>
                <MenuItem href="#projects" onClick={preventNavigation}>
                  Projects
                </MenuItem>
                <MenuItem href="#experience" onClick={preventNavigation}>
                  Experience
                </MenuItem>
                <MenuItem href="#skills" onClick={preventNavigation}>
                  Skills
                </MenuItem>
                <MenuItem download href={resume} onClick={preventNavigation}>
                  Resume
                </MenuItem>
              </Menu></> : <nav>
                <a href="#projects" onClick={preventNavigation}>
                  Projects
                </a>
                <a href="#experience" onClick={preventNavigation}>
                  Experience
                </a>
                <a href="#skills" onClick={preventNavigation}>
                  Skills
                </a>
                {/* <a href="#contact" onClick={preventNavigation}>
                  Contact
                </a> */}
                <a download href={resume}>
                  Resume
                </a>
              </nav>}
              
            </div>
          </header>
          <div className="welcome-page">
            <div className="greeting">Hi, This is Sai Kiran Jella</div>
            <div className="description">
              A passionate Full Stack Developer with three years of experience
              and a Masters in CS from Indiana University Bloomington.
            </div>
            <div className="socials">
              <a
                href="https://github.com/jsaikiran19"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#333" size={"2x"} icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/saikiranjella"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  size={"2x"}
                  color="#0e76a8"
                  icon={faLinkedin}
                />
              </a>
              <a
                href="mailto:jsaikiran19@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  color="#ea4335"
                  size={"2x"}
                  icon={faEnvelope}
                ></FontAwesomeIcon>
              </a>
            </div>
            <div className="resume">
              <a download href={resume} style={{ textDecoration: "none" }}>
                <DownloadIcon />
                Get My Resume
              </a>
            </div>
            {/* <a className="scroll-down" href="#projects">
            <KeyboardArrowDownIcon fontSize="large"/>
            </a> */}
          </div>
          <section className="projects" id="projects">
            <div className="section-title">Projects</div>
            <Projects />
          </section>
          <section className="experience" id="experience">
            <div className="section-title">Experience</div>
            <Experience />
          </section>
          <section className="skills" id="skills">
            <div className="section-title">Skills</div>
            <Skills />
          </section>
          {/* <section className="contact" id="contact">
            <div className="section-title">Contact</div>

          </section> */}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
