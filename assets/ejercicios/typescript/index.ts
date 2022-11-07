//Asignación de booleans

let muted = true;//con esto le sobra a ts para saber que és un boolean
let muted: boolean = true;//esto tb podemos hacerlo y es decirle a ts de una manera explícita que és un boolean

//Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;//en este caso puedeo poner un string aunque le esté diciendo de forma explícita que es un número porque la he añadido antes como que el age es un número
let resultado = numerador / denominador;

//Strings
let nombre: string = 'richard';
let saludo = `Me llaman ${nombre}`;

//Arreglos
let people: string[] = [];//el poner [] vacio significa que está vacio y con las lineas siguientes nombrando el nombre del string e introducuiendo los valores
people = ["María", "Juan", "Mariano"]
people.push(9); //El número está en rojo y por tanto no se puede añadir al string porque le he dicho que sea el arreglo un tipo string y no un number pero si le pongo las comillas al numero, lo estoy transformando en un string por tanro si puedo introducirlo en el array

let peopleandnumber: Array < string | number > = []; //en este caso no habría problema el introducir numeros y strings porque hemos añadido ' Array < string | number > ' donde decimos que van a haber string or number
peopleandnumber = ["Antonio", 2, "Mari", 888];

//Enum. Es un tipo especial llamado enumeración

enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde', 
    Azul = 'Azul',
}
let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es el ${colorFavorito}.`);//Lo que nos mostrará la consola aquí es el valor 0,1 o 2 porque así es como los nombra en el array pero si el en propio array somos explícitos y le ponemos ' rojo = "Rojo" ' aquí si nos dirá el string ya que stamos siendo estrictos con lo que queremos que nos de

//Any Nos deja 'convetir' en cualquier tipo

let comodin = 'Joker';
comodin = {type: 'Wildcard'};
//nos da error porque joker es un string y luego lo estamos convirtiendo en objeto pero si lo cambiamos y ponemos

let comodin: any = 'Joker';
comodin = {type: 'Wildcard'};
//con poner any si me dejaría

//Object
let someObject = {type: 'Wildcard'};
//pero si queremos ser explícitos podemos decirle
let someObject: object = {type: 'Wildcard'};
