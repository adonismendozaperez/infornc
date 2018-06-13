document.querySelector('#btnRegistrarse');

function  inicio(){
   let input = document.querySelector(".nombre").value;
    fetch(`http://adamix.net/gastosrd/api.php?act=GetContribuyentes&rnc=${input.replace(/-/g,'')}`)
    .then((resp)=>resp.json())
    .then(mostrar)
    .catch((error)=>{
        console.log(error);
    });
}

function mostrar(data){
    let tbl = document.querySelector(".table").innerHTML = `
    <table class="highlight">
        <tbody>
            <tr>
                <td>Rnc/cedula</td>
                <td>${data.RGE_RUC}</td>
            </tr>
            <tr>
                <td>Razón Soc.</td>
                <td>${data.RGE_NOMBRE}</td>
            </tr>
            <tr>
                <td>Nombre Com.</td>
                <td>${data.NOMBRE_COMERCIAL}</td>
            </tr>
            <tr>
                <td>Estado</td>
                <td>${data.ESTATUS}</td>
            </tr>
        </tbody>
  </table>
    `;
}