export class Results {
    //clase con los datos del sessionStorage, para poder trabajar con ellos en el script de bienvenida, para poder crear un objeto de tipo Results y poder trabajar con sus propiedades
    // constructor
    constructor (nivel, puntuacion, tiempo, ganado, intentos, int_ganados) {
        this.nivel = nivel
        this.puntuacion = puntuacion
        this.tiempo = tiempo
        this.ganado = ganado
        this.intentos = intentos
        this.intentos_ganados =int_ganados
    }

}