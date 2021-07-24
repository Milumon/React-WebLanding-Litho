import { db } from "../firebaseConfig";
export const createCiudad = (data) => {  
  return db.collection('ciudades').add({ 
    moneda: data.moneda,
    nombre: data.nombre,
    pais: data.pais,
    poblacion:data.poblacion,
    presidente: data.presidente,
    urlImage: data.urlImage,
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

export const editCiudades = (ciudad) =>{
  console.log(ciudad)

  db.collection('ciudades').doc(ciudad.id).update({
          moneda: ciudad.moneda,
          nombre: ciudad.nombre,
          pais: ciudad.pais,
          poblacion: ciudad.poblacion,
          presidente: ciudad.presidente,
          urlImage: ciudad.urlImage,
   })}


export const deleteCiudad = (idCiudad) => { 
    return db.collection('ciudades').doc(idCiudad).delete();
};

