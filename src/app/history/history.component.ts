import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class HistoryComponent implements OnInit {
  history: string[] = [];

  ngOnInit(): void {
    const savedHistory = localStorage.getItem('calcHistory');
    if (savedHistory) {
      this.history = JSON.parse(savedHistory);
    }
  }

  clearHistory() {
    this.history = [];
    localStorage.removeItem('calcHistory');
  }
}
