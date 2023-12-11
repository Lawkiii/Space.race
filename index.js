const boutonlune = document.querySelector(".lune")
const boutonfusee=document.querySelector(".fusee")
const boutonplante=document.querySelector(".plante")
const boutonpiece=document.querySelector(".piece")

const dataviz=document.querySelector(".dataviz9")
const dataviz0 = document.querySelector(".dataviz0")
const dataviz1 = document.querySelector(".dataviz1")
const dataviz2 = document.querySelector(".dataviz2")
const dataviz3 = document.querySelector(".dataviz3")
const dataviz4 = document.querySelector(".dataviz4")


const lunebleu = document.querySelector(".boutonlune")
const lunejaune = document.querySelector(".boutonlunejaune")

const fuseebleu = document.querySelector(".boutonfusee")
const fuseejaune = document.querySelector(".boutonfuseejaune")

const plantebleu = document.querySelector(".boutonplante")
const plantejaune = document.querySelector(".boutonplantejaune")

const piecebleu = document.querySelector(".boutonpiece")
const piecejaune = document.querySelector(".boutonpiecejaune")


const missions = document.querySelector(".missions")
const tech = document.querySelector(".tech")
const environnement = document.querySelector(".environnement")
const budget = document.querySelector(".budget")


const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")
const btn5 = document.querySelector(".btn5")
const btn6 = document.querySelector(".btn6")
const btn7 = document.querySelector(".btn7")
const btn8 = document.querySelector(".btn8")

const esaclick = document.querySelector(".esaclick")
const ispaceclick = document.querySelector(".ispaceclick")
const spacexclick = document.querySelector(".spacexclick")
const gamaclick = document.querySelector(".gamaclick")
const blueclick = document.querySelector(".blueclick")
const prometheeclick = document.querySelector(".prometheeclick")
const moonclick = document.querySelector(".moonclick")
const nasaclick = document.querySelector(".nasaclick")

const btnplus1 = document.querySelector(".btnplus1")
const btnplus2 = document.querySelector(".btnplus2")
const btnplus3 = document.querySelector(".btnplus3")
const btnplus4 = document.querySelector(".btnplus4")
const btnplus5 = document.querySelector(".btnplus5")
const btnplus6 = document.querySelector(".btnplus6")
const btnplus7 = document.querySelector(".btnplus7")
const btnplus8 = document.querySelector(".btnplus8")

const forme1 = document.querySelector(".forme1")
const forme2 = document.querySelector(".forme2")

const acteur1 = document.querySelector(".acteur1")
const acteur2 = document.querySelector(".acteur2")

const boutonbas = document.querySelector(".boutonbas")

const texte = document.querySelector(".texte1")

const paralax = document.querySelectorAll(".paralax")

const main = document.querySelector("index.html")

const esa = document.querySelector("esa.html")

const boutonscroll = document.querySelector(".boutonscroll")

let fonction1active = false;
let fonction2active = false;
let fonction3active = false;
let fonction4active = false;



function parallax1(e){
    console.log(e.pageX, e.pageY)
    let x = e.pageX;
    let y = e.pageY;
    dataviz.style.transform = 'translate(' +x/100+'px,'+y/100+'px)';
}

function parallax2(e){
    console.log(e.pageX, e.pageY)
    let x = e.pageX;
    let y = e.pageY;
    paralax[0].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[1].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[2].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[3].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[4].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[5].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[6].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[7].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[8].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[9].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[10].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[11].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[12].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[13].style.transform='translate('+x/100+'px, '+y/100+'px)';
    paralax[14].style.transform='translate('+x/100+'px, '+y/100+'px)';
}


document.addEventListener("mousemove", parallax1)
document.addEventListener("mousemove", parallax2)


function btnlune(){
    fonction1active=true;

    dataviz0.style.opacity="0";
    dataviz1.style.opacity="1";
    dataviz2.style.opacity="0";
    dataviz3.style.opacity="0";
    dataviz4.style.opacity="0";
    
    texte.innerHTML="Informez-vous sur le nombre de <br>missions effectuées par acteurs."
    btn1.style.top="330px";
    btn2.style.top="480px";
    btn3.style.top="365px";
    btn4.style.top="625px";
    btn5.style.top="405px";
    btn6.style.top="580px";
    btn7.style.top="495px";
    btn8.style.top="320px";
    console.log("fonction 1");
    fonction2active=false;
    fonction3active=false;
    fonction4active=false;

if (fonction1active){
    lunejaune.style.opacity="1";
    missions.style.opacity="1";
    missions.style.left="1663px";
    console.log("fonction 1 activé")
}

 if (!fonction2active){
    fuseejaune.style.opacity="";
    tech.style.opacity="";
    tech.style.left="";
    console.log("fonction 2 désactivé")
}

if (!fonction3active){
    plantejaune.style.opacity="";
    environnement.style.opacity="";
    environnement.style.left="";
    console.log("fonction 3 désactivé")
}

if (!fonction4active){
    piecejaune.style.opacity="";
    budget.style.opacity="";
    budget.style.left="";
    console.log("fonction 4 désactivé")
}
}

