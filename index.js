const btnSaludo = document.getElementById('btnSaludo');
const btnHeladeria = document.getElementById('btnHeladeria');


// Ejercicio saludo

const saludar = (nombre, apellido) => {
    const saludo = `"Hola ${nombre} ${apellido}, bienvenida a Ada"`;
    return saludo;
}

btnSaludo.addEventListener ('click' , () => {
    const nombre = prompt("Ingrese su nombre");
    const apellido = prompt("Ingrese su apellido");

    alert(saludar(nombre, apellido));
    
});

// Ejercicio heladeria

btnHeladeria.addEventListener( 'click' , () => {

    const gusto1 = prompt('Elija el primer gusto de helado: ');
    const gusto2 = prompt('Elija el segundo gusto de helado: ');
    const gusto3= prompt('Elija el tercer gusto de helado: ');

    const mensaje = `Aquí tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}`;

    return alert(mensaje);

});
