//callback 
//là một hàm
//truyền qua đối số
//được gọi lại trong một hàm đối số nó
function myfunction(param) {
     param(123)
}

function mycallback(value) {
    console.log(value);
}
myfunction(mycallback);

//tạo một hàm map
var courses = [
  'java',
  'javascript',
  'php'
]
Array.prototype.map2 = function(callback) {
     var arraylenght = this.length;
     var output = [];
     for(var i = 0; i < arraylenght; ++i) {
         output.push(callback(this[i]))
     }
     return output;
}

var html = courses.map2(function(value) {
  return `<h2>${value}</h2>`
})
console.log(html.join(' '))
//for each
Array.prototype.forEach2 = function(callback) {
     for(var index in this) {
         if(this.hasOwnProperty(index)) {
           callback(this[index], index, this)
         }
    }
}

courses.forEach2(function(value, index, array) {
  console.log(value, index, array);
})
//reduce
var coureses2 = [
  1,2,3,4,5
];
Array.prototype.reduce2 = function(callback, result) {
      let i = 0;
      if(arguments.length < 2) {
        i = 1;
        result = this[0]
      }
      var arraylenght = this.length;
      for(; i < arraylenght; i++) {
        result = callback(result, this[i], i, this)
      }
      return result
}

const result2 = coureses2.reduce2(function(total, number, index, array) {
    console.log(total, number, index, array);
    return total + number; 
}, 10)
console.log(result2);