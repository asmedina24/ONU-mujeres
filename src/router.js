import { logIn } from './view/templateLogIn.js';
import { home } from './view/templateHome.js';
import { profile } from './view/templateProfile.js';
import { editProfile }  from './view/templateEditProfile.js'
import { wall } from './view/templateWall.js';
import {Comunidades} from './view/templateComunidades.js'
import {Chat} from './view/templateChat.js'
import { crearComunidades } from "./view/templateCrearComunidades.js";
import {canal} from './view/templateCanal.js'
import login from './functions/login.js';
import {crearGrupoChat} from './view/templateCrearGrupoChat.js';
import {posteoChat} from './view/templatePosteoChat.js';
import {initchat} from './view/templateinitchat.js';
import {buscarCorreo} from './view/templateBuscarCorreo.js'

// import { message } from './view/templateMessage.js'

const showtemplate = (hash,params) => {
    console.log("showtemplate" ,params);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = `
  <!-- Definimos nuestra cabecera -->
<header>
    <!-- Nuestro botón. En el ejemplo uso Font-awesome para mostrar un icono de barras -->
   
    <button class="botonMenu">
        <i class="fa fa-bars"></i>  
    </button>
 
  <!--   Los links -->
    <nav class="principal">
        <ul>
            <li><a href="#/home">home.</a></li>
            <li><a href="#/logIn">login!</a></li>
            <li><a href="#/profile">perfil.</a></li>
            <li><a href="#/wall">wall!</a></li>
            <li id="cerrarSesion">cerrar</li>
           
        </ul>
    </nav>
   <p class="titulo">Tu Oportunidad</p>
</header>  
    `;

    const cerrar = document.getElementById('cerrarSesion');
    cerrar.addEventListener("click", () => {
        login.cerrarSesion();

    });

    switch (hash) {
      case "":
        containerRoot.innerHTML = "";
        containerRoot.appendChild(home());
        break;
      case "#/home":
        containerRoot.innerHTML = "";
        containerRoot.appendChild(home());
        break;
      case "#/profile":
        containerRoot.innerHTML = "";
        containerRoot.appendChild(profile());
        break;
      case "#/logIn":
        containerRoot.innerHTML = "";
        containerRoot.appendChild(logIn());
        break;
      case "#/wall":
        containerRoot.appendChild(wall());
        break;
      case '#/editProfile':
        containerRoot.innerHTML =''; 
        containerRoot.appendChild(editProfile());
        break;  
      case "#/message":
        containerRoot.appendChild(message());
        break;
      case "#/crearComunidades":
        containerRoot.innerHTML = '';
        containerRoot.appendChild(crearComunidades());
        break;
        case "#/crearGrupoChat":
          containerRoot.innerHTML = '';
          containerRoot.appendChild(crearGrupoChat());
          break;
      case "#/Canal":
        containerRoot.innerHTML = "";
        containerRoot.appendChild(canal(params));
        break;
        case "#/Chat":
         
        containerRoot.appendChild(Chat(params));
        break;
        case "#/posteoChat":
          containerRoot.innerHTML = "";
        containerRoot.appendChild(posteoChat());
          break;
          case "#/initchat":
          containerRoot.appendChild(initchat(params));
            break;
            case "#/buscarCorreo":
          containerRoot.appendChild(buscarCorreo());
            break;
      default:
        containerRoot.innerHTML = "<h2>La pagina que busca no existe</h2>";
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