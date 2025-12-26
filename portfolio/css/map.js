const numbers = [1, 2, 3, 4, 5]
const names = ['akash', 'pratham', 'ansh']

// [3, 4, 5, 6, 7]
const result = numbers.map((num) => {
  return num + 2
})
console.log(result)

// ['AKASH', 'PRATHAM', 'ANSH']
const result2 = names.map((name) => {
  return name.toUpperCase()
})
console.log(result2)
