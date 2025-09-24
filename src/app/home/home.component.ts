

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class HomeComponent implements OnInit {
  isDarkMode = false;
  title = 'Simple-Calculator';
  display = '';
  result: number | string = '';

  ngOnInit(): void {
    // Load theme from localStorage if exists
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-theme');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  onButtonClick(value: string) {
    // Prevent two operators in a row
    if (/[+\-*/%]/.test(value) && (this.display === '' || /[+\-*/%]$/.test(this.display))) {
      return;
    }
    // Prevent multiple decimals in a number
    if (value === '.' && /\d*\.?\d*$/.test(this.display.split(/[^\d.]/).pop() || '')) {
      if (this.display.endsWith('.') || (this.display.match(/\./g) || []).length > 0 && /[+\-*/%]/.test(this.display.slice(-2,-1))) {
        return;
      }
    }
    this.display += value;
  }

  clear() {
    this.display = '';
    this.result = '';
  }

  deleteLast() {
    this.display = this.display.slice(0, -1);
  }

  evaluate() {
    if (!this.display) return;
    try {
      // eslint-disable-next-line no-eval
      let evalResult = Function('return (' + this.display.replace(/%/g, '/100') + ')')();
      this.result = evalResult;
      this.saveToHistory(`${this.display} = ${evalResult}`);
      this.display = evalResult.toString();
    } catch (e) {
      this.result = 'Error';
    }
  }

  private saveToHistory(entry: string) {
    let history = JSON.parse(localStorage.getItem('calcHistory') || '[]');
    history.push(entry);
    localStorage.setItem('calcHistory', JSON.stringify(history));
  }
}
