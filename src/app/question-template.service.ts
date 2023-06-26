import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { QuestionTemplate } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class QuestionTemplateService {
  constructor(private http: HttpClient) {}

  submitFormData(data: QuestionTemplate): Observable<QuestionTemplate> {
    return this.http.post<QuestionTemplate>(
      'http://localhost:9000/add_question_template',
      data
    );
  }
}
