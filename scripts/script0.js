// Script Inicial ( vacio por ahora )

/*CATEGORIAS DE PELICULAS*/
const pelisCate = [
    {
        id: 1,
        img: "./imagenes/imagenesCate/drama/1.jpg",
        categoria: "2DD"
    },
    {
        id: 2,
        img: "./imagenes/imagenesCate/drama/2.jpg",
        categoria: "2DD"
    },
    {
        id: 3,
        img: "./imagenes/imagenesCate/drama/3.jpg",
        categoria: "2DD"
    },
    {
        id: 4,
        img: "./imagenes/imagenesCate/drama/4.jpg",
        categoria: "2DD"
    },
    {
        id: 5,
        img: "./imagenes/imagenesCate/suspenso/1.jpg",
        categoria: "2DS"
    },
    {
        id: 6,
        img: "./imagenes/imagenesCate/suspenso/2.jpg",
        categoria: "2DS"
    },
    {
        id: 7,
        img: "./imagenes/imagenesCate/suspenso/3.jpg",
        categoria: "2DS"
    },
    {
        id: 8,
        img: "./imagenes/imagenesCate/suspenso/4.jpg",
        categoria: "2DS"
    },
    {
        id: 9,
        img: "./imagenes/imagenesCate/comedia/1.jpg",
        categoria: "2DC"
    },
    {
        id: 10,
        img: "./imagenes/imagenesCate/comedia/2.jpg",
        categoria: "2DC"
    },
    {
        id: 11,
        img: "./imagenes/imagenesCate/comedia/3.jpg",
        categoria: "2DC"
    },
    {
        id: 12,
        img: "./imagenes/imagenesCate/infantiles/1.jpg",
        categoria: "2DI"
    },
    {
        id: 13,
        img: "./imagenes/imagenesCate/infantiles/2.jpg",
        categoria: "2DI"
    },
    {
        id: 14,
        img: "./imagenes/imagenesCate/infantiles/3.jpg",
        categoria: "2DI"
    },
    {
        id: 15,
        img: "./imagenes/imagenesCate/infantiles/4.jpg",
        categoria: "2DI"
    },
    {
        id: 16,
        img: "./imagenes/imagenesCate/infantiles/5.jpg",
        categoria: "2DI"
    }

];

const pelisCate3D = [
{
    id: 1,
    img: "./imagenes/imagenesCate/drama/50.jpg",
    categoria: "3DI"
},
{
    id: 2,
    img: "./imagenes/imagenesCate/suspenso/50.jpg",
    categoria: "3DI"
},
{
    id: 3,
    img: "./imagenes/imagenesCate/suspenso/51.jpg",
    categoria: "3DI"
},
{
    id: 4,
    img: "./imagenes/imagenesCate/infantiles/50.jpg",
    categoria: "3DI"
},
{
    id: 5,
    img: "./imagenes/imagenesCate/infantiles/51.jpg",
    categoria: "3DI"
}
];


function eliminar() {
    document.getElementById('pelis2D').innerHTML = '';
}


let seleccion = "";
let opciones = document.querySelectorAll('input[type="radio"]');


function ocultarDiv(){
    document.getElementById("inicial").style.display = "none";
    document.getElementById("todos").style.display = "none"; 

}

function mostrarDiv(){
    document.getElementById("inicial").style.display = "inline";
    document.getElementById('2D').innerHTML = '';
    document.getElementById('pelis3D').innerHTML = '';

}


document.querySelector('#option').addEventListener('change', () => {
    opciones.forEach(opcion => {
        if (opcion.checked) {
            eliminar();
            let categoriasFinales = [];
            categoriasFinales.splice(0, categoriasFinales.length)
            //console.log("Cant. elementos array " + categoriasFinales.length);

            seleccion = opcion.value;
            categoriasFinales = pelisCate.filter(pelisCate => pelisCate.categoria == seleccion);
            //console.log(categoriasFinales);

            const generarCards = (categoriasFinales) => {
                let cards = document.getElementById("pelis2D");
                categoriasFinales.forEach(categoriasFinales => {
                    let cardProductos = document.createElement("div");
                    cardProductos.className = "card w-25 m-1";
                    let card = `
                        <img class="card-img-top" src="${categoriasFinales.img}" alt="Card image cap" style="height: 30vh;>
                        <div class="card-body">
                            <a class="btn btn-primary" id="cart${categoriasFinales.id}">Comprar Entrada</a>
                        </div>
                    `;
                    cardProductos.innerHTML = card;
                    //cardProductos.style.width = "35vh";
                    cards.appendChild(cardProductos);
                });
            }
            generarCards(categoriasFinales);
        }
    })
})



const generarCards3D = (pelisCate3D) => {
    let cards3D = document.getElementById("pelis3D");
    pelisCate3D.forEach(pelisCate3D => {
        let cardCate = document.createElement("div");
        cardCate.className = "card w-25 m-1";
        let card3D = `
            <img class="card-img-top" src="${pelisCate3D.img}" alt="Card image cap" style="height: 30vh;>
            <div class="card-body">
                <a class="btn btn-primary" id="cart${pelisCate3D.id}">Comprar Entrada</a>
            </div>
        `;
        cardCate.innerHTML = card3D;
        //cardCate.style.width = "35vh";
        cards3D.appendChild(cardCate);
    });
}
generarCards3D(pelisCate3D);

/*FIN CATEGORIAS DE PELICULAS*/
