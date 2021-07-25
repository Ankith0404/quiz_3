function send(){

    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>"+ number1  +  " X "  +  number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_box = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row = question_number + input_box + check_box ;

    document.getElementById("output").innerHTML = row ;
    document.getElementById("number_1").innerHTML = "";
    document.getElementById("number_2").innerHTML = "";
}