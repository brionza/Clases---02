class CAutors{
    constructor(){
        this.autorsArray = [];
    }

    addAutors(name, lastName, nationality, bestBook, yearOf, ageOf){
        this.autorsArray.push({name, lastName, nationality, bestBook, yearOf, ageOf});
    }

    createTable(){
        const table = document.querySelector('#autorsTable tbody');
        table.innerHTML = '';

        this.autorsArray.forEach(autor => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${autor.name}</td>
            <td>${autor.lastName}</td>
            <td>${autor.nationality}</td>
            <td>${autor.bestBook}</td>
            <td>${autor.yearOf}</td>
            <td>${autor.ageOf}</td>            
            `;
            table.appendChild(row);
        });
    }

    argeAutors(){
        let argeArray = [];
        for(const autor of this.autorsArray){
            if(autor.nationality === "Argentino"){
                argeArray.push(" " + autor.name + " " + autor.lastName);
            }
        }
        document.write("Los autores de nacionalidad argentina son: " + argeArray + "<br>");
    }

    publishedAutors(){
        let pubAut = [];
        for(const autor of this.autorsArray){
            if(autor.yearOf >= 1960 && autor.yearOf <= 1980){
                pubAut.push(" " + autor.name + " " + autor.lastName);
            }
        }
        document.write("Los autores que publicaron sus libros entre 1960 y 1980 son: " + pubAut + "<br>");
    }

    promAutors(){
        let prom = 0;
        for(const autor of this.autorsArray){
            prom += autor.ageOf;
        }
        
        prom /= 8; //HORRIBLE. TERRIBLE ELECCIÓN. MUY MALA.
        document.write("El promedio de edad es de: " + parseInt(prom));
        
    }
}




const autors = new CAutors();

autors.addAutors("Gabriel", "García Marquez", "Colombiano", "Cien Años de Soledad", 1967, 40);
autors.addAutors("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48);
autors.addAutors("Isabel", "Allende", "Chilena", "La Casa de los Espiritus", 1982, 40);
autors.addAutors("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45);
autors.addAutors("Clarice", "Lispector", "Brasileña", "La Hora de la Estrella", 1977, 56);
autors.addAutors("Juan", "Rulfo", "Mexicano", "Pedro Páramo", 1955, 38);
autors.addAutors("Carlos", "Fuentes", "Mexicano", "La Región Más Transparente", 1958, 29);
autors.addAutors("Eduardo", "Galeano", "Uruguayo", "Las Venas Abiertas de América Larina", 1971, 31);


autors.createTable();
autors.argeAutors();
autors.publishedAutors();
autors.promAutors();
// document.getElementById("argeAutors").textContent = "Autores Argentinos: " + document.write(autors.argeAutors());