import { showTabs } from "../router.js";
export const wall = () => {
  const divWall = document.createElement("div");
  const viewWall = `  
  
     </div>
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
