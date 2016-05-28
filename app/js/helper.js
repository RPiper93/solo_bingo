function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i +1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

function count(array, value) {
  var count = 0;
  for (var i in array) {
    if (array[i] === value){
      count += 1;
    };
  };
  return count;
};