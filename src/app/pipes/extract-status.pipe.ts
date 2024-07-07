import { Pipe, PipeTransform } from '@angular/core';
import { StatusModel } from '../models/status.model';

type StatusModelValue = StatusModel[keyof StatusModel];

@Pipe({
  standalone: true,
  name: 'extractStatus'
})
export class ExtractStatusPipe implements PipeTransform {
  transform(status: StatusModel, key: keyof StatusModel): StatusModelValue | null {
    return status ? status[key] : null;
  }
}
