// document.getElementById('contenido')
// let mostrar = ()=>{
//     document.getElementById('contenido').innerHTML = '<em>Agregamos contenido </em>';
// }
// document.getElementById('boton').onclick = mostrar;

let textoInput = document.getElementById('textoInput')
let botonInput = document.getElementById('botonInput')
let resultadoInput = document.getElementById('resultadoInput')

function mostrarInput(){
    let resultado = document.getElementById('resultadoInput')
    resultado.innerHTML = `<p> El texto que ingresaste es ${textoInput.value}.</p>`
    
}
document.getElementById('botonInput').onclick = mostrarInput

