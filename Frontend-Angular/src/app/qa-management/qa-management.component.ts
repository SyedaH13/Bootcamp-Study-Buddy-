import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-qa-management',
  imports: [CommonModule, FormsModule],
  templateUrl: './qa-management.component.html',
  styleUrl: './qa-management.component.css'
})
export class QAManagementComponent {
  question: string = '';
  answer: string = '';
  constructor(private apiService: ApiService) { }
  addQuestion(): void {
    const questionAnswer = { question: this.question, answer: this.answer };
    this.apiService.addQuestion(questionAnswer).subscribe(
      response => {
        console.log(questionAnswer)
        alert('question added')
      }
    );
  }
}
