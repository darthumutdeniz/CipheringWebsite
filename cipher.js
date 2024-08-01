let alpabethEn = "abcdefghijklmnopqrstuvwxyz";
let alpabethTr = "abcçdefgğhıijklmnoöprsştuüvyz";
document.getElementById("alphabeth").value = alpabethEn;

const cipherButton = document.getElementById("cipher");
const DecipherButton = document.getElementById("Decipher");
cipherButton.addEventListener("click", () =>{
    Vigenere(1);
});
DecipherButton.addEventListener("click", () => {
    Vigenere(-1);
});

function Vigenere(CypyreIndex){
    let input = document.getElementById("inputText").value;
    let alpabeth = document.getElementById("alphabeth").value;
    if (alpabeth === "") 
    {
        alpabeth = alpabethEn;
    }
    let key = document.getElementById("key").value;
    let lowerText = input.toLowerCase();
    let lowerKey = key.toLowerCase();
    let anahtarNums = [] ;
    let textNums = [];
    let newtextNums = [];
    let newText = "";

    lowerKey.split("").forEach(element => {
        if(alpabeth.includes(element)) { anahtarNums.push(alpabeth.indexOf(element));}
        else {console.log("The key cant have non letter characters " + element +" wont be tolerated"); }
    });

    if (anahtarNums.length === 0){
        anahtarNums.push(0);
    }

    lowerText.split("").forEach(element => {
        if(alpabeth.includes(element)) 
        {
            textNums.push(alpabeth.indexOf(element));}
        else {textNums.push(element + "."); }
    });

    let j = 0;
    for(let i = 0; i < textNums.length; i++)
    {
        if(typeof(textNums[i]) === "number" )
        {
            let newTextNum = (textNums[i] + CypyreIndex * anahtarNums[j % anahtarNums.length]) % alpabeth.split("").length;
            if (newTextNum < 0) { newTextNum = alpabeth.split("").length + newTextNum; }
            newtextNums.push(newTextNum);
            j++;
            if(input[i] === lowerText[i])
            {
                newText += alpabeth[newTextNum];
            }
            else{
                newText += alpabeth[newTextNum].toUpperCase();
            }
        }
        else{
            newtextNums.push(textNums[i]);
            newText += textNums[i][0];
        }
    }
    document.getElementById("newText").innerHTML = newText;

}