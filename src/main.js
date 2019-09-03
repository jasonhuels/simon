import * as simon from './simon';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

let simonArr = [];
let userArr = [];


$("#gameStart").click(function() {
  $("#gameStart").hide();
  simonSays();

});


$(".input").click(function() {
  console.log(this.value);
  userArr.push(this.value);
});

$("#submit").click(function() {
  for(let i=0; i<simonArr.length; i++) {
    if(userArr[i] === simonArr[i]) {
      console.log("same");
    } else {
      console.log("lame");
      break;
    }
  }
  simonSays();
});

function simonSays() {
  let i = 0;
  simonArr.push(simon.changeColor());
  console.log(simonArr);

  let interval = setInterval(function() {
    setTimeout(function() {
      $("body").css("background-color", "black");
    }, 900);
    $("body").css("background-color", simonArr[i]);
    i++;

  }, 1000);
  interval;


  setTimeout(function() {
    clearInterval(interval);
  }, 1000*(simonArr.length+1));
}