function btnfusee(){
    fonction2active=true;

            dataviz0.style.opacity="0";
            dataviz1.style.opacity="0";
            dataviz2.style.opacity="1";
            dataviz3.style.opacity="0";
            dataviz4.style.opacity="0";
            
            texte.innerHTML="Informez-vous sur les dernières <br>technologies inventé par les acteurs."
            btn1.style.top="390px";
            btn2.style.top="560px";
            btn3.style.top="300px";
            btn4.style.top="605px";
            btn5.style.top="380px";
            btn6.style.top="580px";
            btn7.style.top="542px";
            btn8.style.top="320px";
            console.log("fonction 2");
    
    fonction1active=false;
    fonction3active=false;
    fonction4active=false;

if (!fonction1active){
    lunejaune.style.opacity="";
    missions.style.opacity="";
    missions.style.left="";
    console.log("fonction 1 désactivé")
}
 if (fonction2active){
    fuseejaune.style.opacity="1";
    tech.style.opacity="1";
    tech.style.left="1663px";
    console.log("fonction 2 activé")
}

if (!fonction3active){
    plantejaune.style.opacity="";
    environnement.style.opacity="";
    environnement.style.left="";
    console.log("fonction 3 désactivé")
}

if (!fonction4active){
    piecejaune.style.opacity="";
    budget.style.opacity="";
    budget.style.left="";
    console.log("fonction 4 désactivé")
}
}

function btnplante(){
    fonction3active=true;

    dataviz0.style.opacity="0";
    dataviz1.style.opacity="0";
    dataviz2.style.opacity="0";
    dataviz3.style.opacity="1";
    dataviz4.style.opacity="0";

    texte.innerHTML="Informez-vous sur les acteurs qui <br>prenne en compte l'environnement <br>dans leur programme spatiale."
    btn1.style.top="540px";
    btn2.style.top="470px";
    btn3.style.top="300px";
    btn4.style.top="410px";
    btn5.style.top="470px";
    btn6.style.top="420px";
    btn7.style.top="542px";
    btn8.style.top="600px";
    console.log("fonction 3 ")

    fonction1active=false;
    fonction2active=false;
    fonction4active=false;

    if (fonction3active){
        plantejaune.style.opacity="1";
        environnement.style.opacity="1";
        environnement.style.left="1663px";
        console.log("fonction 3 activé")
    }

    if (!fonction1active){
        lunejaune.style.opacity="";
        missions.style.opacity="";
        missions.style.left="";
        console.log("fonction 1 désactivé")
    }

    if (!fonction2active){
        fuseejaune.style.opacity="";
        tech.style.opacity="";
        tech.style.left="";
        console.log("fonction 2 désactivé")
    }

    if (!fonction4active){
        piecejaune.style.opacity="";
        budget.style.opacity="";
        budget.style.left="";
        console.log("fonction 4 désactivé")
    }
}

function btnpiece(){
    fonction4active=true;

    dataviz0.style.opacity="0";
    dataviz1.style.opacity="0";
    dataviz2.style.opacity="0";
    dataviz3.style.opacity="0";
    dataviz4.style.opacity="1";

    texte.innerHTML="Informez-vous sur le budget des <br>acteurs principaux de la course à <br>l'espace."
    btn1.style.top="330px";
    btn2.style.top="457px";
    btn3.style.top="340px";
    btn4.style.top="618px";
    btn5.style.top="360px";
    btn6.style.top="550px";
    btn7.style.top="475px";
    btn8.style.top="310px";
    console.log("fonction 4 active")

    fonction1active=false;
    fonction2active=false;
    fonction3active=false;

    if (fonction4active){
        piecejaune.style.opacity="1";
        tech.style.opacity="1";
        tech.style.left="";
        console.log("fonction 4 activé")
    }

    if (!fonction1active){
        lunejaune.style.opacity="";
        missions.style.opacity="";
        missions.style.left="";
        console.log("fonction 1 désactivé")
    }

    if (!fonction2active){
        fuseejaune.style.opacity="";
        tech.style.opacity="";
        tech.style.left="";
        console.log("fonction 2 désactivé")
    }

    if (!fonction3active){
        plantejaune.style.opacity="";
        environnement.style.opacity="";
        environnement.style.left="";
        console.log("fonction 3 désactivé")
    }
}

