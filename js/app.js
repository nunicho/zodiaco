import {validarFechaNacimiento, validarElemento } from './helpers.js';


//------------------------------    ARTICULO    GUÍA ASTROLÓGICA -------------------------------- 

let botonCapricornio = document.getElementById("botonCapricornio")
botonCapricornio.addEventListener("click", capricornio);
let botonAcuario = document.getElementById("botonAcuario")
botonAcuario.addEventListener("click", acuario);
let botonPiscis = document.getElementById("botonPiscis")
botonPiscis.addEventListener("click", piscis);
let botonAries = document.getElementById("botonAries")
botonAries.addEventListener("click", aries);
let botonTauro = document.getElementById("botonTauro")
botonTauro.addEventListener("click", tauro);
let botonGeminis = document.getElementById("botonGeminis")
botonGeminis.addEventListener("click", geminis);
let botonCancer = document.getElementById("botonCancer")
botonCancer.addEventListener("click", cancer);
let botonLeo = document.getElementById("botonLeo")
botonLeo.addEventListener("click", leo);
let botonVirgo = document.getElementById("botonVirgo")
botonVirgo.addEventListener("click", virgo);
let botonLibra = document.getElementById("botonLibra")
botonLibra.addEventListener("click", libra);
let botonEscorpio = document.getElementById("botonEscorpio")
botonEscorpio.addEventListener("click", escorpio);
let botonSagitario = document.getElementById("botonSagitario")
botonSagitario.addEventListener("click", sagitario);




function capricornio (e){
    e.preventDefault();
   let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Capricornio (♑︎, del latín Căprĭcornus, literalmente 'cuernos de cabra' o 'dotado con cuernos de cabra') es el décimo signo del zodíaco, el quinto de naturaleza negativa (femenina) y de cualidad cardinal. Simboliza la sabiduría y las aguas por el dios primordial de los sumerios: Enki; su símbolo representa la montaña, pertenece junto a Tauro y Virgo al elemento tierra. Su signo opuesto es Cáncer.
   El símbolo astrológico presenta un animal híbrido: una cabra con cola de pez, asociación realizada por Germánico en el siglo I d. C. La cola de pez simboliza las aguas nutritivas donde nace el ser para elevarse al grado más alto de espiritualidad. Representa el Unicornio con su único cuerno protuberante sobre el testus, semejante a una lanza.
      Se considera que alguien es del signo Capricornio cuando nace entre el 22 de diciembre y el 20 de enero (Tropical). Es también uno de los cuatro signos cardinales, siendo los tres restantes Aries, Cáncer y Libra.`
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-capricornio-brillo-dorado-fondo-astrologia-horoscopo-capricornio-sobre-fondo-oscuro_559531-11086.jpg?w=740&t=st=1661697314~exp=1661697914~hmac=0c86ebde3420b3c0596c83f70961b92f675554ef4b6db7cae85d7f7469e4c76a")
     

}

function acuario (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Acuario (♒︎, del latín aquārius, literalmente 'el portador de agua' o 'aguador') es el undécimo signo del zodiaco, el sexto de naturaleza positiva y el cuarto de cualidad fija —junto con Tauro, Leo y Escorpio—.Simboliza la revolución y su símbolo representa la sabiduría al ser. El signo está representado por el aguador o portador del agua ya que en la antigua sumeria este era un símbolo de difundir la sabiduría (el agua); pertenece junto a Géminis y Libra al elemento aire. Su signo opuesto y complementario es Leo.
   Acuario fue tradicionalmente gobernado por el planeta Saturno, sin embargo, desde el descubrimiento del planeta Urano, este se ha considerado su regente. Al ser el undécimo signo del zodiaco, Acuario se asocia con la 11.ª casa astrológica. En la zodiaco occidental o tropical, se considera que alguien es del signo de Acuario cuando nace alrededor del 21 de enero hasta alrededor del 19 de febrero de cada año, en función al huso horario del lugar de nacimiento y el inicio del año astrológico.`
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-acuario-brillo-dorado-fondo-astrologia-horoscopo-acuario-sobre-fondo-oscuro_559531-12100.jpg?size=626&ext=jpg&uid=R73275245&ga=GA1.2.672237706.1655077090")
     

    
}

