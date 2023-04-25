import { addPost, querySnapshot, paintRealTime } from '../lib/index.js'

const wall = () => {
    const wall = document.createElement('section')
    const inputPost = document.createElement('input')
    inputPost.id = 'inPost'
    const btnSend = document.createElement('button')
    btnSend.textContent = 'Publicar'
    btnSend.id = 'btnSend'
    const postSection = document.createElement('article')
    postSection.className = 'post-section'
    wall.append(inputPost, btnSend, postSection)

    /**
     * Evento para el botón Publicar
     * Utilizo la importación de la función addPost
     */

    wall.querySelector('#btnSend').addEventListener('click', () => {
        const comment = wall.querySelector('#inPost')
        addPost(comment.value)
        comment.value = ''
    })

    /**
     * Evento para pintar los posts existentes
     * Utilizo la importación de la función paintRealTime
     */

    window.addEventListener('DOMContentLoaded', () => {
        paintRealTime((querySnapshot)=>{
            postSection.textContent = ''
            querySnapshot.forEach((doc) => {
                console.log('data: ', doc.data())
                let post = document.createElement('input')
                post.value = doc.data().comment
                postSection.appendChild(post)
            });        
        });
    })
    
     /**
     * Código sin onsnapshot
     * utilizo el import de querySnapshot
     * Se debe refrescar la página cada que se agrega un nuevo comentario
     */
    /*
    querySnapshot.then(res=>{
        res.forEach((doc) => {
            console.log(doc.data());
            console.log(`${doc.id} => ${doc.data().comment}`);
            let post = document.createElement('input')
            post.value = doc.data().comment
            postSection.append(post)
          });
    })*/

    return wall
}

export default wall;