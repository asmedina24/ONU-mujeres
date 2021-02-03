import { logIn } from './view/templateLogIn.js';
import { home } from './view/templateHome.js';
import { profile } from './view/templateProfile.js';
import { wall } from './view/templateWall.js';
// import { message } from './view/templateMessage.js'

const showtemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    //   const containerRoot2 = document.getElementById('root1');
    containerRoot.innerHTML = '';
    switch (hash) {
        case '':
            containerRoot.appendChild(home());
            break;
        case '#/home':
            containerRoot.appendChild(home());
            break;
        case '#/profile':
            containerRoot.appendChild(profile());
            break;
        case '#/logIn':
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