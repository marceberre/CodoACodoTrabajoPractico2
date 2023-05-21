let cantidad = document.getElementById('cantidad');
let categoria = document.getElementById('categoria');
const resumen = document.querySelector('#btn-resumen');
const borrar = document.querySelector('#btn-borrar');

resumen.addEventListener("click",()=>{
    document.getElementById('costo').innerText= 200*cantidad.value*categoria.value;
});

borrar.addEventListener("click",()=>{
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = ".8";
});