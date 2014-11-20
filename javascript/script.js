//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".
function signIn() {
   
    var userName =  prompt("Thanks for signing in");
    document.getElementById("greetings-here").innerHTML = "Hi "+userName+"! You should sign-up";
}



//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".

function signUp(){
     var userEmail =  prompt("Please enter your email address");
    document.getElementById("greetings-here").innerHTML = "YES! You are going to be so spammed.";
    document.getElementById("output-here").innerHTML = "Thank you for entering email "+userEmail;
}