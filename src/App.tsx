/**
 * App.tsx
 * Main application component for displaying assignments.
 */
import { useState } from "react";
import "./App.css";
import type { Assignment } from "./types";
import AssignmentCard from "./components/AssignmentCard";

// Sample assignments data
let ID = 0;
const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    subject: "Mathematics",
    title: "Algebra Homework",
    details: "Complete exercises 1-10 on page 42",
    deadline: new Date("2024-06-10T23:59:00"),
    link: "http://example.com/algebra-homework",
    status: "not started" as const,
    subjectID: ID++,
  },
  {
    subject: "History",
    title: "World War II Essay",
    details: "Write a 2000-word essay on the causes of World War II",
    deadline: new Date("2024-06-15T23:59:00"),
    link: "http://example.com/ww2-essay",
    status: "pending" as const,
    subjectID: ID++,
  },
  {
    subject: "Science",
    title: "Physics Lab Report",
    details: "Submit the lab report on Newton's Laws of Motion",
    deadline: new Date("2024-06-12T23:59:00"),
    link: "http://example.com/physics-lab-report",
    status: "completed" as const,
    subjectID: ID++,
  },
];

function App() {
  // use state hook
  const [myAssignments, setMyAssignments] = useState(INITIAL_ASSIGNMENTS);

  // this function will update the status of an assignment
  const handleUpdateStatus = (
    idToUpdate: number,
    newStatus: Assignment["status"]
  ) => {
    setMyAssignments((currentAssignments: Assignment[]) =>
      // find the assignment we want to update
      currentAssignments.map(
        (assignment) =>
          assignment.subjectID === idToUpdate
            ? { ...assignment, status: newStatus } // create a new object with updated status
            : assignment // otherwise return the assignment as is
      )
    );
  };

  return (
    // Render assignments
    <div>
      <h1>My Assignment Dashboard</h1>
      <ul>
        {myAssignments.map((assignment) => (
          <li key={assignment.subjectID}>
            <AssignmentCard assignment={assignment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
