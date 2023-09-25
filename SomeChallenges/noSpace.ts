export function noSpace(x:string):string {
    
    let string = "";
  
    for(let i = 0; i < x.length; i++) {
        if (x[i] === " ") {
            continue
        }
      
        string += x[i];
    }

    return string;

  }