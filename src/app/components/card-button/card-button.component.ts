import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {ProgressBarModule} from "primeng/progressbar";
import {ButtonModule} from "primeng/button";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card-button',
  standalone: true,
  imports: [CardModule, NgIf, ProgressBarModule, ButtonModule, NgClass, AsyncPipe],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.css'
})
export class CardButtonComponent {
  @Input() label = '';
  @Input() active$?: Observable<boolean>;
  @Input() disabled$?: Observable<boolean>;
  @Input() clickHandler = () => {};
  @Input() loading$?: Observable<boolean>;
}
