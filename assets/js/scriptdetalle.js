 const nombredigimonspan = document.getElementById("nombredigimonspan");



 function getDigimones(nombre){
    let url = "https://www.digi-api.com/api/v1/digimon/"+nombre;
    fetch(url)
    .then(response => response.json())
    .then(data => { 
      
        console.log(data);

        if(data.message == "Digimon not found"){ 
                alert("Digimon no Encontrado")
        }else{

            document.getElementById("idDigimon").innerText = data.id;
            document.getElementById("imgdigimon").src = data.images[0].href;  
            document.getElementById("Leveldigimon").innerText = data.id;
            document.getElementById("Atrivute").innerText = data.id;
        
    }
        

        
        })
    }
 


    function main (){
        let urlpagina = new URL(location.href)
        let parametros = new URLSearchParams(urlpagina.search)

        let nombredigimon = parametros.get("nombredigimon")


        nombredigimonspan.innerText = nombredigimon;
            getDigimones(nombredigimon)

}
main();