function piscis (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Piscis (♓︎ del latín piscēs, literalmente 'los peces') es el duodécimo y último signo del zodíaco, el sexto de naturaleza negativa (femenina) y de cualidad mutable.
   Simboliza la disolución y su símbolo representa dos peces nadando en sentidos opuestos. Pertenece, junto a Cáncer y Escorpio al elemento agua. Está regido por Neptuno y Júpiter. Su signo opuesto y compatible es Virgo. Junto a Virgo, Géminis y Sagitario, forma parte del grupo de los signos dobles o mutables. r, la actividad solar de esta casa afectará a los nacidos entre el 19 de febrero y el 20 de marzo, o también del 20 de febrero al 20 de marzo.`
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-piscis-brillo-dorado-fondo-astrologia-horoscopo-piscis-sobre-fondo-oscuro_559531-11090.jpg?w=740&t=st=1661697644~exp=1661698244~hmac=5e9f0a2638699fefa3d3418e4a5487af7c671d074bf96b0f6f6b6b4d9c42432f")
     

    
}

function aries (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Aries (♈︎) es el primer signo del zodíaco, el primero de naturaleza positiva / Masculina y de cualidad cardinal. Pertenece junto a Leo y Sagitario al elemento fuego. Está regido por el planeta Marte. Su signo opuesto y complementario es Libra.
   El signo se asocia al carnero, a la constelación de Aries (por lo menos desde el siglo I a. C.) y al mito griego de Jasón y los argonautas. En este mito, Frixo y Hele fueron rescatados por un carnero y luego el animal es sacrificado en honor al dios Ares. Finalmente, Zeus en agradecimiento coloca al carnero en el cielo. 
   Se considera que alguien es del signo Aries cuando nación entre el 21 de marzo - 20 de abril.`
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-aries-brillo-dorado-fondo-astrologia-horoscopo-aries-sobre-fondo-oscuro_559531-12102.jpg?w=740&t=st=1661697306~exp=1661697906~hmac=b73e70a0856cc5714c39193061f8169d69c72662631dbae228947de1cd09b772")
     

    
}

function tauro (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Tauro es el segundo signo del zodiaco y el primero de cualidad fija y negativa/femenina. Perteneciente a los signos fijos junto a Leo, Escorpio y Acuario. Su signo opuesto y complementario a la vez es Escorpio. Junto a los signos Virgo y Capricornio, pertenece al elemento tierra y es regido por el planeta Venus.
   En astrología occidental pertenecen a este signo los que nacen desde el 21 de abril al 21 de mayo.`
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-tauro-brillo-dorado-fondo-astrologia-horoscopo-tauro-sobre-fondo-oscuro_559531-12154.jpg?w=740&t=st=1661697300~exp=1661697900~hmac=28ead498108e027f972519e2a08ab707479c29d17c47525d37bd25fe4b2daa96")
     

    
}

function geminis (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Gemini o Géminis (♊︎) es el tercer signo del Zodiaco, el segundo de naturaleza positiva (masculina) y de cualidad mutable. Representa la inteligencia y la comunicación. Pertenece —junto a Libra y Acuario— al elemento aire y está regido por Mercurio.Su signo opuesto y complementario es Sagitario.
   En la astrología occidental, basada en las doce divisiones en partes iguales de la eclíptica a partir del punto Aries o equinoccio de marzo que da inicio a la rueda del zodiaco, se considera que alguien es del signo Géminis cuando nace entre el 21 de mayo y el 21 de junio, o también, dado que las fechas de inicio y fin pueden cambiar cada año en función al momento exacto del equinoccio de marzo y al huso horario del lugar en el planeta en donde se nace, entre el 21 de mayo y el 20 de junio.`
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-geminis-brillo-dorado-fondo-astrologia-horoscopo-geminis-sobre-fondo-oscuro_559531-11087.jpg?w=740&t=st=1661697310~exp=1661697910~hmac=5c6257bf3fc9181f937dc9a934c9ccba4308a8f2a6df89b88089821953cf5574")
     

    
}

function cancer (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Cáncer (♋︎) es el cuarto signo del zodíaco, el segundo de naturaleza Femenina/Negativa y el segundo de cualidad cardinal. Simboliza la familia y su símbolo representa un cangrejo, pertenece junto a Escorpio y a Piscis al elemento agua. Está regido por la Luna. Su signo opuesto y complemento es Capricornio. En la astrología occidental, basada en las doce divisiones en partes iguales de la eclíptica a partir del punto Aries o equinoccio de marzo que da inicio a la rueda del zodiaco, se considera que alguien es del signo Cáncer cuando nace en el periodo que va alrededor del 21 de junio hasta alrededor del 23 de julio (Tropical), o también, dado que las fechas de inicio y fin pueden cambiar cada año en función al momento exacto del punto Aries y al huso horario del lugar en el planeta, del 22 de junio al 21 de julio `
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-cancer-brillo-dorado-fondo-astrologia-horoscopo-cancer-sobre-fondo-oscuro_559531-11085.jpg?size=626&ext=jpg&uid=R73275245&ga=GA1.2.672237706.1655077090")
     

    
}

function leo (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Leo (♌︎) es el quinto signo del zodíaco, el tercero de naturaleza positiva y el segundo de cualidad fija. Simboliza la fuerza de la vida y su símbolo representa la melena del león, pertenece junto a Aries y Sagitario su elemento es fuego. Está regido por el Sol. Su signo opuesto y complementario es Acuario.
   Es uno de los cuatro signos de naturaleza fija del zodiaco junto a Tauro, Escorpio y Acuario. En la astrología tropical, basada en la división en doce partes iguales de 30 grados de la eclíptica, se considera que alguien es del signo Leo cuando nace alrededor del 22 de julio hasta alrededor del 23 de agosto de cada año. `
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-leo-brillo-dorado-fondo-astrologia-horoscopo-leo-sobre-fondo-oscuro_559531-11088.jpg?size=626&ext=jpg&uid=R73275245&ga=GA1.2.672237706.1655077090")
     

    
}

