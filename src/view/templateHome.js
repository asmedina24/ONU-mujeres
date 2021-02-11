export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `  

  <div class="header-home">
        <img src="../Imagenes/Tu-oportunidad-logo.png" class="logoHome"  alt="Logo">
  </div>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
       
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../Imagenes/img1.png" alt="First slide">
            <div>
            <h5>Bienvenida a la app del </br> programa "Tu Oportunidad"</h5>
            </div>
            <div id="logIn1">
              <ul>
               <a href="#/logIn">SALTAR</a>
              </ul> 
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../Imagenes/img2.png" alt="Second slide">
            <div>
            <h5>Podrás comunicarte y compartir</br>experiencias con tus</br>compañeras y tutoras</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../Imagenes/img3.png" alt="Third slide">
            <div>
            <h5>Podrás enviar y recibir mensajes,</br>fotos,videos y archivos</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../Imagenes/img4.png" alt="Third slide">
            <div>
            <h5>Y unirte a comunidades para</br>colaborar con mujeres como tú</h5>
            </div>
            <a href="#/logIn" class="btn btn-primary btn-lg active" id="btnStart" role="button" aria-pressed="true">COMENZAR</a>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  `;
  divHome.innerHTML = viewHome;
  return divHome;
};

/* <ol class="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
</ol>  */