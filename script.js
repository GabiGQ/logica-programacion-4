function fibonacci(){
    let num= parseInt(prompt("Ingrese un número mayor a 0: ")); 
    if (!isNaN(num)&& num > 0) { 
        var serie=[];
        for (let i=0;i<num; i++){
            if (i<=1){
            serie.push(i);
        } else {
            serie.push(serie[i-1]+ serie[i-2]);
        }
    }
        return serie;
    } else {
        alert("Error: Ingrese un número mayor a 0");
    }

}
console.log(fibonacci());