function detalleProduct(nombre, srcImage){
    //imgPortada
    document.getElementById("imgDetalle").src = srcImage;
    document.getElementById("pDetalle").innerHTML = nombre;
    document.getElementById("pnProductDetail").style.visibility = '';

}