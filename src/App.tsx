import "./App.css";
import type { Assignment } from "./types";

function App() {
  const myAssignments: Assignment[] = [
    {
      subject: "Mathematics",
      title: "Algebra Homework",
      details: "Complete exercises 1-10 on page 42",
      deadline: new Date("2024-06-10T23:59:00"),
      link: "http://example.com/algebra-homework",
      status: "not started" as const,
    },
    {
      subject: "History",
      title: "World War II Essay",
      details: "Write a 2000-word essay on the causes of World War II",
      deadline: new Date("2024-06-15T23:59:00"),
      link: "http://example.com/ww2-essay",
      status: "pending" as const,
    },
    {
      subject: "Science",
      title: "Physics Lab Report",
      details: "Submit the lab report on Newton's Laws of Motion",
      deadline: new Date("2024-06-12T23:59:00"),
      link: "http://example.com/physics-lab-report",
      status: "completed" as const,
    },
  ];

  return (
    <div>
      <h1>My Assignment Dashboard</h1>
      <ul>
        {myAssignments.map((assignment, index) => (
          <li key={index}>
            <h2>
              {assignment.title} ({assignment.subject})
            </h2>
            <p>{assignment.details}</p>
            <p>Deadline: {assignment.deadline.toDateString()}</p>
            <p>Status: {assignment.status}</p>
            <a href={assignment.link} target="_blank" rel="noopener noreferrer">
              View Assignment
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
