import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojify'
})  // {{ myString | emojify }}

export class EmojifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      // return the empty string if "value" is empty
      if (!value) {
          return '';
      }

      // the "value" variable is the string
      return value
        .replace(/pizza/ig, '🍕')
        .replace(/hot dog/ig, '🌭')
        .replace(/junk/ig, '🍆')
        .replace(/fire/ig, '🔥')
        .replace(/poop/ig, '💩')
        .replace(/avocado/ig, '🥑');

        // (i)gnore case (get "PIZZA" or "pizza")
        // (g)lobal (get all "pizza"s)
  }

}
