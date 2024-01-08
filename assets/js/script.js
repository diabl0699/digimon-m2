



function getDigimones(){
let url = "https://digimon-api.vercel.app/api/digimon";
fetch(url)
.then(response => response.json())
.then(data => { 
  
    cargartabla(data);
    
    })
}


function cargartabla(digimones){
    let filas = "";
    digimones.forEach((digimon, index) => {
    filas+= `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${digimon.name}</td>
            <td><img src="${digimon.img}" alt="${digimon.name}"/></td>
            <td>${digimon.level}</td>
            <td>
                <a href="detallesdigimones.html?nombredigimon=${digimon.name}" class="btn btn-info"
                data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-title="Ver detalles de ${digimon.name}">
                >Detalles</a>
            </td>
         </tr>
    
    `

    });


    document.getElementById("cuerpotabla").innerHTML = filas;
    tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    

}




function main(){
    getDigimones()
}
main();







