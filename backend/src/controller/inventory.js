import { connect } from "../database"

export const getInventory = async (req, res) =>{
   const db = await connect()
   const [rows] = await db.query('SELECT * FROM departments ORDER BY id')
   res.json(rows)
}

export const crearRecurso = async (req, res)=>{
   const db = await connect()
   const [results] = await db.query(
      "INSERT INTO departments (name, count, est, created_at, updated_at) VALUES (?, ?, ?,?,?)",
      [req.body.name, req.body.count, req.body.est, req.body.created_at, req.body.updated_at]
   );
   res.json({
      id: results.insertId,
      ...req.body,
   });
}

export const borrar =async(req, res)=>{
   const db = await connect()
   await db.query(
      "DELETE FROM departments WHERE id= ?", 
      [req.params.id]
   );
   res.sendStatus(204);
}


 
 


