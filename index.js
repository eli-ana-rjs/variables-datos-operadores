const btnSaludo = document.getElementById('btn-saludo');
const btnHeladeria =  document.getElementById('btn-heladeria');
const btnDatosPersonales = document.getElementById('btn-datos-personales');
const btnListaDeReproduccion = document.getElementById('btn-lista-de-reproduccion');
const btnDireccionCompleta = document.getElementById('btn-direccion-completa');

const saludar = (nombre, apellido) => {
    const saludo = `"Hola ${nombre} ${apellido}, bienvenida a Ada"`;
    return saludo;
}
btnSaludo.addEventListener ('click' , () => {
    const nombre = prompt("Ingrese su nombre");
    const apellido = prompt("Ingrese su apellido");

    alert(saludar(nombre, apellido));
    
});

btnHeladeria.addEventListener('click', () => {

    const gusto1 = prompt('Ingrese el primer gusto de helado: ');
    const gusto2 = prompt('Igrese el segundo gusto de helado: ');
    const gusto3 = prompt('Ingrse el tercer gusto de helado: ');

    const mensaje = `Aqué tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}`;

    return alert(mensaje);
});

btnDatosPersonales.addEventListener('click', () => {

    const nombre = prompt('Ingrese su nombre: ');
    const apellido = prompt('Ingrese su apellido: ');
    const edad = prompt('Ingrese su edad: ');
    const nacionalidad = prompt('Ingrese su nacionalidad: ');
    const dni = prompt('Ingrese su número de documento: ');

    const mensaje = `Nuevo usuario agregado al sistema
    Nombre y apellido = ${nombre} ${apellido}
    Edad = ${edad}
    Nacionalidad = ${nacionalidad}`;

    return alert(mensaje);

});

btnListaDeReproduccion.addEventListener('click', () => {

    const nombrePlaylist = prompt('Ingrese el nombre de la playlist');
    const titulo1 = prompt('Ingrese el titulo de la primer canción: ');
    const titulo2 = prompt('Ingrese el titulo de la segunda canción: ');
    const titulo3 = prompt('Ingrese el titulo de la tercer canción: ');

    const msj = `Se ha creado la playlist '${nombrePlaylist}' con las canciones:
    ${titulo1}
    ${titulo2}
    ${titulo3}
    `;

    return alert(msj);

});

btnDireccionCompleta.addEventListener('click',()=>{

    const calle = prompt('Ingrese la calle de donde vive: ');
    const numero = prompt('Ingrese el número: ');
    const departamento = prompt('Ingrese departamento: ');
    const codigoPostal = prompt('Ingrese el código postal: ');
    const ciudad = prompt('Ingrese su ciudad: ');
    const pais = prompt('Ingrese país: ');

    const msj = `La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}`;

    return alert(msj);
});

