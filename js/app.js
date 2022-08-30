
//------------------------------    ARTICULO    BUSCA TU SIGNO -------------------------------- 


let valFecha = document.getElementById("fecha");
let valElemento = document.getElementById("elemento");
valFecha.addEventListener('blur',()=>{validarFechaNacimiento(valFecha)});
valElemento.addEventListener('blur',()=>{validarElemento(valElemento)});

let formularioFecha = document.getElementById("formNacimiento");
let formularioElemento = document.getElementById("formElemento");
let descripcionSigno = document.querySelector("#descripcionSigno");
let imagenSigno = document.querySelector("#imagenSigno");


formularioFecha.addEventListener("submit", fechaZodiaco);
formularioElemento.addEventListener("submit", elementoZodiaco);

// MECANICAS FECHA DE NACIMIENTO

function fechaZodiaco(e) {
  e.preventDefault();
  console.log("arranca la función fecha zodíaco");
  let fechaNacimiento = JSON.stringify(document.getElementById("fecha").value);
  console.log(fechaNacimiento);
  let diaSigno = parseInt(fechaNacimiento.substring(1));
  let mesSigno = parseInt(fechaNacimiento.substring(4));
  let signoZodiaco = "";
  console.log(diaSigno);
  console.log(mesSigno);

  if (mesSigno == 12) {
    if (diaSigno < 22) {
      signoZodiaco = "Sagitario";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/sagittarius-zodiac-sign-abstract-night-sky-background-picture-id858080490?k=20&m=858080490&s=612x612&w=0&h=cgS2K1W4_4bQbZnoPvNGx7wDCl6nV1iFPYk1gcYk5MA="
      );
    } else {
      signoZodiaco = "Capricornio";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/capricorn-zodiac-sign-abstract-night-sky-background-picture-id858075242?k=20&m=858075242&s=612x612&w=0&h=I-KdFsOewM5S71mf56bAg3DECM5MU1vekV35QdpSBC4="
      );
    }
  } else if (mesSigno == 1) {
    if (diaSigno < 20) {
      signoZodiaco = "Capricornio";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/capricorn-zodiac-sign-abstract-night-sky-background-picture-id858075242?k=20&m=858075242&s=612x612&w=0&h=I-KdFsOewM5S71mf56bAg3DECM5MU1vekV35QdpSBC4="
      );
    } else {
      signoZodiaco = "Acuario";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/aquarius-zodiac-sign-abstract-night-sky-background-picture-id858083214?k=20&m=858083214&s=612x612&w=0&h=OYJTo7ClybSnAlEOatKZ1aVR1Tc9eMvtUDX3pg-1Vuc="
      );
    }
  } else if (mesSigno == 2) {
    if (diaSigno < 19) {
      signoZodiaco = "Aquario";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/aquarius-zodiac-sign-abstract-night-sky-background-picture-id858083214?k=20&m=858083214&s=612x612&w=0&h=OYJTo7ClybSnAlEOatKZ1aVR1Tc9eMvtUDX3pg-1Vuc="
      );
    } else {
      signoZodiaco = "Piscis";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/capricorn-zodiac-sign-abstract-night-sky-background-picture-id858075242?k=20&m=858075242&s=612x612&w=0&h=I-KdFsOewM5S71mf56bAg3DECM5MU1vekV35QdpSBC4="
      );
    }
  } else if (mesSigno == 3) {
    if (diaSigno < 21) {
      signoZodiaco = "Piscis";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/capricorn-zodiac-sign-abstract-night-sky-background-picture-id858075242?k=20&m=858075242&s=612x612&w=0&h=I-KdFsOewM5S71mf56bAg3DECM5MU1vekV35QdpSBC4="
      );
    } else {
      signoZodiaco = "Aries";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/aries-zodiac-sign-abstract-night-sky-background-picture-id858076434?k=20&m=858076434&s=612x612&w=0&h=A7qWoT9Ponv90esP6JkthFWn6t1RkvOv7pPS8MfgCkc="
      );
    }
  } else if (mesSigno == 4) {
    if (diaSigno < 20) {
      signoZodiaco = "Aries";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/aries-zodiac-sign-abstract-night-sky-background-picture-id858076434?k=20&m=858076434&s=612x612&w=0&h=A7qWoT9Ponv90esP6JkthFWn6t1RkvOv7pPS8MfgCkc="
      );
    } else {
      signoZodiaco = "Tauro";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/taurus-zodiac-sign-abstract-night-sky-background-picture-id858071852?k=20&m=858071852&s=612x612&w=0&h=r1clt8qkGxOGJPp5cTXCfSkJevcLD6nqTSgVGgy15Dk="
      );
    }
  } else if (mesSigno == 5) {
    if (diaSigno < 21) {
      signoZodiaco = "Tauro";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/taurus-zodiac-sign-abstract-night-sky-background-picture-id858071852?k=20&m=858071852&s=612x612&w=0&h=r1clt8qkGxOGJPp5cTXCfSkJevcLD6nqTSgVGgy15Dk="
      );
    } else {
      signoZodiaco = "Géminis";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/gemini-zodiac-sign-abstract-night-sky-background-picture-id858072316?k=20&m=858072316&s=612x612&w=0&h=Gp7WcUIh24x7SuseE3p8l0jj5qNcgEY2WIusUtoZuW0="
      );
    }
  } else if (mesSigno == 6) {
    if (diaSigno < 21) {
      signoZodiaco = "Géminis";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/gemini-zodiac-sign-abstract-night-sky-background-picture-id858072316?k=20&m=858072316&s=612x612&w=0&h=Gp7WcUIh24x7SuseE3p8l0jj5qNcgEY2WIusUtoZuW0="
      );
    } else {
      signoZodiaco = "Cáncer";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/cancer-zodiac-sign-abstract-night-sky-background-picture-id858078918?k=20&m=858078918&s=612x612&w=0&h=nV5GPtd6IsFVZerpYKbYpcKR_F2w-GfatXMI1b-_DG8="
      );
    }
  } else if (mesSigno == 7) {
    if (diaSigno < 23) {
      signoZodiaco = "Cáncer";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/cancer-zodiac-sign-abstract-night-sky-background-picture-id858078918?k=20&m=858078918&s=612x612&w=0&h=nV5GPtd6IsFVZerpYKbYpcKR_F2w-GfatXMI1b-_DG8="
      );
    } else {
      signoZodiaco = "Leo";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/leo-zodiac-sign-abstract-night-sky-background-picture-id858075636?k=20&m=858075636&s=612x612&w=0&h=TIlIkKMsj3Ehm_nMicseT6wg8yMbqEK7PDQ16fj3ekg="
      );
    }
  } else if (mesSigno == 8) {
    if (diaSigno < 23) {
      signoZodiaco = "Leo";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/leo-zodiac-sign-abstract-night-sky-background-picture-id858075636?k=20&m=858075636&s=612x612&w=0&h=TIlIkKMsj3Ehm_nMicseT6wg8yMbqEK7PDQ16fj3ekg="
      );
    } else {
      signoZodiaco = "Virgo";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/virgo-zodiac-sign-abstract-night-sky-background-picture-id858072842?k=20&m=858072842&s=612x612&w=0&h=_QCr5qBPS4EihfkxxUDh1d3K19JIdamH0onPbqyjrh0="
      );
    }
  } else if (mesSigno == 9) {
    if (diaSigno < 23) {
      signoZodiaco = "Virgo";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/virgo-zodiac-sign-abstract-night-sky-background-picture-id858072842?k=20&m=858072842&s=612x612&w=0&h=_QCr5qBPS4EihfkxxUDh1d3K19JIdamH0onPbqyjrh0="
      );
    } else {
      signoZodiaco = "Libra";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/libra-zodiac-sign-abstract-night-sky-background-picture-id858082952?k=20&m=858082952&s=612x612&w=0&h=MXDp8TsIc4OVeQvyFHlFpSON81vI7mbNICa7ocX32lI="
      );
    }
  } else if (mesSigno == 10) {
    if (diaSigno < 23) {
      signoZodiaco = "Libra";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/libra-zodiac-sign-abstract-night-sky-background-picture-id858082952?k=20&m=858082952&s=612x612&w=0&h=MXDp8TsIc4OVeQvyFHlFpSON81vI7mbNICa7ocX32lI="
      );
    } else {
      signoZodiaco = "Escorpio";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/scorpio-zodiac-sign-abstract-night-sky-background-picture-id858080114?k=20&m=858080114&s=612x612&w=0&h=-5HmmzHiTTU--FQu-lPjiBW4DxZIjHJlyOuHXXUflpQ="
      );
    }
  } else if (mesSigno == 11) {
    if (diaSigno < 22) {
      signoZodiaco = "Escorpio";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/scorpio-zodiac-sign-abstract-night-sky-background-picture-id858080114?k=20&m=858080114&s=612x612&w=0&h=-5HmmzHiTTU--FQu-lPjiBW4DxZIjHJlyOuHXXUflpQ="
      );
    } else {
      signoZodiaco = "Sagitario";
      imagenSigno.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg"
      );
      imagenSigno.setAttribute(
        "src",
        "https://media.istockphoto.com/photos/sagittarius-zodiac-sign-abstract-night-sky-background-picture-id858080490?k=20&m=858080490&s=612x612&w=0&h=cgS2K1W4_4bQbZnoPvNGx7wDCl6nV1iFPYk1gcYk5MA="
      );
    }
  }
  console.log(signoZodiaco);

  descripcionSigno.innerHTML = `Tu signo es <b> ${signoZodiaco} </b>`;
  descripcionSigno.setAttribute("class", "display-6")


}


