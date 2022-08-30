
export function validarFechaNacimiento(input){
    let expReg = /^([0-2][0-9]|3[01])-(0[0-9]|1[0-2])-[0-2][0-9]{3}$/;
    if(expReg.test(input.value)){
        console.log("dato valido")
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}


export function validarElemento(){

    let validElemento = document.getElementById("elemento");
    if (validElemento.value != "") {
        console.log('dato valido');
        elemento.className = 'form-control is-valid';
        return true;
    }
    elemento.className = 'form-control is-invalid';
    console.log('dato no valido');
    return false;
}