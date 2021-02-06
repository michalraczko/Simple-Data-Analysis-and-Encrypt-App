
document.getElementById('textarea').onkeyup = function () {

document.getElementById('counter').innerHTML = "counting: " + (0 + this.value.length);

};

function TextAnalysis() {

/*Full length of text*/

    let valueText = document.getElementById("textarea").value;

    let i;
    for (let i = 0; i < valueText.length; i++) {
        document.getElementById("DAP0").innerHTML = [i+1];
    }

/*Full length of text without space*/

    let withOutSpace = document.getElementById("textarea").value.split(' ').join('').length;
    document.getElementById("DAP1").innerHTML = withOutSpace;
   

/*Counting numbers*/

    let valueText0 = document.getElementById("textarea").value;
    let regEx = /\d+/g;
    let result = valueText0.match(regEx);
    result = result.join("");
    document.getElementById("DAP2").innerHTML = result.length;

/*Longest word and his count of letters*/

    let valueText1 = document.getElementById("textarea").value
    let myAarr = [];
    let splited = valueText1.split(" ");
    myAarr.push(splited);

    let longest = 0;
    let word = null;

    for(let x = 0; x < splited.length; x++) {

        if(longest < splited[x].length) {

          longest=splited[x].length;
          word=splited[x];

       }
    }

    document.getElementById("DAP3").innerHTML = word + " " + longest;
    
}

function findWord() {

    /*Searchbox algorithm*/

    let searchInput = document.getElementById("searchInput").value;
    let fieldData = document.getElementById("textarea").value;
  
    if (searchInput.length > 0 && fieldData.indexOf(searchInput) > -1) {
      alert("Word has found.");
    } else {
      alert("Word wasnt found.");
    }

  }

  function encrpytData() {

    /*Encrypt algorithm*/

    let myArr = [];
    let lettero = "o";
    let letteri = "i";
    let lettere = "e";
    let lettera = "a";
    let letters = "s";
    let letterb = "b";
    let letterO = "O";
    let letterI = "I";
    let letterE = "E";
    let letterA = "A";
    let letterS = "S";
    let letterB = "B";
    let dataForEncrypt = document.getElementById("textareaEncrypt").value;
    let splited = dataForEncrypt.split("");

    myArr.push(splited);
    let i;
    for(let i = 0; i < splited.length; i++) {

        if (letteri == splited[i] || letterI == splited[i]){
          splited[i] = "1";
        } else if (lettere == splited[i] || letterE == splited[i]) 
        {
          splited[i] = "3";
        } else if (lettera == splited[i] || letterA == splited[i]) 
        {
          splited[i] = "4";
        } else if (letters == splited[i] || letterS == splited[i]) 
        {
          splited[i] = "5";
        } else if (letterb == splited[i] || letterB == splited[i]) 
        {
          splited[i] = "8";
        } else if (lettero == splited[i] || letterO == splited[i]) 
        {
          splited[i] = "0";
        }

    }

    let unsplited = splited.join("");

    document.getElementById("textareaEncrypt01").innerHTML = unsplited;
  }








    