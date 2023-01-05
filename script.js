function insertion(num){

    var number = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = number +num;


}

function clear1(){
    document.getElementById("result").innerHTML = 0;
}

function calculator(){

    var result = document.getElementById("result").innerHTML;
    if(result){
        document.getElementById("result").innerHTML = eval(result);
    }

}