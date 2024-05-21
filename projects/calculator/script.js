function ButtonClick(val){
    console.log(val)
document.getElementById("screen").value+=val;

}
function Equalbtn(){
    var text=document.getElementById("screen").value
    var result= eval(text)
    document.getElementById("screen").value=result
}

function DisplayClear(){
    document.getElementById("screen").value=""
}