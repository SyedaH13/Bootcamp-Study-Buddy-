import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-qa-list',
  imports: [CommonModule],
  templateUrl: './qa-list.component.html',
  styleUrl: './qa-list.component.css'
})
export class QAListComponent implements OnInit {

  QAlist: any;
  currentQuestionIndex: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getQuestions().subscribe(
      data => {
        this.QAlist = data as any[];
      }
    );

  }
  showNextQuestion() {
    if (this.currentQuestionIndex < this.QAlist?.$values.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.currentQuestionIndex = 0; // Reset to the first question when reach the end
    }
  }
  addFavorites(questionId: number): void {
    this.apiService.addFavorites(questionId).subscribe(response => {
      console.log('Favorite added:', response);
      alert('Favorite Added!')
    });
  }
  removeQuestion(questionId: number): void {
    this.apiService.removeQuestion(questionId).subscribe(response => {
      alert("Question Removed!")
      console.log('question removed', response)
      if (this.QAlist.$values) {
        this.QAlist.$values = this.QAlist.$values.filter((q: { id: number }) => q.id !== questionId).slice();
      }
      this.showNextQuestion()
    });
  }
}