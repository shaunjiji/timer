
//implement function that takes arguments frmo command line, slice array

let arg = process.argv.slice(2);

// loop over elements in the array, and use elements as arguments for function



const alarmClock = (arg) => { 
  for (let element of arg) {
    let convertElement = Number(element);
    if (convertElement > 0){
      setTimeout(() => {
        process.stdout.write('\x07');
      }, convertElement * 1000);
    }
    else {
      console.log("Please input a positive number");
      break;
    }
  }
}


alarmClock(arg);  
