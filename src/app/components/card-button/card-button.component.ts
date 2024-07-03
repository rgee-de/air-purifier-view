import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {NgIf} from "@angular/common";
import {ProgressBarModule} from "primeng/progressbar";

@Component({
  selector: 'app-card-button',
  standalone: true,
  imports: [CardModule, NgIf, ProgressBarModule],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.css'
})
export class CardButtonComponent {
  @Input() header = '';
  @Input() clickHandler = () => {};
}
