
let ilm = document.getElementById("ilm");
let col = document.getElementById("col");
let sco = document.getElementById("score");
let score = 1;
let collection = [];
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
          
        
	}
});
