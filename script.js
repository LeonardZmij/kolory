function Kolory(){
    var numHSL = parseInt(document.getElementById("numHSL").value)
    var komorka1 = document.getElementById("komorka1")
    var komorka2 = document.getElementById("komorka2")
    var komorka3 = document.getElementById("komorka3")
    var komorka4 = document.getElementById("komorka4")
    var komorka5 = document.getElementById("komorka5")
    komorka1.style.backgroundColor = `hsl(${numHSL}, ${100}%, ${50}%)`
    komorka2.style.backgroundColor = `hsl(${numHSL}, ${80}%, ${50}%)`
    komorka3.style.backgroundColor = `hsl(${numHSL}, ${60}%, ${50}%)`
    komorka4.style.backgroundColor = `hsl(${numHSL}, ${40}%, ${50}%)`
    komorka5.style.backgroundColor = `hsl(${numHSL}, ${20}%, ${50}%)`
}