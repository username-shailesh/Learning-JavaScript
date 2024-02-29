const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["flash", "batman", "superman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_arr = [1, 2, 3, 4, 5, [6, 7], [4, 5, [8, 9, [3, 4, 5]]]]
// const new_another_arr = another_arr.flat(Infinity)
const new_another_arr = another_arr.flat(4)

console.log(new_another_arr);


console.log(Array.isArray("Shailesh"))
console.log(Array.from("Shailesh"))
console.log(Array.from({name: "Shailesh"}))  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));