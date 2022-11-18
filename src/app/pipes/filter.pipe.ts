import { Pipe, PipeTransform } from '@angular/core';
import { Costumer } from '../interfaces/Costumer';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(
    costumers: Costumer[],
    propName: keyof Costumer,
    value: string
  ): Costumer[] {
    let costumerArr: Costumer[] = [];
    for (let costumer of costumers) {
      if (
        (costumer[propName] as string)
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        costumerArr.push(costumer);
      }
    }
    return costumerArr;
  }

}
