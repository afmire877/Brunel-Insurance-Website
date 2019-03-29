var answer = document.querySelectorAll(".answer");
var questions = document.querySelectorAll(".question");



for(var i= 0; i <= questions.length -1 ;i++){
  questions[i].addEventListener("click", function(e){
    var ans = e.toElement.lastElementChild;
    ans.classList.toggle("displayAnswer");

  });
  }

