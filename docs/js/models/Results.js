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
    // Guardar en sessionStorage como JSON
    guardarEnSesion(clave = 'murdokuPartida') {
        sessionStorage.setItem(clave, JSON.stringify(this));
    }

    // Cargar de sessionStorage y reconstruir el objeto
    static cargarDeSesion(clave = 'murdokuPartida') {
        const datosJSON = sessionStorage.getItem(clave);
        if (!datosJSON) return null; 

        const datos = JSON.parse(datosJSON);
        return new Results(
        datos.nivel,
        datos.puntuacion,
        datos.tiempo,
        datos.ganado,
        datos.intentos,
        datos.intentos_ganados
        );
    }
}
