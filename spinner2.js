
const frames = ['|   ', '/   ', '-   ', '\\   '];//store all the spin into a variable
const spinner = (spin) => {//pass the spin
  let index = 0;//set an initial index
  function displayFrame() {//create afunction to display the spin
    process.stdout.write(`\r${spin[index]}`);//add /r to rrreturn the carriage after every item spins
    index = (index + 1) % spin.length;//get the remainder that will always stay in the range of our variable i.e 0,1,2,3
    setTimeout(displayFrame,200); // Adjust the delay as needed(or the speed)
  }

  displayFrame();
}

spinner(frames);