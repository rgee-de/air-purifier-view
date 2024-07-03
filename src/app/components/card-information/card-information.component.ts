import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {ProgressBarModule} from "primeng/progressbar";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-card-information',
  standalone: true,
  imports: [CardModule, ProgressBarModule, NgIf],
  templateUrl: './card-information.component.html',
  styleUrl: './card-information.component.css'
})
export class CardInformationComponent {
  @Input() header = '';
  @Input() value = 0;
  @Input() maxValue?: number;
  @Input() unit = '';
}
