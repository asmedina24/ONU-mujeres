export const Comunidades = () => {
  const divComunity = document.createElement("div");
  const viewComunity = `  <div class="input-group">
  <div class="form-outline">
   <input type="search" placeholder=" Buscar" id='search'/>
   <button id="boton"> BUscar</button>
    <label><i class="fas fa-search"></i></label>
</div>
  <div class="input-group">
        <div class="form-outline">
         <input type="search" placeholder=" Buscar" id='search'/>
         <button id="boton"> BUscar</button>
          <label><i class="fas fa-search"></i></label>
      </div>
     </div>
      `;
  divComunity.innerHTML = viewComunity;
  return divComunity;
};
