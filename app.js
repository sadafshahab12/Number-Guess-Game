let guess = document.querySelector(".guess");
let input = document.querySelector("input");
let button = document.querySelector("button");
let remain_chances = document.querySelector(".chance");
let random_num_show = document.createElement("p");
let chance_msg = document.querySelector(".chance-msg")
//set focus on input field
input.focus();

let random_num = Math.floor(Math.random() * 10 + 1);
console.log(random_num);

let chance = 5;

// add addEventListener in button
button.addEventListener("click", () => {
  chance--; //decrement chance
  let input_value = input.value;
  // console.log(input_value)

  if (input_value == random_num) {
    guess.innerText = "Congratulations!!!";
    input.disabled = true;
    button.innerText = "Replay";
    guess.classList.add("class", "msg");
    guess.style.color = "#3f3c3c;";
  } else if (input_value > random_num && input_value < 10) {
    guess.innerText = "Your guess is high!!";
    remain_chances.innerText = chance;
    guess.classList.add("class", "msg");
    guess.style.color = "#3f3c3c;";
  } else if (input_value < random_num && input_value > 0) {
    guess.innerText = "Your guess is low!!";
    remain_chances.innerText = chance;
    guess.classList.add("class", "msg");
    guess.style.color = "#3f3c3c;";
  } else {
    guess.innerText = "Your number is invalid!!";
    remain_chances.innerText = chance;
    guess.classList.add("class", "msg");
    guess.style.color = "#3f3c3c;";
  }
  if (chance == 0) {
    button.innerText = "Replay";
    input.disabled = true;
    input_value = "";
    guess.innerText = "You lost the game!!";
    guess.style.color = "red";
    random_num_show.innerText = `The number was ${random_num}`;
    chance_msg.append(random_num_show);
    random_num_show.style.fontSize = "4.5vmin";
    random_num_show.style.paddingTop = "5vmin";
    random_num_show.style.fontStyle = "italic";
    random_num_show.style.backgroundColor = "italic";
    



  }
  if (chance < 0) {
    window.location.reload();
  }
});