boutonlune.addEventListener("click", btnlune )

boutonfusee.addEventListener("click", btnfusee)

boutonplante.addEventListener("click", btnplante)

boutonpiece.addEventListener("click", btnpiece)

btn1.addEventListener("click",btn1click)
btn2.addEventListener("click",btn2click)
btn3.addEventListener("click",btn3click)
btn4.addEventListener("click",btn4click)
btn5.addEventListener("click",btn5click)
btn6.addEventListener("click",btn6click)
btn7.addEventListener("click",btn7click)
btn8.addEventListener("click",btn8click)


function btn1click(){
    esaclick.style.visibility="visible";
    console.log("btn1 cliqué")
    ispaceclick.style.visibility="";
    spacexclick.style.visibility="";
    gamaclick.style.visibility="";
    blueclick.style.visibility="";
    prometheeclick.style.visibility="";
    moonclick.style.visibility="";
    nasaclick.style.visibility="";
    forme1.style.visibility="hidden";
    forme2.style.visibility="hidden";
    acteur1.style.visibility="hidden";
    acteur2.style.visibility="hidden";
    boutonscroll.style.top="1028px";
}
function btn2click(){
    ispaceclick.style.visibility="visible";
    console.log("btn2 cliqué")
    esaclick.style.visibility="";
    spacexclick.style.visibility="";
    gamaclick.style.visibility="";
    blueclick.style.visibility="";
    prometheeclick.style.visibility="";
    moonclick.style.visibility="";
    nasaclick.style.visibility="";
    forme1.style.visibility="hidden";
    forme2.style.visibility="hidden";
    acteur1.style.visibility="hidden";
    acteur2.style.visibility="hidden";
    boutonscroll.style.top="1028px";
}
function btn3click(){
    spacexclick.style.visibility="visible";
    console.log("btn3 cliqué")
    ispaceclick.style.visibility="";
    esaclick.style.visibility="";
    gamaclick.style.visibility="";
    blueclick.style.visibility="";
    prometheeclick.style.visibility="";
    moonclick.style.visibility="";
    nasaclick.style.visibility="";
    forme1.style.visibility="hidden";
    forme2.style.visibility="hidden";
    acteur1.style.visibility="hidden";
    acteur2.style.visibility="hidden";
    boutonscroll.style.top="1028px";
}
function btn4click(){
    gamaclick.style.visibility="visible";
    console.log("btn4 cliqué")
    ispaceclick.style.visibility="";
    spacexclick.style.visibility="";
    esaclick.style.visibility="";
    blueclick.style.visibility="";
    prometheeclick.style.visibility="";
    moonclick.style.visibility="";
    nasaclick.style.visibility="";
    forme1.style.visibility="hidden";
    forme2.style.visibility="hidden";
    acteur1.style.visibility="hidden";
    acteur2.style.visibility="hidden";
    boutonscroll.style.top="1028px";
}
function btn5click(){
    blueclick.style.visibility="visible";
    console.log("btn5 cliqué")
    ispaceclick.style.visibility="";
    spacexclick.style.visibility="";
    gamaclick.style.visibility="";
    esaclick.style.visibility="";
    prometheeclick.style.visibility="";
    moonclick.style.visibility="";
    nasaclick.style.visibility="";
    forme1.style.visibility="hidden";
    forme2.style.visibility="hidden";
    acteur1.style.visibility="hidden";
    acteur2.style.visibility="hidden";
    boutonscroll.style.top="1028px";
}
function btn6click(){
    prometheeclick.style.visibility="visible";
    console.log("btn6 cliqué")
    ispaceclick.style.visibility="";
    spacexclick.style.visibility="";
    gamaclick.style.visibility="";
    blueclick.style.visibility="";
    esaclick.style.visibility="";
    moonclick.style.visibility="";
    nasaclick.style.visibility="";
    forme1.style.visibility="hidden";
    forme2.style.visibility="hidden";
    acteur1.style.visibility="hidden";
    acteur2.style.visibility="hidden";
    boutonscroll.style.top="1028px";
}

