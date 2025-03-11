import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {

  favorites: any;
  currentQuestionIndex: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void{
    this.apiService.getFavorites().subscribe(
      data => {
        this.favorites = data;
        console.log(this.favorites);
      }
    );
  }
  showNextQuestion() {
    if (this.currentQuestionIndex < this.favorites?.$values.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.currentQuestionIndex = 0; // Reset to the first question when reach the end
    }
  }

  RemoveFromFavorites(questionId: number): void {
    this.apiService.removeFromFavorites(questionId).subscribe(response => {
      console.log('Favorite removed:', response);
      alert("Favorite Removed!");
      if (this.favorites?.$values) {
        this.favorites.$values = this.favorites.$values.filter((q: { id: number }) => q.id !== questionId);
      }
      
    });
  }
}
