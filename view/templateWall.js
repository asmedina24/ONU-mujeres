import { showTabs } from "../router.js";
export const wall = () => {
  const divWall = document.createElement("div");
  //  <nav>
//   <ul class="menu">
//         <li class="toggle"><p><i class="fas fa-bars"></i></p></li>
//     <li class="logo"><h1>Tu oportunidad</h1></li>
//     <li class="item"><a href="#/profile">Profile</a></li>
//     <li class="item"><a href="#">Sign out</a></li>
//        </ul>
// </nav>
  const viewWall = `  
   
<div class="selection">
<div class="button-selection" id="btnComunidad">
comunidad
</div>
<div class="button-selection" id="btnChat">
chat
</div>
</div>
<div class="Tab" id="tabs">
tab1
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
  btnComunidad.addEventListener(
    "click",
    () => showTabs("Comunidades", divTabs),
    false
  );
  btnChat.addEventListener("click", () => showTabs("Chat", divTabs), false);

  // for (let item of items) {
  //   if (item.querySelector(".submenu")) {
  //     item.addEventListener("click", toggleItem(menu), false);
  //   }
  //   item.addEventListener("keypress", toggleItem(menu), false);
  // }
  //  document.addEventListener("click", closeSubmenu(menu), false);
  return divWall;
};
