import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterString: string, nom:string, commune:string): any[] {
    const result:any =[];
    if(!value || filterString==='' || nom ==='' || commune ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[nom].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
      if(a[commune].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
