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

 

   