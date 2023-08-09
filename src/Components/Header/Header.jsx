import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { HomeRounded, Telegram } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import resumeData from "../../../Utillization/resumeData";
import "./Header.css";
import CustomButton from "../Button/Button";
import { Link } from "react-router-dom";

const Header = (props) => {

  
  const pathName = props?.location?.pathname;
  
  return (
    
    <Navbar sticky="top" expand="lg" className="header">
      <div className='header_navlink'>
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
     </div>

     
      <Navbar.Collapse>
        <Nav className="header_left">
          <Link
          
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume Page
          </Link>

          <Link
           
            to="/portfol"
            className={pathName == "/portfol" ? "header_link_active" : "header_link"}>
            Portfolio
          </Link>
        </Nav>

        <div className="header_right">{Object .keys(resumeData.socials).map(key => (

          <a href={resumeData.socials[key].link} target="_blank">{resumeData.socials[key].icon}</a>
        ))}
        <CustomButton text={'Hire me'} icon={<Telegram/>}/>
        
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header