function virgo (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Virgo (♍︎) es el sexto signo del zodíaco, el tercero de naturaleza negativa y de cualidad mutable. Simboliza el trabajo y su símbolo representa una Virgen, pertenece junto a Tauro y Capricornio al elemento Tierra. Al igual que Géminis, está también regido por Mercurio, aunque invocando el simbolismo no del lado aéreo del planeta sino desde su lado práctico, terrenal y bajo. Su signo opuesto complementario es Piscis.
   En la astrología tropical, basada en la división en doce partes iguales de 30 grados de la eclíptica, se considera que alguien es de Virgo cuando nace entre el 24 de agosto al 23 de septiembre.`
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-virgo-brillo-dorado-fondo-astrologia-horoscopo-virgo-sobre-fondo-oscuro_559531-12173.jpg?w=740&t=st=1661697308~exp=1661697908~hmac=701002611d41f808ba7e05ea8f544d3ada7aaa751c743ef6fdbca71ac36835a2")
     

    
}

function libra (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Libra es el séptimo signo del zodíaco, el cuarto de naturaleza positiva y el tercero de cualidad cardinal. Simboliza el equilibrio y la armonía y su símbolo representa la balanza. Pertenece junto a Géminis y Acuario al elemento aire. Está regido por Venus y su signo opuesto complementario es Aries.
   Se considera que alguien es del signo Libra cuando nace entre el 24 de septiembre y el 22 de octubre.`
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-libra-brillo-dorado-fondo-astrologia-horoscopo-libra-sobre-fondo-oscuro_559531-11089.jpg?w=740&t=st=1661697316~exp=1661697916~hmac=c7253b7a4c97dac53ce85fa11fc74790f3e8787769f2ef73fac6d0435de341fb")
     

    
}

function escorpio (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En la astrología, Escorpio o Escorpión (♏︎) es el octavo signo del zodiaco, el cuarto de naturaleza negativa y el tercero de cualidad fija. Simboliza la destrucción y el renacimiento, está regido por los planetas Marte y Plutón.
   Pertenece, junto a Piscis y Cáncer, al elemento agua, y es uno de los cuatro signos de naturaleza fija del zodiaco junto a Tauro, Leo y Acuario. Su signo opuesto y complementario a la vez es Tauro.
      Ya en el siglo II a. C., Claudio Ptolomeo en el Tetrabiblos menciona que el signo rige los genitales y está asociado a la fertilidad, la fecundidad y el rejuvenecimiento. 7 En la astrología tropical, basada en la división en doce partes iguales de 30 grados de la eclíptica, se considera que alguien es del signo Escorpio cuando nace entre el 23 de octubre y el 22 de noviembre.`
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-escorpio-brillo-dorado-fondo-astrologia-horoscopo-escorpio-sobre-fondo-oscuro_559531-12131.jpg?w=740&t=st=1661697319~exp=1661697919~hmac=d3a22e927a0dcb4ed2ac5aeac6595c94f6f35f06188403a686eb103c82fd8cbd")
     

    
}

function sagitario (e){
    e.preventDefault();
    let parrafoGuia = document.getElementById("parrafoGuia");
   parrafoGuia.innerHTML = `En astrología, Sagitario (♐︎, del latín sagittārius, literalmente 'el arquero') es el noveno signo del zodíaco, de naturaleza positiva y de cualidad mutable. Simboliza la conciencia superior, y su símbolo representa la flecha del arquero. Pertenece, junto a Aries y Leo, al elemento fuego. Está regido por Júpiter. Su signo opuesto y complemento es Géminis. En la astrología tropical, basada en la división en doce partes iguales de 30 grados de la eclíptica, se considera que alguien es del signo Sagitario cuando nace alrededor del 23 de noviembre hasta alrededor del 21 de diciembre de cada año.`
      let imagenGuia = document.getElementById("imagenGuia");     
   imagenGuia.removeAttribute(
        "src",
        "https://i.pinimg.com/564x/b2/d3/7f/b2d37f07e4278f56b133ed91ff3d3e0f.jpg")
    imagenGuia.setAttribute(
            "src",
            "https://img.freepik.com/foto-gratis/signo-zodiaco-sagitario-brillo-dorado-fondo-astrologia-horoscopo-sagitario-sobre-fondo-oscuro_559531-12123.jpg?w=740&t=st=1661697312~exp=1661697912~hmac=eb592f4839b978b85763656b6cf8907ddb11b409d7ca1bdafaac3538b28d70ea")
     

    
}


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
  if (validarFechaNacimiento(valFecha)){
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
}else{
    alert('Corregir los datos')
  }
}


// MECANICAS ELECCIÓN ELEMENTO

function elementoZodiaco (e){
    e.preventDefault();
    console.log("arranca la función elemento zodíaco");
     if (validarElemento(valElemento)){
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
}else{
    alert('Elegir un elemento')
  }
}



