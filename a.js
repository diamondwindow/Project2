let arabic =document.getElementById("arabic");
let english =document.getElementById("english");
let title =document.getElementById("title");
let text1 =document.getElementById("text1");
let about1 =document.getElementById("about1");
let about2 =document.getElementById("about2");

arabic.onclick = ()=>{
    setlanguage("arabic");
    
}

english.onclick = ()=>{
    setlanguage("english");  
    
}
onload = ()=> {
    setlanguage(localStorage.getItem("Lang"))
};
function setlanguage(getlanguage){
if (getlanguage === "arabic"){
    title.innerHTML="محمد حامد"
    localStorage.setItem("Lang","arabic");
    text1.innerHTML="مرحبا بكم"
    about1.innerHTML="اتصل ينا"
    about2.innerHTML=" انا مهندس اتضالات و الكترونيات"  

}else if (getlanguage === "english"){
    title.innerHTML="Mohamed Hamed "
    localStorage.setItem("Lang","english");
    text1.innerHTML=" Welcome"
    about1.innerHTML="Contact US"
    about2.innerHTML="I am Electronic and Communication engineer."
}
}

