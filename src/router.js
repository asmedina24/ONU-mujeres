import { logIn } from './view/templateLogIn.js';
import { home } from './view/templateHome.js';
import { profile } from './view/templateProfile.js';
import { editProfile }  from './view/templateEditProfile.js'
import { wall } from './view/templateWall.js';
import {Comunidades, menu} from './view/templateComunidades.js'
import {Chat} from './view/templateChat.js'
import { crearComunidades } from "./view/templateCrearComunidades.js";
import {canal} from './view/templateCanal.js'
import login from './functions/login.js';
import {crearGrupoChat} from './view/templateCrearGrupoChat.js';
import {posteoChat} from './view/templatePosteoChat.js';
import {initchat} from './view/templateinitchat.js';
import {buscarCorreo} from './view/templateBuscarCorreo.js'

// import { message } from './view/templateMessage.js'

const showtemplate = (hash,params, name) => {
  const containerRoot = document.getElementById('root');
  const containerMenu = document.getElementById('root2');

    switch (hash) {
      case "":
        containerRoot.innerHTML = "";
        containerMenu.innerHTML = "";
        containerRoot.appendChild(home());
        break;
      case "#/home":
        containerRoot.innerHTML = "";
        containerMenu.innerHTML = "";
        containerRoot.appendChild(home());
        break;
      case "#/profile":
        containerRoot.innerHTML = "";
        containerMenu.innerHTML = "";
        containerRoot.appendChild(profile());
        break;
      case "#/logIn":
        containerRoot.innerHTML = "";
        containerMenu.innerHTML = "";
        containerRoot.appendChild(logIn());
        break;
      case "#/wall":
        containerRoot.appendChild(wall());
        menu();
        break;
      case '#/editProfile':
        containerRoot.innerHTML =''; 
        containerMenu.innerHTML = "";
        containerRoot.appendChild(editProfile());
        break;  
      case "#/message":
        containerRoot.appendChild(message());
        break;
      case "#/crearComunidades":
        containerRoot.innerHTML = '';
        containerMenu.innerHTML = "";
        containerRoot.appendChild(crearComunidades());
        break;
        case "#/crearGrupoChat":
          containerRoot.innerHTML = '';
          containerMenu.innerHTML = "";
          containerRoot.appendChild(crearGrupoChat());
          break;
      case "#/Canal":
        containerRoot.innerHTML = "";
        containerMenu.innerHTML = "";
        containerRoot.appendChild(canal(params));
        break;
        case "#/Chat":
         
        containerRoot.appendChild(Chat(params));
        break;
        case "#/posteoChat":
          containerRoot.innerHTML = "";
          containerMenu.innerHTML = "";
        containerRoot.appendChild(posteoChat());
          break;
          case "#/initchat":
          containerMenu.innerHTML = ""; 
          containerRoot.innerHTML = "";
          containerRoot.appendChild(initchat(params, name));
            break;
            case "#/buscarCorreo":
          containerRoot.appendChild(buscarCorreo());
          menu();
            break;
      default:
        containerRoot.innerHTML = "<h2>La pagina que busca no existe</h2>";
        containerMenu.innerHTML = "";
    }
};

export const changeroute = (hash) => {
  
    // console.log("changeroute", hash, hash.split("?"));
let url = hash.split("?");
hash=url[0];
let params = url[1];
    if (hash === '') {
        return showtemplate(hash);
    } if (hash === '#/home') {
        return showtemplate(hash);
    } if (hash === '#/profile') {
        return showtemplate(hash);
    } if (hash === '#/editProfile') {
        return showtemplate(hash);
    } if (hash === '#/wall') {
        return showtemplate(hash);
    } if (hash === '#/message') {
        return showtemplate(hash);
    } if (hash === '#/logIn') {
        return showtemplate(hash);
    } if (hash === '#/crearComunidades') {
        return showtemplate(hash);
    } if (hash === '#/crearGrupoChat') {
      return showtemplate(hash);
    } if (hash === '#/Chat') {
    return showtemplate(hash);
  }if (hash === '#/posteoChat') {
  return showtemplate(hash);
}if (hash === '#/buscarCorreo') {
  return showtemplate(hash);
}
     
    return showtemplate(hash, params);
};

export const showTabs = (tab, div) => {
  const containerRoot = div
  console.log("showTabs", containerRoot);
  containerRoot.innerHTML = "";
  switch (tab) {
    case "":
        containerRoot.appendChild(Comunidades());
      break;
    case "Comunidades":
      containerRoot.innerHTML = ""; 
      containerRoot.appendChild(Comunidades());
      break;
    case "Chat":
      containerRoot.appendChild(Chat());
      break;
    default:
      containerRoot.innerHTML = "<h2>La pagina que busca no existe</h2>";
  }
};

export const changeTabs = (tab) => {
  if (tab === "") {
    return showTabs(tab);
  }
  if (tab === "chat") {
    return showTabs(tab);
  }

};