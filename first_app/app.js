function retournerMessageScore(score, nombreQuestions) {

    let spanScore = document.querySelector(".zoneScore span")
    let res = `${score} / ${nombreQuestions}`;
    spanScore.innerHTML = res
}
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}
function afficherProsition(motafficher)
{
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerHTML = motafficher

}
const motApplication = ["salam", "bonjour", "ok", "mariam"]
const lisApplication = ["salam cava ", "bonjourcava ", "ok bye", "mariam fnaaa"]
let score = 0;
let i = 0;
let listprop = motApplication
let validatiom = document.getElementById("btnValiderMot")
let spanScore = document.querySelector(".zoneScore span")
let inputEcriture = document.getElementById("inputEcriture")
let btnValiderMot = document.getElementById("btnValiderMot")
afficherProsition(motApplication[i])
retournerMessageScore(score, motApplication.length) 
validatiom.addEventListener("click", () => {

    console.log(inputEcriture.value) + console.log(" : input ecriture")
    console.log(motApplication[i]) + console.log(" :motApp")
    if(inputEcriture.value === motApplication[i])
    {
        score++;
        spanScore.innerHTML = `${score} / ${motApplication.length}`;
    }
    inputEcriture.value = ''
    i++
    if(motApplication[i] == undefined)
    {
        afficherProsition("le jeu est fini")
        btnValiderMot.disabled == true
    }
    else
        afficherProsition(motApplication[i])
});
let baliseinput = document.querySelectorAll(".zoneOptions input")
for (let i = 0; i < baliseinput.length; i++) {
    baliseinput[i].addEventListener("change", (event) => {
    if (event.target.value === "1") {
        listprop = motApplication
    } else 
        listprop = lisApplication
    afficherProsition(listprop[i])
})
}
let partage = document.querySelector(".zonePartage button")
let popupBackground = document.querySelector(".popupBackground")
partage.addEventListener("click", ()=>{
    popupBackground.classList.add("active")})

    popupBackground.addEventListener("click", (event) => {
    if (event.target === popupBackground) {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.remove("active")
        }})
    let x = document.querySelector("form")
    x.addEventListener("submit", (event) => {
          event.preventDefault();
        const nom = document.getElementById("nom");
        let n = nom.value
        const email = document.getElementById("email")
        let e = email.value
        let scoremail = `${score} / ${motApplication.length}`
        afficherEmail(n, e, scoremail);
    });