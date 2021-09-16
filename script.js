var displayDiv = document.querySelector("#display");

number_1 =0;
number_2 =0;
operator = ""


press= function(number){

    number = number.toString()
    if (displayDiv.innerText=="0" || operator != ""){

        displayDiv.innerText = number;
    }

    else{

        displayDiv.innerText = displayDiv.innerText + number;

    }



}


setOP = function(op){
    number_1 = parseFloat(display.innerText);
    operator = op
    
}

calculate = function(){
    let result;
    let sresult;
    

    number_2 = parseFloat(display.innerText);
    if (operator=="/"){
        result = (number_1/number_2)
    }
    else if(operator=="*"){
        result = (number_1*number_2)
    }
    else if(operator=="-"){
        result = (number_1-number_2)
    }
    else if(operator=="+"){
        result = (number_1+number_2)
    }

    console.log(result);

    if(result!= Math.floor(result)){
        
        sresult=result.toString().split(".");
        sresult=parseInt(sresult[1].length)
        if(sresult>9){
            sresult =9;
        }

    }

    displayDiv.innerText = result.toPrecision(sresult);
    
    operator = ""
}

clr = function(){

    displayDiv.innerText = "0"


}