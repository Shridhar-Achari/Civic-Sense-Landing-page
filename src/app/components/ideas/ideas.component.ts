import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ideas',
  imports: [FormsModule],
  templateUrl: './ideas.component.html',
  styleUrl: './ideas.component.scss'
})
export class IdeasComponent {
 idea = {
    name: '',
    email: '',
    message: ''
  };

  submitIdea() {
    console.log('Idea submitted:', this.idea);
    alert('Thank you for your idea!');
    this.idea = { name: '', email: '', message: '' };
  }
}
