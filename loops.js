function forLoop (array) {
  for (let i=0; i<25; i++) {
      return `"I am ${i + 1} strange loop${i===0 ? '' : 's'}!"`;
  }
}

function whileLoop (n) {
  while (n>0) {
    console.log(n--);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop (array) {
  do {
    if (array.length>0) {
       array.shift();
    } 
  } while (maybeTrue());
  return array;
}