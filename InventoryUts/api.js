const API = 'http://192.168.0.161:3000/inventory'

export const getInventory = async () => {
   const res = await fetch(API)
   return await res.json()
}

export const crearRecurso = async (newinventory) => {  
   const res = await fetch(API, {
     method: "POST",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newinventory),
   });
   return await res.json();
 };