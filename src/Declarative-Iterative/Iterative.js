
  var numbers = [1,2,3,4,5]
  var doubled = []

  for(var i = 0; i < numbers.length; i++) {
    var newNumber = numbers[i] * 2
    doubled.push(newNumber)
  }
  console.log(doubled) //=> [2,4,6,8,10]
