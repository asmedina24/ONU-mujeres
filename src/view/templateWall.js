import { booleanTypeAnnotation } from "@babel/types";
import { showTabs } from "../router.js";
export const wall = () => {
  const divWall = document.createElement("div");
  const viewWall = `  
    <div class="selection">
      <div class="button-selection" id="btnComunidad">
        <p>comunidad</p>
      </div>
      <div class="button-selection" id="btnChat">
      <p>chat</p>
      </div>
      </div>
        <div class="Tab" id="tabs">
            </div>

      <div class="input-group">
        <div class="form-outline">
         <input type="search" placeholder="   Buscar" id="search"/>
         <button id="boton"> BUscar</button>
          <label><i class="fas fa-search"></i></label>
      </div>
     </div>


     <div id="canales">
     <div>
     <p> Estes es uno de los canales mas importantes para la busqueda de empleo</p> </div>
          <div>
          <p> canales mas importantes para la busqueda de empleo</p> </div>
     <div>
     <p> Estes es uno de los canales mas importantes para la busqueda de empleo</p> </div>
     </div>
 
      `;
  divWall.innerHTML = viewWall;
  const divTabs = divWall.querySelector("#tabs");
  showTabs("", divTabs);
  const toggle = divWall.querySelector(".toggle");
  const menu = divWall.querySelector(".menu");
  const items = divWall.querySelectorAll(".item");
  const btnComunidad = divWall.querySelector("#btnComunidad");
  const btnChat = divWall.querySelector("#btnChat");
  

  /* Event Listeners */
  // toggle.addEventListener("click", toggleMenu(menu,toggle), false);
  btnComunidad.addEventListener("click",() => showTabs("Comunidades", divTabs),
    false );

  btnChat.addEventListener("click", () => showTabs("Chat", divTabs), false);
    return divWall;
};

  // const search = document.querySelector("#search");
  // const buttonSearch = document.querySelector("#")
  // console.log(search);

  // const filtar = () =>{
  //   console.log(search.value)
  // } 
  // boton.addEventListener('click', filtar)
  