const saludo = document.getElementById('saludo');

const saludar = (nombre, apellido) => {
    const saludo = `"Hola ${nombre} ${apellido}, bienvenida a Ada"`;
    return saludo;
}
saludo.addEventListener ('click' , () => {
    const nombre = prompt("Ingrese su nombre");
    const apellido = prompt("Ingrese su apellido");

    alert(saludar(nombre, apellido));
    
});