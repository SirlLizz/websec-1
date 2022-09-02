function getResult(){
    let first = parseFloat(document.getElementById("input_first").value);
    let second = parseFloat(document.getElementById("input_second").value);
    let type = document.getElementById("type-operation").value;
    console.log(first);

    if(first="NaN" || second =="NaN"){
        alert("Поля не могут быть пустыми");
    }else{
        switch(type){
            case "+":
                document.getElementById("output-result").value = first+second;
                break;
            case "-":
                document.getElementById("output-result").value = first-second;
                break;
            case "*":
                document.getElementById("output-result").value = first*second;
                break;
            case "/":
                if(second==0){
                    document.getElementById("output-result").value = "";
                    alert("Делить на ноль нельзя!");
                }else{
                    document.getElementById("output-result").value = first/second;
                }
                break;
            
        }
    }
}