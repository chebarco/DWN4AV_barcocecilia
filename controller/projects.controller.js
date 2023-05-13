import * as services from "../services/projects.services.js";
import * as views from "../views/projects.views.js";

//aca muestro todos los proyectos
function getProjects(req, res) { 
    services.getProjects().then((Projects) => {
      res.send(views.creatProjectsList(Projects));
    });
  }
  

//traigo proyectos por ID
function getProjectsId(req, rest) {
  
  let idProject = req.params.idProject;

  services.getProjectId(idProject).then((Projects) => {
    if (Projects == null) {
      rest.send("No se encontro el producto");
    } else {
      rest.send(views.crearProjectDetail(Projects));
    }
  });
}



//aca por seccion
function seccionGetProject(req, res) { 
 const seccion = req.params.seccion
  services.seccionProject(seccion).then((seccion) => {
    res.send(views.crearProjectSeccionListPage(seccion));
  });
}




  export{
    getProjects,
    seccionGetProject,
    getProjectsId,
  }