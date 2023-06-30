export interface QuestionTemplate {
  status: string;
  subject: string;
  name: string;
  description: string;
  csec_section: string;
  objectives: string;
  format: string;
  text: string;
  type: string;
  difficulty: string;
  image: File | null;
  options: string[];
  formula: string;
  hint: string;
  video: string;
  written_solution: string;
  developerNote: string;

  [key: string]: any; // This is the index signature
}
