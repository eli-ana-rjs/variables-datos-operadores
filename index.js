const btnSaludo = document.getElementById('btn-saludo');
const btnHeladeria =  document.getElementById('btn-heladeria');
const btnDatosPersonales = document.getElementById('btn-datos-personales')

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

