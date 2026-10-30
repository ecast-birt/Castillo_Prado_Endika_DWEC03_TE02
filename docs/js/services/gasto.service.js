// importamos los elementos necesarios
import {GASTOS_DB} from '../data/user.data.js';
import {GastoCombustible} from '../models/GastoCombustible.js'; 

// declaramos las variables
var gastoAnual = {
  2020 : 0,
  2019 : 0,
  2018 : 0,
  2017 : 0,
  2016 : 0,
  2015 : 0
};

// declaramos las funciones que usaremos
export const GastoService = {
  almacenarGastos,
  procesarGasto
};

// funciones que usaremos

function almacenarGastos(){
  GASTOS_DB.forEach(gasto => {
    // guardar en localStorage 
    const clave = gasto.id.toString();
    localStorage.setItem(clave, JSON.stringify(gasto));

    // EXTRAER EL AÑO CON getFullYear()
    const anio = gasto.date.getFullYear();
    
    gastoAnual[anio] += gasto.precioViaje;
  });

  // guardar en sessionStorage
  for (const anio in gastoAnual) {
    sessionStorage.setItem(anio, gastoAnual[anio]);
  }

  return gastoAnual;
}


function procesarGasto(jsonNuevoGasto){
 
  const registro = JSON.parse(jsonNuevoGasto);
  

  const nuevoGasto = new GastoCombustible(
      registro.id,
      registro.vehicleType,
      registro.date,
      registro.kilometers,
      registro.precioViaje
  );
  
  //esto me ha costado, sacar el año de la fecha del gasto con getFullYear() y convertirlo a string para usarlo como clave en sessionStorage
  const anio = nuevoGasto.date.getFullYear().toString();
  
  //Recuperamos el gasto almacenado en sessionStorage para ese año
  let gastoAlmacenado = sessionStorage.getItem(anio);
  
  
  //Sumarle el importe del gasto actual
  gastoActualizado += nuevoGasto.precioViaje;
  
  //Actualizar el valor almacenado en sessionStorage
  sessionStorage.setItem(anio, gastoActualizado.toString());
}
