import wall from './templates/wall'

const init = () => {
    document.getElementById('mainContainer').append(wall());
}

window.onload = init();

