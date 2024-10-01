const chkBtn = document.querySelector("#check-btn");
const inputTxtBx = document.querySelector('#text-input');
const resultsDiv = document.querySelector("div");
let revTextResults = "";

function noValue () {
  var inputTxt = "";
  var inputTxt = inputTxtBx.value;
  if (inputTxt === "") {
    alert("Please input a value");
  } else {
    reverseTxt();
  }
};

//I need a function that will reverse the text by iterating through the text and adding to an array

function reverseTxt (inputTxt) {
  var inputTxt = inputTxtBx.value;
  console.log(inputTxt);
  const reversedArray = [];
  for (i=1; i<inputTxt.length+1; i++) {
    reversedArray.push(inputTxt[inputTxt.length-[i]]);
  }
  // .tostring places commas between letters, so use .join
  revTextResults = ignoreSpecialChar(reversedArray.join("").toLowerCase());
  console.log(revTextResults);
  palindromeChk();
};

function ignoreSpecialChar (string) {
  return string.replace(/[-/:_,\s.*+?^${}()|[\]\\]/g, "");
}

function palindromeChk () {
  var inputTxt = inputTxtBx.value;  
  var inputTxtToChk = ignoreSpecialChar(inputTxtBx.value.toLowerCase());
  if (inputTxtToChk === revTextResults) {
    resultsDiv.innerText = (`${inputTxt} is a palindrome`);
  } else {
    resultsDiv.innerText = (`${inputTxt} is not a palindrome`);
  }

};


// add the event listener with a callback function
chkBtn.addEventListener('click', noValue);