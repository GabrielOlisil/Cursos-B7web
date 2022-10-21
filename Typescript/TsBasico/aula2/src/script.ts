//tipos em arrays


let nomes: string[] = ["gabriel", "claudin", "cleitin", "Gabs"];

let nomess: Array<number> = [12, 212, 1234, 123];


let bool: boolean[] = [false, true];


//type any


let names: any = ["gabriel", "claudin", "cleitin", "Gabs"];

names.push(123);


//type em funcoes

function firstLetterToUpperCase(name: string): string {
  let firstLetter = name.charAt(0).toUpperCase();

  return firstLetter + name.substring(1);
}


let pessoa: string = firstLetterToUpperCase("gabriel");