import { Component } from '@angular/core';
import { QuestionTemplateService } from '../question-template.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionTemplate } from 'src/types';
import { of } from 'rxjs';

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
    image: null,
    formula: '',
    video: '',
    hint: '',
    written_solution: '',
    developerNote: '',
  };

  onImageSelected(event: Event) {
    // @ts-ignore
    this.questionFormValue.image = <File>event.target.files[0];
  }

  onWrittenSolutionSelected(event: Event) {
    // @ts-ignore
    this.questionFormValue.written_solution = <File>event.target.files[0];
  }

  constructor(private questionTemplateService: QuestionTemplateService) {}

  submitForm() {
    const fd = new FormData();

    for (const key in this.questionFormValue) {
      fd.append(key, this.questionFormValue[key]);
    }

    this.questionTemplateService
      //@ts-ignore
      .submitFormData(fd)
      .subscribe();

    this.questionFormValue = {
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
      image: null,
      formula: '',
      video: '',
      hint: '',
      written_solution: '',
      developerNote: '',
    };

    alert('question added');
  }
}
