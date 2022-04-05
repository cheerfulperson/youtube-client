import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/shared/response.model';

@Pipe({
  name: 'resultFilter',
  pure: false,
})
export class ResultFilterPipe implements PipeTransform {
  private filterString: string = '';

  public transform(items: Item[], filterString: string): Item[] | undefined {
    this.filterString = filterString;
    return items.filter((value: Item) =>
      value.snippet.title.match(new RegExp(`(${this.checkString()})`, 'ig'))
    );
  }

  private checkString(): string {
    return this.filterString
      .split('')
      .map((el: string) =>
        el === '?' ||
        el === '.' ||
        el === '+' ||
        el === '\\' ||
        el === '*' ||
        el === '|'
          ? `\\${el}`
          : el
      )
      .join('');
  }
}
