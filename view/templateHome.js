export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `  
  <ul> 
      <a href="#/home">Home</a>
      <br>
      <a href="#/logIn">Login y registro </a>
      <br>
      <a href="#/profile">Profile</a>
      <br>
      <a href="#/wall">Muro</a>
      <br>
  </ul> 
  `;
  divHome.innerHTML = viewHome;
  return divHome;
};

  // export const Home = () => {
  // const homeDiv = document.createElement('div');
  //   const home1 = ` 
  //   <div class="header-home"> 
  //   <img src="../Imagenes/Tu-oportunidad-logo.png" id="logoLogin" alt="Logo">
  //   <img src="../Imagenes/spain.png" id="flag" alt="flag">
  //   </div>
  //   <div class = "body-home">
  //     <img src="../Imagenes/friends.png" id="imgFriends" alt="image">
  //     <p>Bienvenida a la app del programa "Tu Oportunidad"</p>
  //   </div>
  //   <div class="footer-home">
  //     <img src="../Imagenes/footer1.png" id="imgLogin" alt="eye">
  //   </div>
  //     `;
  //     homeDiv.innerHTML = home1;
  //     return homeDiv;
  // };