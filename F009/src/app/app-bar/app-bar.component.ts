import { Component } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss'
})
export class AppBarComponent {
  currentContent: string = 'Initial content';

  changeContent(buttonLabel: string) {
    switch (buttonLabel) {
      case 'Button 1':
        this.currentContent = 'Content from Button 1';
        break;
      case 'Button 2':
        this.currentContent = 'Content from Button 2';
        break;
      case 'Button 3':
        this.currentContent = 'Content from Button 3';
        break;
      default:
        this.currentContent = 'Invalid button label';
    }
  }

}

