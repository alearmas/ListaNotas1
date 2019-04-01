// Mostrar todos los objetos del JSON con sus respectivas propiedades en pantalla.

var estudiantes = [
    {
        "codigo": "0001",
        "nombre": "Luka Modric",
        "nota": 10,
    }, {
        "codigo": "0002",
        "nombre": "Cristiano Ronaldo",
        "nota": 9.5,
    }, {
        "codigo": "0003",
        "nombre": "Mohamed Salah",
        "nota": 9,
    }, {
        "codigo": "0004",
        "nombre": "Kilian Mbappe",
        "nota": 8,
    }, {
        "codigo": "0005",
        "nombre": "Lionel Messi",
        "nota": 7.5,
    }, {
        "codigo": "0006",
        "nombre": "Antoine Griezmann",
        "nota": 6,
    }, {
        "codigo": "0007",
        "nombre": "Eden Hazard",
        "nota": 5.5,
    }, {
        "codigo": "0008",
        "nombre": "Kevin De Bruyne",
        "nota": 4,
    }, {
        "codigo": "0009",
        "nombre": "Raphael Varane",
        "nota": 4,
    }, {
        "codigo": "0010",
        "nombre": "Harry Kane",
        "nota": 2,
    }
];

function leerJSON(json) {
    var out = "---------------------------- Estudiantes ----------------------------<br>";
    var i;
    for(i = 0; i < json.length; i++){
        out += "Codigo: "+json[i].codigo+" - "+"Nombre: "+json[i].nombre+" - "+"Nota: "+json[i].nota + "<br>";
    }
    document.getElementById("students").innerHTML = out;
}

function mostrarStudents() {
    leerJSON(estudiantes);
}

// Calcular la nota promedio y mostrarla en pantalla.

function calcularPromedio(json) {
    var average = 0.0;
    for (i = 0; i < json.length; i++){
        average += json[i].nota / 10;
    }
    document.getElementById("average").innerHTML = "El promedio de notas es de:" + average;
}

function promedio() {
    calcularPromedio(estudiantes);
}

// Mostrar en pantalla el estudiante con la nota mayor.

function calcularMejorNota(json){
    var nota = json[0].nota;
    var pos = 0;
    var aux = "";
        for (i = 0; i < json.length; i++) {
            if (json[i].nota >= 10) {
                    nota = json[i].nombre;
                    pos = i;
                    aux=aux+json[pos].nombre+"<br>";
            }
        }
        document.getElementById("best").innerHTML = "La mejor nota fue la de " + aux;
}

function mejorNota(){
    calcularMejorNota(estudiantes);
}
    
    // Mostrar en pantalla el estudiante con la menor nota de todas.

function calcularPeorNota(json){
    var nota = json[0].nota;
    var pos = 0;
    var aux = "";
        for (i = 0; i < json.length; i++) {
            if (json[i].nota <= 3.5) {
                    nota = json[i].nombre;
                    pos = i;
                    aux=aux+json[pos].nombre+"<br>";
            }
        }
    document.getElementById("worst").innerHTML = "La peor nota fue la de " + aux;
}

function peorNota(){
    calcularPeorNota(estudiantes);
}