import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DarkMode, LightMode } from "@mui/icons-material";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Backdrop,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery
} from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import React, { createContext, useState } from "react";
import "./App.scss";
import resume from "./assets/Sai_Kiran_Jella_Resume.pdf";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

export const ThemeContext = createContext('light');
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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [progress, setProgress] = React.useState(1);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');
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
    const el =
      e.target.hash || e.target.attributes.getNamedItem("href").nodeValue;
    e.preventDefault();
    document.getElementById(el.slice(1)).scrollIntoView();
    setOpen(false);
    // console.log(el);

    // e.stopPropagation();
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main:'#fff'
      },
      background: '#282c34'
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode:'light',
      primary: {
        main: '#3f50b5',
        dark: '#002884',
      },
      background:'white'
    }
  });
  return (
    <ThemeProvider theme={theme==='light' ? lightTheme : darkTheme}>
    <div className="App">
      {progress < 100 ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgressWithLabel value={progress} />
        </Backdrop>
      ) : (
        <div className={theme}>
          <header className="app-header">
            <div className="left-pane"></div>
            <div className="right-pane">
              {isMobile ? (
                <>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    open={open}
                    onClose={() => setOpen(false)}
                    anchorEl={anchorEl}
                  >
                    <MenuItem href="#projects" onClick={preventNavigation}>
                      Projects
                    </MenuItem>
                    <MenuItem href="#experience" onClick={preventNavigation}>
                      Experience
                    </MenuItem>
                    <MenuItem href="#skills" onClick={preventNavigation}>
                      Skills
                    </MenuItem>
                    <MenuItem
                      download
                      href={resume}
                      onClick={preventNavigation}
                    >
                      Resume
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <nav>
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
                  <IconButton onClick={()=>setTheme(theme==='light' ? 'dark': 'light')}>{theme==='light' ? 
                  <LightMode sx={{background: '#3f50b5', color:'white', borderRadius:'2rem', padding:'0.3rem' }}/> :
                   <DarkMode sx={{color:'white', background:'black', borderRadius:'2rem', padding:'0.3rem'}}/>}</IconButton>
                </nav>
              )}
            </div>
          </header>
          <div className="welcome-page">
            <div className="greeting">Hi, This is Sai Kiran Jella</div>
            <div className="description">
              A passionate Full Stack Developer with a three-year background and
              a Master's degree in Computer Science from Indiana University
              Bloomington. My expertise involves building web applications
              utilizing Angular, React, Spring Boot, and ExpressJS.
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
        </div>
      )}
    </div>
    </ThemeProvider>
  );
}

export default App;
