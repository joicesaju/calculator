var screen=document.getElementById('screen');
// to display value inside the text box
function btnclick(value){
    screen.value+=value
}
function clearscreen(){
    screen.value=""
}
function findresult(){
  
    var result= eval(screen.value)
    console.log(result)
    screen.value=result;
  
//    console.log(eval(screen.value));



     

}