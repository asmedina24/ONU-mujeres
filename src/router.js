import { logIn } from './view/templateLogIn.js';
import { home } from './view/templateHome.js';
import { profile } from './view/templateProfile.js';
import { wall } from './view/templateWall.js';
import { Comunidades } from './view/templateComunidades.js'
import { Chat } from './view/templateChat.js'
// import { message } from './view/templateMessage.js'

const showtemplate = (hash) => {
    console.log("showtemplate");
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
           
        </ul>
    </nav>
   <p class="titulo">Tu Oportunidad</p>
</header>  
    `;
    switch (hash) {
        case '':
            containerRoot.innerHTML =''; 
            containerRoot.appendChild(home());
            break;
        case '#/home':
            containerRoot.innerHTML =''; 
            containerRoot.appendChild(home());
            break;
        case '#/profile':
            containerRoot.innerHTML =''; 
            containerRoot.appendChild(profile());
            break;
        case '#/logIn':
            containerRoot.innerHTML =''; 
            containerRoot.appendChild(logIn());
            break;
        case '#/wall':
          
            containerRoot.appendChild(wall());
            break;
        case '#/message':
            containerRoot.appendChild(message());
            break;
        default:
            containerRoot.innerHTML = '<h2>La pagina que busca no existe</h2>';
    }
};

export const changeroute = (hash) => {
    console.log("changeroute", hash);
    if (hash === '') {
        return showtemplate(hash);
    } if (hash === '#/home') {
        return showtemplate(hash);
    } if (hash === '#/profile') {
        return showtemplate(hash);
    } if (hash === '#/wall') {
        return showtemplate(hash);
    } if (hash === '#/message') {
        return showtemplate(hash);
    } if (hash === '#/logIn') {
        return showtemplate(hash);
    }
    return showtemplate(hash);
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