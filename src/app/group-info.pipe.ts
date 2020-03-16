import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupInfo'
})
export class GroupInfoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