// MECANICAS ELECCIÓN ELEMENTO

function elementoZodiaco (e){
    e.preventDefault();
    console.log("arranca la función elemento zodíaco");
    
    
    let eleZodiaco = JSON.stringify(document.getElementById("elemento").value);      
    let elementoImagen = document.querySelector("#elementoImagen");
    let elementoSigno = document.querySelector("#elementoSigno");
    let elementoNaturaleza = document.querySelector("#elementoNaturaleza");

    console.log(eleZodiaco);
    if (eleZodiaco == '"F"'){
        console.log("Se eligió Fuego")
        elementoImagen.removeChild(elementoImagen.firstElementChild);
        let nuevoElementoImagen = document.createElement("img")
        elementoImagen.appendChild(nuevoElementoImagen);
        nuevoElementoImagen.setAttribute("src", "https://cdn.shopify.com/s/files/1/0039/7849/4067/products/BM-0001-2477_600x.jpg?v=1613197607")
        nuevoElementoImagen.setAttribute("class", "w-50")
       
        elementoSigno.removeChild(elementoSigno.firstElementChild);
        let nuevoElementoSigno = document.createElement("img")
        elementoSigno.appendChild(nuevoElementoSigno);
        nuevoElementoSigno.setAttribute("src", "https://www.ayudamistica.com/blog/wp-content/uploads/cuales-son-los-signos-de-fuego.jpg")
        nuevoElementoSigno.setAttribute("class", "img-fluid mb-2")

        elementoNaturaleza.innerHTML = `Los signos de fuego son los más <b>temperamentales, apasionados e intensos del horóscopo</b>, con lo bueno y lo malo que esto implica. Tiene gran potencial para concretar sus metas y no temen enfrentar cualquier tipo de dificultad para conseguir exactamente lo que quieren.`
        
    }
    if (eleZodiaco == '"T"'){
        console.log("Se eligió Tierra")
        elementoImagen.removeChild(elementoImagen.firstElementChild);
        let nuevoElementoImagen = document.createElement("img")
        elementoImagen.appendChild(nuevoElementoImagen);
        nuevoElementoImagen.setAttribute("src", "https://cdn.shopify.com/s/files/1/0039/7849/4067/products/BM-0001-2507_600x.jpg?v=1613197764")
        nuevoElementoImagen.setAttribute("class", "w-50")

        elementoSigno.removeChild(elementoSigno.firstElementChild);
        let nuevoElementoSigno = document.createElement("img")
        elementoSigno.appendChild(nuevoElementoSigno);
        nuevoElementoSigno.setAttribute("src", "https://www.ayudamistica.com/blog/wp-content/uploads/cuales-son-los-signos-de-tierra.jpg")
        nuevoElementoSigno.setAttribute("class", "img-fluid mb-2")
       
        elementoNaturaleza.innerHTML = `Los signos de tierra son <b> pasivos y fríos, y se caracterizan por ser los más resistentes de todos </b>. Gozan de un temperamento tranquilo y carácter un tanto introvertido. Suelen ser trabajadores, perseverantes y esforzarse al máximo en todo lo que hacen.`

    }
    if (eleZodiaco == '"A"'){
        console.log("Se eligió Aire")
        elementoImagen.removeChild(elementoImagen.firstElementChild);
        let nuevoElementoImagen = document.createElement("img")
        elementoImagen.appendChild(nuevoElementoImagen);
        nuevoElementoImagen.setAttribute("src", "https://cdn.shopify.com/s/files/1/0039/7849/4067/products/BM-0001-2448_600x.jpg?v=1613197464")
        nuevoElementoImagen.setAttribute("class", "w-50",)

        elementoSigno.removeChild(elementoSigno.firstElementChild);
        let nuevoElementoSigno = document.createElement("img")
        elementoSigno.appendChild(nuevoElementoSigno);
        nuevoElementoSigno.setAttribute("src", "https://www.ayudamistica.com/blog/wp-content/uploads/cuales-son-los-signos-de-aire.jpg")
        nuevoElementoSigno.setAttribute("class", "img-fluid mb-2")
    
        elementoNaturaleza.innerHTML = `Los signos del zodiaco de aire se caracterizan por su <b> pasión por razonar y debatir, así como también resultan muy analíticos </b>. No podrás cuestionar nada a un Géminis, Libra o Acuario, ya que seguro que ellos antes le han dado millones de vuelta.`
    
    }
    if (eleZodiaco == '"G"'){
        console.log("Se eligió Agua")
        elementoImagen.removeChild(elementoImagen.firstElementChild);
        let nuevoElementoImagen = document.createElement("img")
        elementoImagen.appendChild(nuevoElementoImagen);
        nuevoElementoImagen.setAttribute("src", "https://cdn.shopify.com/s/files/1/0039/7849/4067/products/BM-0001-2459_600x.jpg?v=1613197520")
        nuevoElementoImagen.setAttribute("class", "w-50")

        elementoSigno.removeChild(elementoSigno.firstElementChild);
        let nuevoElementoSigno = document.createElement("img")
        elementoSigno.appendChild(nuevoElementoSigno);
        nuevoElementoSigno.setAttribute("src", "https://www.ayudamistica.com/blog/wp-content/uploads/cuales-son-los-signos-de-agua.jpg")
        nuevoElementoSigno.setAttribute("class", "img-fluid mb-2")
    
        elementoNaturaleza.innerHTML = `Los signos de agua son <b> puros, nobles y cristalinos </b>. Nunca ocultan lo que piensan o sienten y siempre reflejan y expresan sus verdaderas emociones. Es una de las mejores cosas de un Cáncer, un Escorpio o un Piscis: son fáciles de leer y nunca, pero nunca, te engañarán ni te serán infieles. Se les nota todo en la cara.`
    
    }

}