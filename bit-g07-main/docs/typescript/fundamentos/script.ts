// TIPOS DE DATO
// primitivos o simples
// implicito ~ inferencia de tipo
/* let miVariable = null;
console.log(miVariable); */

// explicito
/* let miString: string = "abc";
let miNumber: number = 0;
let miBoolean: boolean = true;
console.log(miString);
console.log(miNumber);
console.log(miBoolean);
miString = "xyz";
miNumber = 1;
miBoolean = false;
console.log(miString);
console.log(miNumber);
console.log(miBoolean); */

// unión de tipos
/* let miId: string | number;
miId = "abc";
miId = 101;
console.log(miId); */

// especiales
/* let miNull : null;
miNull = null;
console.log(miNull);
let miUndefined: undefined;
console.log(miUndefined);
let miUnknown: unknown;
miUnknown = "abc";
miUnknown = 1;
miUnknown = false;
console.log(miUnknown);
let miAny: any;
miAny = "abc";
miAny = 1;
miAny = false;
console.log(miAny); */

// arreglos
/* let arrNumber1 = [0, 1, 2];
console.log(arrNumber1);
let arrNumber2: Array<number>;
arrNumber2 = [1, 2, 3];
console.log(arrNumber2);
let arrNumber3: number[] = [10, 20, 30];
console.log(arrNumber3);
let arrString1: Array<string>;
arrString1 = ["a", "b", "c"];
console.log(arrString1);
let arrString2: string[] = ["x", "y", "z"];
console.log(arrString2);
let arrAny: any[];
arrAny = ["abc", 123, true];
console.log(arrAny); */

// inferencia
/* let arr1 = ["abc", 123, true, [], {}, function name(){}];
arr1 = ["1", "2", "3"]
arr1 = [1, 2, 3]
console.log(arr1);
let arr2 = ["a"];
arr2 = [1, 2, 3]
console.log(arr2); */

// tuplas
/* let miTupla: [string, number, boolean];
miTupla = ["pepita", 555, true];
console.log(miTupla); */

// objetos
/* let miObject: object;
miObject = {};
console.log(miObject);
let objPersona1: object;
objPersona1 = {};
objPersona1 = {
    nombre: "pepita",
    usuario: "pepita@bit.com",
    contrasenia: "abc"
};
console.log(objPersona1);
let objPersona2: {
    nombre: string;
    hijos: number;
    casado?: boolean;
    activo: boolean;
};
objPersona2 = {
    nombre: "brandon",
    hijos: 5,
    activo: true
};
console.log(objPersona2); */

// enum
/* enum CodigosPermisos {
    Administrador,
    Profesor,
    Estudiante,
    Acudiente
}
console.log(CodigosPermisos);
console.log(CodigosPermisos.Administrador); */

// alias
/* type NombreEstudiante = string;
type HijosEstudiante = number;
type ActivoEstudiante = boolean;

type Estudiante = {
    nombre: NombreEstudiante;
    hijos: HijosEstudiante;
    activo: ActivoEstudiante;
}

let miEstudiante: Estudiante;
miEstudiante = {
    nombre: "juanito",
    hijos: 0,
    activo: true
}
console.log(miEstudiante); */

// interfaces
/* interface Profesor {
    id: number;
    nombre: string;
    curso: string;
    activo: boolean;
    perfil: string;
}
let miProfesor: Profesor;
miProfesor = {
    id: 1,
    nombre: "jirafales",
    curso: "básico1",
    activo: true,
    perfil: "profesor"
}
console.log(miProfesor); */

// funciones
let retornado: any;

/* function miFuncion1() {
    console.log("soy función 1");
}
retornado = miFuncion1();
console.log(retornado);

const miFuncion2 = () => {
    console.log("soy función 2");
}
retornado = miFuncion2();
console.log(retornado); */

/* function miFuncion(): void {
    console.log("soy Función");
}
retornado = miFuncion();
console.log(retornado); */

/* function miFuncion(): string {
    return "soy Función";
}
retornado = miFuncion();
console.log(retornado); */

/* function miFuncion(numero1: number, numero2: number): number {
    return numero1 * numero2;
}
retornado = miFuncion(2, 4);
console.log(retornado); */

/* function miFuncion(nombre: string = "desconocido"): string {
    return `hola, ${nombre}`;
}
retornado = miFuncion();
console.log(retornado);
retornado = miFuncion("pepita");
console.log(retornado); */