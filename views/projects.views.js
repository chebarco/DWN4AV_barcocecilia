//vista de los productos
import { createPage } from "../pages/utils.js"; //importamos la funcion createPage


//muestro toda la lista de proyectos
function creatProjectsList(Projects) {
  let html = `<h2>Mis Proyectos</h2>`;
  html += '<div class="list-group">';
  html +=
    '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">';
  html += '<link rel="stylesheet" href="../css/estilos.css">';

  for (let i = 0; i < Projects.length; i++) {
    html += `
    <div class="row row-cols-1 row-cols-md-2 g-4">
     <div class="col">
     <div class="card">
      <img src="${Projects[i].imagen}" alt="${Projects[i].nombre}" class="card-img-top">
         <div class="card-body">
                <h5 class="card-title">${Projects[i].nombre}</h5>
               
         </div>
    </div>
    </div>
    </div>`;
  }
  return createPage("Projects", html);
}




//creo el detalle de mis proyectos
function crearProjectDetail(Projects) {
  let html = '<link rel="stylesheet" href="../css/estilos.css">';
  html +=
    '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">';
  html += ` <div class="card" style="width: 18rem;">
                 <img src="${Projects.imagen}" alt="${Projects.nombre}" class="card-img-top imagen">
                 <div class="card-body">
                 <h5 class="card-title">${Projects.nombre}</h5>
                <a class="card-text">${Projects.link}</a>
                <p class="card-text-p">${Projects.descripcion}</p>
                <p class="card-text-p">${Projects.seccion}</p>
                <a href="/projects" class="btn">Volver</a>
                </div>
            </div>`;

  return createPage("Detalle de Producto", html);
}






function crearProjectSeccionListPage(seccion) {
  let html = `<h2>Proyectos</h2>`;
  html += '<div class="list-group">';
  html +=
    '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">';
  html += '<link rel="stylesheet" href="../css/estilos.css">';

  for (let i = 0; i < seccion.length; i++) {
    console.log(seccion)

    html += `
    <div class="row row-cols-1 row-cols-md-2 g-4">
     <div class="col">
     <div class="card">
      <img src="${seccion[i].imagen}" alt="${seccion[i].nombre}" class="card-img-top">
         <div class="card-body">
                <h5 class="card-title">${seccion[i].nombre}</h5>
                <h5 class="card-title">${seccion[i].link}</h5>
                <h5 class="card-title">${seccion[i].tecnologia}</h5>
                <h5 class="card-title">${seccion[i].descripcion}</h5>

         </div>
    </div>
    </div>
    </div>`;
  }
  return createPage("Seccion", html);
}





export {
  creatProjectsList,
  crearProjectDetail,
  crearProjectSeccionListPage,
  createPage
};
