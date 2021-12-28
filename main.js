function send()
{

number1=document.getElementById("num_input").value;
number2=document.getElementById("num2_input").value;
correct_answer=parseInt(number1)*parseInt(number2);
console.log(correct_answer);

question_number = "<h3 id='num_display'> Q."+number1+"X"+number2+"</h3>";
input_box="<br> Answer- <input type='text' placeholder='Type answer here' id='ans_input'>";
check_btn="<br><br><button class='btn btn-info' id='check' onclick='check()'>CHECK</button>";

row=question_number+input_box+check_btn;

document.getElementById("question_output").innerHTML=row;
document.getElementById("num_input").value="";
document.getElementById("num2_input").value="";

}
