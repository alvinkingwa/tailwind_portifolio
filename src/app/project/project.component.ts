import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  project = {
    id: 1,
    imageUrl: '../../assets/images/budget.jpeg',
    title: 'Simple Budget Expense App',
    description: 'A comprehensive tool for managing personal finances and tracking expenses.',
    role: 'Full Stack Developer',
    githubUrl: 'https://github.com/alvinkingwa/expense-budget-app-container',
    github:'https://github.com/alvinkingwa',
    demoUrl: 'https://simplebudgetapp.netlify.app/',
    details: [
      'Allows users to create and manage budgets for different categories',
      'Tracks expenses and income with easy-to-use input forms',
      'Provides visual representations of spending patterns through pie chart',
      'Implements secure user authentication',
      'sets budget limits that achiieve financial goals',
      'shows monthly transactions made by the user',
      'shows monthly savings after the user has finally budgeted and spent at teh end of every month'
      
    ],
    technologies: ['Angular', 'Node.js', 'Nest.js', 'Mysql', 'Chart.js', 'Tailwind CSS']
  };
}