// importamos el modelo
import { UserPass } from '../models/UserPass.js';
// finalmente no lo usareimport { cargarJSON } from '../services/cargar-datos.js';

const jsonUsuarios = `[   
    {
      "id":1,
      "nombre" : "Iker",
      "apellido" : "Arana",
      "usuario":"iarana",
      "contraseña":"1234Abcd"
   },
   {
      "id":2,
      "nombre" : "Ander",
      "apellido" : "Goikoetxea",
      "usuario":"agoikoetxea",
      "contraseña":"5678Efgh"
   },

   {
      "id":3,
      "nombre" : "Jokin",
      "apellido" : "Olano",
      "usuario":"jolano",
      "contraseña":"9012Ijkl"
   }
]`;


// Metemos los datos del JSON en un array de objetos de tipo UserPass
/* esto al final no lo usare, ya que me daba problemas al leer el archivo json, y no se porque, asi que lo he metido directamente en el array jsonUsuarios
cargarJSON('./usuarios.json', function(datos) {
    jsonUsuarios = datos.map(usuario => new UserPass(usuario.id, usuario.nombre,usuario.apellido, usuario.usuario, usuario.contraseña));
});
*/


// Procesamos el Json

/* como lo hice yo en ejercicio
export const USER_DB = [];
const registroHistorico = JSON.parse(jsonHistorico);
console.log("Registro histórico cargado correctamente:", registroHistorico);

//Guardamos en GASTOS_DB un array de objetos de tipo GastoCombustible
registroHistorico.forEach(registro => {
    const nuevoGasto = new GastoCombustible(
        registro.id,
        registro.vehicleType,
        registro.date,
        registro.kilometers,
        registro.precioViaje
    );
    GASTOS_DB.push(nuevoGasto);
});
*/

//mucho mas elegante como lo hizo el profesor
export const USER_DB = JSON.parse(jsonUsuarios).map(
    usuario => new UserPass(
        usuario.id, 
        usuario.nombre,
        usuario.apellido, 
        usuario.usuario, 
        usuario.contraseña
    )
);

console.log("USER_DB cargado correctamente:", USER_DB);





