function enviar(nombre, precio){
    const url = new URL("pagina2.html", window.location.href);
    url.searchParams.set("nombre", nombre);
    url.searchParams.set("precio", precio);
    window.location.href = url.toString();
}