
function convertToCelsius(fahren) {
    const celsius = (fahren -32)*5/9 ;
return celsius ;
}

function createMessage(fahren, celc) 
{ let message =fahren+ 'F=' + celc + 'C'
     if (fahren<32){
  message+='It is very cold'} 
  else  if (fahren>32 && fahren<64){message+='It is cold'}
  else if (fahren>64 && fahren<86){message+='It is warm'}
  else if (fahren >86) { message+='It is hot'}
  return message
}

function rand(max) {
    return Math.random()*max;}


let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius");
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc= convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);