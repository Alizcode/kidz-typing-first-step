
let ilm = document.getElementById("ilm");
let col = document.getElementById("col");
let sco = document.getElementById("score");
let input = document.getElementById("myinput");
let inputDiv = document.querySelector('#no-outline');
let score = 1;
let collection = [];
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

input.addEventListener ("click", (e) => {
    ilm.style.display = 'block';
    input.style.display = 'none';
    inputDiv.style.display = 'none';
} )
function ran() {
    return str.charAt(Math.floor(Math.random() * 25));
}
let letter = ran();
  ilm.innerText = letter;

  document.addEventListener ("keypress", (evt) => {
      if (evt.key.toUpperCase() == letter) {
          
          s = score++;
          letter = ran();
          sco.innerText = s;
          ilm.innerText = letter;
          let text = document.createTextNode(evt.key.toUpperCase());
          col.appendChild(text);
          new Audio(`resources/sounds/${letter}.mp3`).play()
          
        
	} else {console.log(evt.key.charAt(0).toUpperCase())

        new Audio(`resources/sounds/${evt.key.charAt(0).toUpperCase()}.mp3`).play()
    }
});
