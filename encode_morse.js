var AudioContext = window.AudioContext || window.webkitAudioContext;
var ctx = new AudioContext();
var dot = 1.2 / 15;

document.getElementById("demo").onsubmit = function() {
    var t = ctx.currentTime;

    var oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 600;

    var gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, t);

    this.code.value.split("").forEach(function(letter) {
        switch(letter) {
            case ".":
                gainNode.gain.setValueAtTime(1, t);
                t += dot;
                gainNode.gain.setValueAtTime(0, t);
                t += dot;
                break;
            case "-":
                gainNode.gain.setValueAtTime(1, t);
                t += 3 * dot;
                gainNode.gain.setValueAtTime(0, t);
                t += dot;
                break;
            case " ":
                t += 7 * dot;
                break;
        }
    });

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();

    return false;
}

document.getElementById("demo2").onsubmit = function() {
    var t = ctx.currentTime;

    var oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 600;

    var gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, t);
  
    var encode = '';
    this.code.value.split("").forEach(function(letter) {
      switch(letter) {
            case "A":
                encode = encode + '.-'
                console.log('.-')
                break;
            case "B":
                encode = encode + '-..'
                console.log('-..')
                break;
            case "C":
                encode = encode + '-.-.'
                console.log('-.-.')
                break;
            case " ":
                break;
      }
      encode = encode + ' '
      console.log(letter)
    })              
    console.log(encode)
    return false;
}
