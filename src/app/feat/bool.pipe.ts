import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {

  transform(bool: boolean, trueValue = "Y", falseValue = ""): string {
    return bool ? trueValue : falseValue;
  }

}
