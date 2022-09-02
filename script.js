function getResult(){
    let first = document.getElementById("input_first").value;
    let second = document.getElementById("input_second").value;
    let type = document.getElementById("type-operation").value;

    if(first==="" || second ===""){
        alert("Поля не могут быть пустыми");
    }else{
        first = parseFloat(first);
        second = parseFloat(second);
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
                if(second===0){
                    document.getElementById("output-result").value = "";
                    alert("Делить на ноль нельзя!");
                }else{
                    document.getElementById("output-result").value = first/second;
                }
                break;
            
        }
    }
}