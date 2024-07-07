import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeGap',
  standalone: true
})
export class TimeGapPipe implements PipeTransform {

  transform(timestamp: string | null | undefined): string {
    if (!timestamp) {
      return 'N/A';  // Return a default value if timestamp is null or undefined
    }

    const now = new Date().getTime();
    const then = new Date(timestamp).getTime();
    const diffInSeconds = Math.floor((now - then) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const seconds = diffInSeconds % 60;

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

}
