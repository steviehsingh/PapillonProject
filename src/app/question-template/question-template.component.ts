import { Component } from '@angular/core';
import { QuestionTemplateService } from '../question-template.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionTemplate } from 'src/types';

@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.css'],
})
export class QuestionTemplateComponent {
  questionFormValue: QuestionTemplate = {
    status: '',
    subject: '',
    name: '',
    description: '',
    csec_section: '',
    objectives: '',
    format: '',
    text: '',
    type: '',
    difficulty: '',
    options: [],
    images: [],
    formula: '',
    video: '',
    hint: '',
    written_solution: '',
    developerNote: '',
  };

  constructor(private questionTemplateService: QuestionTemplateService) {}

  submitForm() {
    this.questionTemplateService
      .submitFormData(this.questionFormValue)
      .subscribe(
        (response) => {
          console.log('Success', response);
          // Handle success response
        },
        (error) => {
          console.error('Error', error);
          // Handle error response
        }
      );
  }
}
