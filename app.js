
let colors = ["AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen", ];


let ilm = document.getElementById("ilm");
let col = document.getElementById("col");
let sco = document.getElementById("score");
let colorSpan = document.getElementById("color");
let input = document.getElementById("myinput");
let inputDiv = document.querySelector('#no-outline');
let scorePopup = document.querySelector('#popupScore');
let scoreDiv = document.querySelector('#your-score');
let key = document.querySelector('#keyboard');
document.getElementById('keyboard').addEventListener ('click', (e)=> {
    document.getElementById('el').focus();
})
let score = 1;
let wrong = 1;
let collection = [];
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letter = ran();
ilm.innerText = letter;
input.addEventListener ("click", (e) => {
    ilm.style.display = 'block';
    input.style.display = 'none';
    inputDiv.style.display = 'none';
    new Audio(`resources/sounds/${letter}.mp3`).play();
} )


document.addEventListener ("keypress", (evt) => {
    if (evt.key.toUpperCase() == letter) {
        let text = document.createTextNode(evt.key.toUpperCase());
        let span = document.createElement('span');
        let color = rancolor()
        span.style.color = color;
        span.appendChild(text);
        let s = score++;
        letter = ran();
        sco.innerText = s;
        ilm.style.color = color;
        colorSpan.innerText = color;
        scorePopup.innerText = s;
        ilm.innerText = letter;
        col.appendChild(span);
        scorePopup.innerText = s;
        new Audio(`resources/sounds/${letter}.mp3`).play();
////////Score pane
        if(s % 10 === 0 ) {
            setTimeout(() => {
                new Audio(`resources/sounds/Tada.mp3`).play();
            }, 350)
        scoreDiv.style.opacity = '1';
        setTimeout(()=> {
            scoreDiv.style.opacity = '0.3';
        }, 3000);
        }  
        
        if (s % 30 === 0) {
            setTimeout(()=> {
                new Audio(`resources/sounds/Yay.mp3`).play();
            }, 500)

        }
        
        
	} else {
        
        console.log(evt.key.charAt(0).toUpperCase())
        new Audio(`resources/sounds/No.mp3`).play()
        r = wrong++;
        if(r % 5 === 0){
            new Audio('resources/sounds/Stop-moving.mp3').play();
        }
        if(r % 8 === 0){
            new Audio('resources/sounds/Stop-moving-x3.mp3').play();
        }
    }
});

function ran() {
    return str.charAt(Math.floor(Math.random() * 25));
}

function rancolor() {
    return colors[(Math.floor(Math.random() * 147))];
}
