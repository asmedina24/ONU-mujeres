export const wall = () => {
  const divHome = document.createElement('div');
  const viewHome = `  
    <div id="navBar">
     <p>Tu Oportunidad</p>
    </div>
      <div class="btn-option">
        <div class="btn-comunidad">
           <p>Comunidad</p>
        </div>
        <div class="btn-chat">
          <p>Chat</p>
        </div>
      </div>
    
      <div class="buscador-wall">
          <input type="search" class="" placeholder="Buscar en mis comunidades"/>
      </div>
      
     
 
  
  
      `;
  divHome.innerHTML = viewHome;
  return divHome;
};
