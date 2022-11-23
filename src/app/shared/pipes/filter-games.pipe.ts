import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGames',
})
export class FilterGamesPipe implements PipeTransform {
  transform(value: any[], filter: string): any {
    if (filter === '') {
      return value;
    } else {
      return value.filter((creation) =>
        creation.title.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }
}
