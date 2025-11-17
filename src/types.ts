export interface Assignment {
  subject: string;
  title: string;
  details: string;
  deadline: Date;
  link: string;
  status: 'not started' | 'pending' | 'completed';
  subjectID: number;
}