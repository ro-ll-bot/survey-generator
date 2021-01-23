import React from "react";
import { Link } from "react-router-dom";
import { SurveyProps, SurveyStatus, SurveyTimelineCardData } from "./Survey";
import { SURVEY_BASE_URL } from "./utils/SurveyConstants";



export default function SurveyTimeline(props: SurveyProps) {
  return (
    <div className="survey-timeline">
      {props.surveyList.map((survey) => {
        return SurveyTimelineCard(survey);
      })}
    </div>
  )
}

function SurveyTimelineCard(survey: SurveyTimelineCardData) {

  // then create a const array to declare that kind of things
  // because it can grow in the future.
  const hrColorStatuses = ["green", "orange", "red"];
  
  let getToday = new Date().toDateString();
  const testUrl = "https://images.unsplash.com/photo-1580251645806-239f4df8ce13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"

  function SurveyStatusCheck(status: SurveyStatus) {
    return <hr color={hrColorStatuses[status]} />
  }

  return (
    <div className="survey-timeline-card">
      <div>
        <b> {getToday} <span className="survey-timeline-owner"> - {survey.owner}</span></b>
      </div>
      <b style={{ float: 'right' }}>&nbsp;&nbsp; {survey.statusDesc}</b>
      {SurveyStatusCheck(survey.statusId)}
      {survey.image !== undefined ?
        <img src={survey.image} alt={survey.title} width="250" height="150" /> : <img src={testUrl} alt={survey.title} width="250" height="150" />
      }
      <h3><Link to={`${SURVEY_BASE_URL}/${survey.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{survey.title}</Link></h3>
      <p>{survey.description.substring(0, 250)}...</p>
    </div>
  )
}