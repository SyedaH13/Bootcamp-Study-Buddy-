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

  QAlist: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getQuestions().subscribe(
      data => {
        this.QAlist = data as any[];
      }
    );

  }
}




