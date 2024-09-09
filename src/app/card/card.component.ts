import { CommonModule } from '@angular/common';
import { Component, TemplateRef, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  readonly heading = input.required<string>();
  
  readonly icon = input.required<TemplateRef<any>>();
  
  readonly description = input.required<string>();
}
