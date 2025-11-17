// reusable assignment card component
import React from "react";
import type { Assignment } from "../types";
import "./AssignmentCard.css";
import "../App.css";

interface AssignmentCardProps {
  assignment: Assignment;
}
const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment }) => {
  return (
    <div className="assignment-card">
      <h2>
        {assignment.title} ({assignment.subject})
      </h2>
      <p>{assignment.details}</p>
      <p>Deadline: {assignment.deadline.toDateString()}</p>
      <p>Status: {assignment.status}</p>
      <a href={assignment.link} target="_blank" rel="noopener noreferrer">
        View Assignment
      </a>
    </div>
  );
};

export default AssignmentCard;
