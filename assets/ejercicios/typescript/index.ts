//Asignación de BOOLEANS

let muted = true;//con esto le sobra a ts para saber que és un boolean
let muted: boolean = true;//esto tb podemos hacerlo y es decirle a ts de una manera explícita que és un boolean

//NUMBERS
let age = 6;
let numerador: number = 42;
let denominador: number = age;//en este caso puedeo poner un string aunque le esté diciendo de forma explícita que es un número porque la he añadido antes como que el age es un número
let resultado = numerador / denominador;

//STRINGS
let nombre: string = 'richard';
let saludo = `Me llaman ${nombre}`;

//ARRAYS
let people: string[] = [];//el poner [] vacio significa que está vacio y con las lineas siguientes nombrando el nombre del string e introducuiendo los valores
people = ["María", "Juan", "Mariano"]
people.push(9); //El número está en rojo y por tanto no se puede añadir al string porque le he dicho que sea el arreglo un tipo string y no un number pero si le pongo las comillas al numero, lo estoy transformando en un string por tanro si puedo introducirlo en el array

let peopleandnumber: Array < string | number > = []; //en este caso no habría problema el introducir numeros y strings porque hemos añadido ' Array < string | number > ' donde decimos que van a haber string or number
peopleandnumber = ["Antonio", 2, "Mari", 888];

//ENUM. Es un tipo especial llamado enumeración

enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde', 
    Azul = 'Azul',
}
let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es el ${colorFavorito}.`);//Lo que nos mostrará la consola aquí es el valor 0,1 o 2 porque así es como los nombra en el array pero si el en propio array somos explícitos y le ponemos ' rojo = "Rojo" ' aquí si nos dirá el string ya que stamos siendo estrictos con lo que queremos que nos de

//ANY Nos deja 'convetir' en cualquier tipo

let comodin = 'Joker';
comodin = {type: 'Wildcard'};
//nos da error porque joker es un string y luego lo estamos convirtiendo en objeto pero si lo cambiamos y ponemos

let comodin: any = 'Joker';
comodin = {type: 'Wildcard'};
//con poner any si me dejaría

//OBJECTS
let someObject = {type: 'Wildcard'};
//pero si queremos ser explícitos podemos decirle
let someObject: object = {type: 'Wildcard'};

//FUNCTIONS (tipar)
function add(a: number, b: number):number {//estamos siendo explícitos en los valores de a y b ya que le estamos diciendo que son números y el tercer number después del paréntesis es el que corresponde al return, lo que nos va a devolver la función
    return a + b;
};

const sum = add(5,9);

function createrAdder (a:number): (number) => number { // (number) => number esto reprensenta lo que toma la función, lo que está entre () y el segundo number es lo que nos devuelve
    return function (b:number){
        return b + a;
    };
};

const addFour = createrAdder(4);
const fourPlus6 = addFour(6);

function fullName (firstName: string, secondName: string) { // secondName?: string nos deja que el secondName sea o un string o esté undefined
    return `${firstName} ${secondName}`;
};

const richard = fullName('Richard') 
//se pone en rojo porque no le hemos añadido el 'secondName' y por tanto la función nos dice que le falta algo. Para que no pase esto o por si solo queremos colocar el firstName, le tenemos que colocar justo después del secindName un signo de interrogación
//este signo lo que hace es decirle a la función que puede ser un string o puede estar undefined sería tal que así ' (firstName: string, secondName?: string) '
// y si por lo que sea queremos que se complete con un valor por omisión si el Usuario no lo hace y no esté en modo undefined podemos hacerlo de la siguiente forma: ' (firstName: string, secondName: string = 'Damasco'): string ' Damasco es el apellido qu ehe puesto, pero podría ser cualquier valor por omision

//INTERFACES

interface Rectangulo {
    ancho: number
    alto: number
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6
}

function area (r: Rectangulo): number {
    return r.alto * r.ancho;
}
const areaRect = area (rect);
console.log(areaRect);

