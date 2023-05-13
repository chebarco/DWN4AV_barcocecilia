function createPage(title, content) {
  let html;

  html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <link rel="stylesheet" href="./css/estilos.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <title>${title}</title></head><body>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
   <a class="navbar-brand" href="/projects">Proyectos</a>
    </button>
    <div id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/projects/ecommerce">Commerce</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/game">Games</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/webapp">App</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/landingPage">LandingPage</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/mobile">Mobile</a>
        </li>


</nav>`;
  html += content;
  html += "</body> </html>";

  return html;
}

function createProjectList(Projects) {
  let content = "<ul>";
  for (let i = 0; i < Projects.length; i++) {
    content +=
      '<img src="' + Projects[i].imagen + '" alt="' + Projects[i].nombre + ">";
  }
  content += "</ul>";
  return content;
}

export { createPage, createProjectList };
