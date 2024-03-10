function integrate(){
    const INTEGarray = document.getElementById("Integration").value.split(" "); //Split input data by space
 var lowerbound = parseInt(INTEGarray[0]); // Convert to integer
 var upperbound = parseInt(INTEGarray[1]); // Convert to integer
 var coefficient = parseInt(INTEGarray[2]); // Convert to integer
 var powerone = parseInt(INTEGarray[3]); // Convert to integer
 var signone = INTEGarray[4]; // Char
 var coefficient2 = parseInt(INTEGarray[5]); // Convert to integer
 var powertwo = parseInt(INTEGarray[6]); // Convert to integer
 var signtwo = INTEGarray[7]; // Char
 var lastCoeff = parseInt(INTEGarray[8]); // Convert to integer
     let result = 0;
    
 for(let i = lowerbound; i <= upperbound; i++){
      result += (coefficient * Math.pow(i, powerone)); //Get the integral for the first term
 }
   let secondresult = 0;
 for(let i = lowerbound; i <= upperbound; i++){
     secondresult += (coefficient2 * Math.pow(i, powertwo)); //Get the integral for the second term
 } 
   let thirdresult = 0;
 for(let i = lowerbound; i <= upperbound; i++){
     thirdresult += (lastCoeff * i); //Get the integral for the third term
 }
 if(signone == "+"){
     result += secondresult; //Depending on the operation, add or subtrack the integral of the second term from the first
 } else {
     result = result - secondresult;
 }
 if(signtwo == "+"){
     result += thirdresult;
 } else {
     result = result - thirdresult;
 }
     alert("Result is " + result);
 }
 function runstats(){ 
     var Statsarray = document.getElementById("NumberStatistics").value;
     var ArraySeq = Statsarray.split(/[ ,]+/).map(Number);; //Map the input into an array of numbers, split by space or comma

     let highest = Math.max(...ArraySeq);
     document.getElementById("highestnumber").textContent = highest;

     let lowest = Math.min(...ArraySeq);
     document.getElementById("lowestnumber").textContent = lowest;
     document.getElementById("lowestnumber-2").textContent = lowest;
     let average = ArraySeq.reduce((acc, val) => acc + val, 0) / ArraySeq.length;
     document.getElementById("averagenumber").textContent = average;
     var lengthOfArray = ArraySeq.length;
     var fourthQuad = Math.floor(lengthOfArray / 4);
     var midQuad = Math.floor(lengthOfArray / 2);
     var firstQuad = lengthOfArray - fourthQuad;

  ArraySeq.sort(function(a, b) {
   return a - b;
 });
   for(i in ArraySeq){
     console.log(ArraySeq[i]); //Just to check, you can get rid of this but it helps in development to track what numbers youre working with
   }

   var FstQuadOne = ArraySeq[fourthQuad]; //Get 25 percentile
   var FstQuadTwo = ArraySeq[midQuad]; //Get median
   var FstQuadThree = ArraySeq[firstQuad]; //Get 75 percentile
   document.getElementById("25number").textContent = FstQuadOne;
   document.getElementById("50number").textContent = FstQuadTwo;
   document.getElementById("75number").textContent = FstQuadThree;
   document.getElementById("25number-2").textContent = FstQuadOne;
   document.getElementById("50number-2").textContent = FstQuadTwo;
   document.getElementById("75number-2").textContent = FstQuadThree;
   document.getElementById("100number").textContent = highest;
   document.getElementById("Statistics").style.display = "block"; //Show the hidden paragraphs
   document.getElementById("Statistics-2").style.display = "block"; //Show the hidden paragraphs
   document.getElementById("Statistics-3").style.display = "block"; //Show the hidden paragraphs
   document.getElementById("Statistics-4").style.display = "block"; //Show the hidden paragraphs
   document.getElementById("Statistics-5").style.display = "block"; //Show the hidden paragraphs
}