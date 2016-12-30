import { Pipe } from '@angular/core';

@Pipe({
    name:"searchPipe"
})
export class SearchPipe{
    transform(value, [term]){
        return value.filter((item)=>item.title.startsWith(term));
    }
}