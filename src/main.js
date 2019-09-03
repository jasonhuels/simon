import { simon } from './simon';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';








  $("button").click(function() {
    let simonArr = [];
    for(let i=0; i<50; i++) {
      simonArr.push(changeColor());
    }

    let i = 0;
      setInterval(function() {
        $("body").css("background-color", simonArr[i]); i++;
      }, 1000);


  });



function changeColor() {
  const COLORS = ["red", "blue", "green", "yellow"];
  let rand = Math.floor(Math.random()*COLORS.length);

  return COLORS[rand];
}
