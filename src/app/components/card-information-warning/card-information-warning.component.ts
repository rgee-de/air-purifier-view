import {Component, Input} from '@angular/core';
import {CardInformationComponent} from "../card-information/card-information.component";
import {CardModule} from "primeng/card";
import {NgClass, NgIf} from "@angular/common";
import {ProgressBarModule} from "primeng/progressbar";

@Component({
  selector: 'app-card-information-warning',
  standalone: true,
  imports: [
    CardModule,
    NgIf,
    ProgressBarModule,
    NgClass
  ],
  templateUrl: './card-information-warning.component.html',
  styleUrls: ['../card-information/card-information.component.css', './card-information-warning.component.css']
})
export class CardInformationWarningComponent extends CardInformationComponent {

  progressClass = 'good';

  override get value() {
    return super.value;
  }

  @Input()
  override set value(val: number) {
    super.value = val;
    this.progressClass = this.calculateProgressClass();
  }

  private calculateProgressClass(): string {
    const percentage = super.value * (100 / (this.maxValue ?? 100));
    console.log(percentage);
    if (percentage < 10) {
      return 'change';
    } else if (percentage < 20) {
      return 'warning';
    }
    return 'good';
  }
}
