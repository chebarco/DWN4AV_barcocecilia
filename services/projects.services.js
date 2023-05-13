import {MongoClient, ObjectId} from "mongodb";


const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")


//trae todos los proyectos
async function getProjects(filter = {}) {
  await client.connect()  
  
  const filtroMongo = {};

    if (filter.seccion) {
      filtroMongo.seccion = filter.seccion;
    }

  if (filter?.tecnologia) {
    filtroMongo.tecnologia = { $all: filter.tecnologia.split(";") }
  }
  
    return db.collection("Projects").find(filtroMongo).toArray()
  }


//tomo solo por el id
async function getProjectId(id) {
    await client.connect()
      return db.collection("Projects").findOne({ _id: new ObjectId(id)})
  }
  
  
  //traigo por seccion y la muestro en cada una de ellas
  async function seccionProject(seccion){
    console.log(seccion)
    await client.connect()
    return db.collection("Projects").find({seccion}).toArray() //traigo por seccion y la muestro en cada una de ellas
  }
  

  
  async function crearProject(Projects) {
    await client.connect()
    await db.collection("Projects").insertOne(Projects)
    return Projects
}


   
  //los modifico
  async function modificarProject(idProject, Projects) {
    await client.connect()
    await db.collection("Projects").updateOne({ _id: new ObjectId(idProject) }, { $set: Projects })
    return Projects
  }


  //los reemplazo
  async function replaceProject(idProject, Projects) {
    await client.connect()
    await db.collection("Projects").replaceOne({ _id: new ObjectId(idProject) }, Projects)
    return Projects
  }


  async function editProject(idProject, Projects) {
    await client.connect()
    await db.collection("Projects").updateOne({ _id: new ObjectId(idProject) }, { $set: Projects })
    return Projects
}



  //los borro
  async function deletProject(Projects) {
    await client.connect()
    await db.collection("Projects").deleteOne({ _id: new ObjectId(Projects) })
  
    return {
        id: Projects
    }
  }
  
  





export {
    getProjects,
    seccionProject,
    getProjectId,
    crearProject,
    modificarProject,
    replaceProject,
    deletProject,
    editProject,
    
  }