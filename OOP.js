//OOP còn gọi là Object Oriented Programming
//object constructor
function user(name, age, Class) {
     //taọ mô tả với this
     this.name = name;
     this.age = age;
     this.Class = Class;
     this.fullname = function() {
          return `${this.name} ${this.age}`
     }
}
user.prototype.home = 'van thang'
//tạo đối tượng (new)
var user1 = new user('binh', 18, '12c6');
var user2 = new user('minh', 25, 'ra truong');
var result = Object.entries(user1);
for(var i = 0; i < result.length; i++) {
     console.log(result[i])
}
console.log(user1)