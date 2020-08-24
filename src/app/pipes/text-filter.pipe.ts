import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(collection: any[], value: string, property: string): any[] {

    if (!value || value == "") {
      return collection;
    }

    value = value.toLowerCase();

    return collection.filter(item => {
      return item[property].toLowerCase().includes(value);
    })
  }
}