function btn7click(){
    moonclick.style.visibility="visible";
    console.log("btn7 cliqué")
    ispaceclick.style.visibility="";
    spacexclick.style.visibility="";
    gamaclick.style.visibility="";
    blueclick.style.visibility="";
    prometheeclick.style.visibility="";
    esaclick.style.visibility="";
    nasaclick.style.visibility="";
    forme1.style.visibility="hidden";
    forme2.style.visibility="hidden";
    acteur1.style.visibility="hidden";
    acteur2.style.visibility="hidden";
    boutonscroll.style.top="1028px";
}
function btn8click(){
    nasaclick.style.visibility="visible";
    console.log("btn8 cliqué")
    ispaceclick.style.visibility="";
    spacexclick.style.visibility="";
    gamaclick.style.visibility="";
    blueclick.style.visibility="";
    prometheeclick.style.visibility="";
    moonclick.style.visibility="";
    esaclick.style.visibility="";
    forme1.style.visibility="hidden";
    forme2.style.visibility="hidden";
    acteur1.style.visibility="hidden";
    acteur2.style.visibility="hidden";
    boutonscroll.style.top="1028px";
}

btnplus1.addEventListener("click",btnplus1click)
btnplus2.addEventListener("click",btnplus2click)
btnplus3.addEventListener("click",btnplus3click)
btnplus4.addEventListener("click",btnplus4click)

btnplus5.addEventListener("click",btnplus5click)
btnplus6.addEventListener("click",btnplus6click)
btnplus7.addEventListener("click",btnplus7click)
btnplus8.addEventListener("click",btnplus8click)

function btnplus1click(){
    window.location="esa.html";
    console.log("esa redirection 1")

    if (fonction2active){
        window.location="esatech.html";
        console.log("esa redirection 2")
    }
    if (fonction3active){
        window.location="esaplante.html";
        console.log("esa redirection 3")
    }
    if(fonction4active){
        window.location="esabudget.html";
        console.log("esa redirection 4")
    }
}

function btnplus2click(){
    window.location="ispace.html";
    console.log("ispace redirection 1")

    if (fonction2active){
        window.location="ispacetech.html";
        console.log("ispace redirection 2")
    }
    if (fonction3active){
        window.location="ispaceplant.html";
        console.log("ispace redirection 3")
    }
    if(fonction4active){
        window.location="ispacebudget.html";
        console.log("ispace redirection 4")
    }
}
function btnplus3click(){
    window.location="spacex.html";
    console.log("spacex redirection 1")

    if (fonction2active){
        window.location="spacextech.html";
        console.log("spacex redirection 2")
    }
    if (fonction3active){
        window.location="spacexplant.html";
        console.log("spacex redirection 3")
    }
    if(fonction4active){
        window.location="spacexbudget.html";
        console.log("spacex redirection 4")
    }
}
function btnplus4click(){
    window.location="gama.html";
    console.log("gama redirection 1")

    if (fonction2active){
        window.location="gamatech.html";
        console.log("gama redirection 2")
    }
    if (fonction3active){
        window.location="gamaplant.html";
        console.log("gama redirection 3")
    }
    if(fonction4active){
        window.location="gamabudget.html";
        console.log("gama redirection 4")
    }
}
function btnplus5click(){
    window.location="blueorigin.html";
    console.log("blue redirection 1")

    if (fonction2active){
        window.location="blueorigintech.html";
        console.log("blue redirection 2")
    }
    if (fonction3active){
        window.location="blueoriginplant.html";
        console.log("blue redirection 3")
    }
    if(fonction4active){
        window.location="blueoriginbudget.html";
        console.log("blue redirection 4")
    }
}
function btnplus6click(){
    window.location="promethee.html";
    console.log("promethee redirection 1")

    if (fonction2active){
        window.location="prometheetech.html";
        console.log("promethee redirection 2")
    }
    if (fonction3active){
        window.location="prometheeplant.html";
        console.log("promethee redirection 3")
    }
    if(fonction4active){
        window.location="prometheebudget.html";
        console.log("promethee redirection 4")
    }
}
function btnplus7click(){
    window.location="moonexpress.html";
    console.log("moon redirection 1")

    if (fonction2active){
        window.location="moonexpresstech.html";
        console.log("moon redirection 2")
    }
    if (fonction3active){
        window.location="moonexpressplant.html";
        console.log("moon redirection 3")
    }
    if(fonction4active){
        window.location="moonexpressbudget.html";
        console.log("moon redirection 4")
    }
}
function btnplus8click(){
    window.location="nasa.html";
    console.log("nasa redirection 1")

    if (fonction2active){
        window.location="nasatech.html";
        console.log("nasa redirection 2")
    }
    if (fonction3active){
        window.location="nasaplant.html";
        console.log("nasa redirection 3")
    }
    if(fonction4active){
        window.location="nasabudget.html";
        console.log("nasa redirection 4")
    }
}

boutonscroll.addEventListener("click",()=>{
    window.scrollTo({
        top : 1123,
        left: 0,
        

    })
})