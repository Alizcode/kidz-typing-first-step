
let colors = ["AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan",  "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];


let ilm = document.querySelectorAll(".ilm");
let col = document.getElementById("col");
let sco = document.getElementById("score");
let colorSpan = document.querySelector(".color");
let input = document.getElementById("myinput");
let inputDiv = document.querySelector('#no-outline');
let currentLetter = document.querySelector('.current-letter');
let scoreDiv = document.querySelector('#your-score');
let key = document.querySelector('#keyboard');
document.getElementById('keyboard').addEventListener ('click', (e)=> {
    document.getElementById('el').focus();
})
document.body.ontouchend = function() { document.querySelector('#el').focus(); };
let score = 1;
let wrong = 1;
let collection = [];
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letter = ran();
ilm.forEach( x => x.innerText = letter)
input.addEventListener ("click", (e) => {
    document.getElementById('el').focus();
    input.style.display = 'none';
    currentLetter.style.display = 'block';
    new Audio(`resources/sounds/${letter}.mp3`).play();
} )

document.addEventListener ("keypress", (evt) => {
    if (evt.key.toUpperCase() == letter) {
        ilm[1].style.display = 'none';
        ilm[1].classList.remove('myscore')
        void ilm[1].offsetWidth;
        let text = document.createTextNode(evt.key.toUpperCase());
        let button = document.createElement('button');
        let color = rancolor()
        button.style.color = color;
        button.appendChild(text);
        button.classList.add('btn', 'border')
        let s = score++;
        letter = ran();
        sco.innerText = s;
        ilm[1].style.color = color;
        colorSpan.innerText = color;
        colorSpan.style.color = color;
        currentLetter.style.background = color;
        ilm.forEach(x => x.innerText = letter);
        ilm[1].style.display = 'block';
        ilm[1].classList.add('myscore');
        if(score > 1) {
            input.style.display = 'none';
    currentLetter.style.display = 'block';
        }
        col.appendChild(button);
        new Audio(`resources/sounds/${letter}.mp3`).play();
////////Score pane
        if(s % 15 === 0 ) {
            setTimeout(() => {
                new Audio(`resources/sounds/Tada.mp3`).play();
            }, 350)
        }  
        
        if (s % 30 === 0) {
            setTimeout(()=> {
                new Audio(`resources/sounds/Yay.mp3`).play();
            }, 500)

        }
        wrong = 0;
        
	} else {      
//        console.log(evt.key.charAt(0).toUpperCase())
        new Audio(`resources/sounds/No.mp3`).play()
        wrong++;
        if(wrong % 5 === 0){
            new Audio('resources/sounds/Stop-moving.mp3').play();
        }
    }
});

function ran() {
    return str.charAt(Math.floor(Math.random() * str.length));
}

function rancolor() {
    return colors[(Math.floor(Math.random() * colors.length))];
}

