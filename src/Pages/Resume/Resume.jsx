import React from "react";
import "./Resume.css";
import { Icon, Grid, Typography, Paper, TextField } from "@material-ui/core";
import resumeData from "../../../Utillization/resumeData";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import SchoolIcon from "@mui/icons-material/School";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../../Components/Timeline/Timeline";
import { TimelineContent, TimelineDot, TimelineItem } from "@mui/lab";
import CustomButton from "../../Components/Button/Button";

const Resume = () => {
  return (
    <>
      {/*About me */}
      <Grid container className="section pb_45  pt_45">
        <Grid item className="section_title mb_30 ">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/*Education and Experiences*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30 ">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resumeTimeline">
            <Grid item sm={12} md={6}>
              <CustomTimeline
                title="Work Experience"
                icon={<WorkTwoToneIcon />}
              >
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="resume_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="resume_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*Services*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30 ">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/*Skills*/}
      <Grid container className="section graybg pb_45 p_50">
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/*Contact*/}
      <Grid container spacing={5} className="section pt_45 pb_45">
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30 ">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12} >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name"  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    minRows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30 ">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container >
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address:</span> {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Phone:</span> {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Email:</span> {resumeData.email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Job:</span> {resumeData.title}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container className="contactInfo_socialsContainer">
              {Object.keys(resumeData.socials).map((key) => (
                <Grid item className="contactInfo_social">
                  <a href={resumeData.socials[key].link}>
                    {resumeData.socials[key].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
