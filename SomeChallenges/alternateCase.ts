export function toAlternatingCase(s: string): string {
    
    let string = "";

    for (let i = 0; i < s.length; i++) {
        s[i] === s[i].toUpperCase() ? string += s[i].toLowerCase() : 
        string += s[i].toUpperCase() 
    }

    return string;

  }