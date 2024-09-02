const mostrar = document.getElementById('myBtn');

const mostre = document.querySelector('.links');

mostrar.addEventListener("onclick", mostrarLinks);

function mostrarLinks(){
    mostre.classList.toggle("mostrar");

    if(mostrar.classList.contains('share-active')){
        mostrar.classList.remove('share-active','share-active-img');
    } else{
        mostrar.classList.add('share-active', 'share-active-img');
    }
};
