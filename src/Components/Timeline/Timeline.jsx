import React, { Children } from "react";
import "./Timeline.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

const CustomTimeline = ({ title,icon,children }) => {
  return (
    <Timeline className={"TimeLine"}>
      {/*Remainning Header*/}
      <TimelineItem className={"TimeLine_firstitem"}>
        <TimelineSeparator>
          <TimelineDot className={"TimeLine_dot_header"}> {icon} </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"TimeLine_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
    </Timeline>
  );
};

export const CustomTimelineSeperator = () =>
  (<TimelineSeparator className={'Seperator_padding'}>
  <TimelineDot variant={'outlined'} className={"TimeLine_dot"} />
  <TimelineConnector />
</TimelineSeparator> );



export default CustomTimeline;
