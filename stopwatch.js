let sec = 0;
let min = 0;
let hr = 0;
let interval;

function start() {
  document.getElementById("start-btn").disabled = true;
  counter();
  interval = setInterval(counter, 1000);
}

function pause() {
  document.getElementById("start-btn").disabled = false;
  clearInterval(interval);
}

function reset() {
  document.getElementById("start-btn").disabled = false;

  clearInterval(interval);

  sec = 0;
  min = 0;

  document.getElementById("watch").innerHTML = "00:00:00";
}

function counter() {
  sec++;

  if (sec == 60) {
    min++;
    sec = 0;

    if (min == 60) {
      min = 0;
      hr++;
    }
  }

  document.getElementById("watch").innerHTML =
    twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec);
}

function twoDigits(digit) {
  if (digit < 10) return "0" + digit;
  return digit;
}
