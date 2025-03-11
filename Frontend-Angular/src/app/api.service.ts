import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl = 'https://localhost:7237/api';
  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(`${this.baseUrl}/Questions`);
  }

  getFavorites() {
    return this.http.get(`${this.baseUrl}/Favorites`);
  }

  addFavorites(questionId: number) {
    return this.http.post(`${this.baseUrl}/Favorites`, { FavoriteId: questionId });
  }

  removeFromFavorites(questionId: number) {
    return this.http.delete(`${this.baseUrl}/Favorites/${questionId}`);
  }

  addQuestion(questionAnswer: {question: string, answer: string }) {
    return this.http.post(`${this.baseUrl}/Questions`, questionAnswer);
  }

  removeQuestion(questionId: number) {
    return this.http.delete(`${this.baseUrl}/Questions/${questionId}`);
  }
}


