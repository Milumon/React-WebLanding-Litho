import { db } from "../firebaseConfig";
export const createCiudad = (moneda, nombre, pais, poblacion, presidente, urlImage) => { 
  return db.collection('ciudades').add({ 
    moneda: moneda,
    nombre: nombre,
    pais: pais,
    poblacion:poblacion,
    presidente: presidente,
    urlImage: urlImage,
  });
};


export const getCiudad = (cb) => db.collection("ciudades")
  .orderBy("nombre", "asc")
  .onSnapshot((querySnapshot) => {
    const arrCiudades = [];
    querySnapshot.docs.forEach((doc) =>
    arrCiudades.push({
        id: doc.id,
        ...doc.data(),
      })
    );
    cb(arrCiudades);
  }); 

export const editCiudades = (ciudad) => db.collection('ciudades').doc(ciudad.id).update({
          moneda: ciudad.moneda,
          nombre: ciudad.nombre,
          pais: ciudad.pais,
          poblacion: ciudad.poblacion,
          presidente: ciudad.presidente,
          urlImage: ciudad.urlImage,
   })


export const deleteCiudad = (idCiudad) => { 
    return db.collection('ciudades').doc(idCiudad).delete();
};

