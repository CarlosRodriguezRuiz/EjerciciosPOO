// Ejercicio POO 1
// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(),
//  que muestra por pantalla las propiedades de la persona.
class persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    console.log(
      `Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`,
    );
  }
}
// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(),
// que muestre por pantalla el resultado.
class estudiante extends persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar(nombre, edad, genero) {
    console.log(
      `Estudiante: ${this.nombre}, Curso: ${this.curso}, Grupo: ${this.grupo}`,
    );
  }
}

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(),
//  que muestre por pantalla el resultado.
class profesor extends persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar() {
    console.log(
      `Profesor: ${this.nombre}, Asignatura: ${this.asignatura}, Nivel: ${this.nivel}`,
    );
  }
}

// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.
const persona1 = new persona("juan", 55, "masculino");
persona1.obtDetalles();

const estudiante1 = new estudiante("Pepito", "Ingeniería", "A");
estudiante1.registrar();

const profesor1 = new profesor("Matemáticas", "Universitario");
profesor1.asignar();
