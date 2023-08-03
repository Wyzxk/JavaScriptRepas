// PRIMERO
function multiplicar(){
    n1= parseInt(prompt("Dime un número"))
    n2= parseInt(prompt("Dime otro número"))
    return n1 * n2
}
var
resultado =  multiplicar()
document.write(resultado)
// SEGUNDO
 let 
nombre = prompt("INGRESE SU NOMBRE");

nota = parseFloat(prompt("INGRESE SU NOTA"))

if (nota >= 4.5){
    alert(`${nombre} Usted ha aprobado el curso en ${nota} que es superior`)
}
else if(nota >= 4){
    alert(`${nombre} Usted ha aprobado el curso en ${nota} que es alto`)
} 
else if(nota >=3.5){
    alert(`${nombre} Usted ha aprobado el curso en ${nota} que es bajo`)
}
else{
    alert(`${nombre} Usted ha desaprobado el ${nota} curso`)
}

// TERCERO
n1 = parseInt(prompt("Dime un número"));
n2 = parseInt(prompt("Dime otro número"));

if (n1 > n2){
    document.write(`el número mayor es ${n1}`)
}
else if(n2 > n1){
    document.write(`el número mayor es ${n2}`)
}
else if(n1 == n2){
    document.write("Los números son iguales")
}
else{
    document.write("Error")
}
// CUARTO
n1 = parseInt(prompt("Nota 1"))
n2 = parseInt(prompt("Nota 2"))
n3 = parseInt(prompt("Nota 3"))

resultado = (n1+n2+n3) / 3

console.log(resultado)

if(resultado >= 7){
    document.write("Ha aprobado el curso")
}
else if (resultado >=5){
    document.write ("Usted ha aprobado el curso, pero necesita estudiar más")
}else{
    document.write("Usted ha desaprobado el curso, tiene que ir a plan de mejoramiento")
}
// QUINTO    
let
dia = parseInt(prompt("Ingrese el dia"))
mes = parseInt(prompt("Ingrese el mes"))
año = parseInt(prompt("Ingrese el año"))

if (mes <= 03 ){
    document.write("Corresponde al primer trimestre")
    if (mes == 0){
        alert("Error")
    }
}
else if (mes <= 06){
    document.write("Corresponde al segundo trimestre")
}
else if (mes <= 09){
    document.write("Corresponde al tercer trimestre")
}
else if (mes <= 12){
    document.write("Corresponde al segundo trimestre")
}
else{
    alert("error")  
}
// SEXTA
let 
trimestre = parseInt(prompt("Digite el trimestre actualmente cursado"))
console.log(trimestre)

switch(trimestre){
    case 1: document.write("Estás cursando el primer trimestre")
    break;
    case 2: document.write("Estás cursando el segundo trimestre")
    break;
    case 3: document.write("Estás cursando el tercero trimestre")
    break;
    case 4: document.write("Estás cursando el pcuarto trimestre")

    default: alert("Recuerda que solo existen 4 trimestres en el año, digite del 1 al 4")
}
// SEPTIMA

let 
semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"]
r = semana.length
console.log(r)
i = 0;

while (i <=semana.length -1){
    document.write(semana[i] + `<br>`)
    i++
}