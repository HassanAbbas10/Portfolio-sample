import { Typography } from "@material-ui/core";
import Gen from "../../assets/Images/OK.jpg";
import React from "react";
import "./Profile.css";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../Timeline/Timeline.jsx";
import resumeData from "../../../Utillization/resumeData.jsx";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TimelineItem from "@mui/lab/TimelineItem/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent/TimelineContent";
import GetAppIcon from "@mui/icons-material/GetApp";
import CustomButton from "../Button/Button.jsx";
const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeperator />
      <TimelineContent className="timeLine_content">
        {link ? (
          <Typography className="timeLine_text">
            <span>{title}:</span>
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timeLineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={Gen} alt="img" />
      </figure>
      <div className="profile_info">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          {Object.keys(resumeData.socials).map((keys) => (
            <CustomTimelineItem
              title={keys}
              text={resumeData.socials[keys].text}
              link={resumeData.socials[keys].link}
            />
          ))}
        </CustomTimeline>

        <div className="button_container">
          <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div> 
  );
};

export default Profile;
