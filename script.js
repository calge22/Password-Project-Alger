let words = new Map();

function preload() {
  loadStrings('beale.wordlist.asc.txt', createMap);
}
/**
 * This function goes through the word list line-by-line.
 * It then splits the line on any tab characters that appear, 
 *   recording only the first two as 'key' and 'value'
 * If the key is exactly five characters long, we assume the 
 *   line we are on is a line that contains a key/value pair
 *   then we store the word in the map with the key. 
 * 
 * This allows us to use the words Map later by simply using 
 *   a call to get, like so:
 * 
 * lookupKey = 12340
 * word = words.get(lookupKey)
 */

function createMap(strings) {
  for (let line of strings) {
    let [key, word] = line.split('\t');
    if (key.length === 5) {
      words.set(key, word);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white');
}

function draw() {
  let passwordheading = 'Here is your password:'
  //code to stylize the background and text of the password generator
  background('darkblue')
  fill('lightcyan')
  strokeWeight(8)
  stroke('purple')
  rect(100,65,400,120)
  noStroke()
  fill('darkblue')
  textSize(20)
  textFont('Georgia')
  textStyle(NORMAL)

  let password = '';

  text(passwordheading, 150, 100);

  for (let i = 0; i < 5; i++) {
    password += buildpassword();
  }

  let passwordLength = textWidth(password)

  textSize(25)
  textFont('Georgia')
  textStyle(NORMAL)

  text(password, 150, 150);
  noLoop();
}

function buildpassword() {
  let a = random([1, 2, 3, 4, 5, 6])
  let b = random([1, 2, 3, 4, 5, 6])
  let c = random([1, 2, 3, 4, 5, 6])
  let d = random([1, 2, 3, 4, 5, 6])
  let e = random([1, 2, 3, 4, 5, 6])
  //randomzed numbers correspone to the beale wordlist to generate phrases for the password. ".join" brings the phrases together to create the password
  let lookupKey = [a, b, c, d, e].join('');

  let x = words.get(lookupKey)

  return x;
}
//pressing enter will generate a new password
function keyPressed() {
  if (keyCode === RETURN) {
    // 
    redraw();
  }
}