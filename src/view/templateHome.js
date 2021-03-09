export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `  

  <div class="header-home">
        <img src="https://raw.githubusercontent.com/asmedina24/ONU-mujeres/main/src/Imagenes/Tu-oportunidad-logo.png" class="logoHome"  alt="Logo">
  </div>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://raw.githubusercontent.com/asmedina24/ONU-mujeres/main/src/Imagenes/slider1.jpg" alt="First slide">
            <div id="logIn1">
              <ul>
               <a href="#/logIn">SALTAR</a>
              </ul> 
            </div>
            <div id="logIn2">
              <ul>
               <a href="#/log">CONTINUAR</a>
              </ul>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://raw.githubusercontent.com/asmedina24/ONU-mujeres/main/src/Imagenes/slider2.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://github.com/asmedina24/ONU-mujeres/blob/main/src/Imagenes/slider3.jpg?raw=true" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://raw.githubusercontent.com/asmedina24/ONU-mujeres/main/src/Imagenes/slider4.jpg" alt="Third slide">
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

