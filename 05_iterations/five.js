const coding = ["ruby", "js", "cpp", "python", "java"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        LanguageName: "Javascript",
        LanguageFileName: "js"
    },
    {
        LanguageName: "Python",
        LanguageFileName: "py"
    },
    {
        LanguageName: "Java",
        LanguageFileName: "java"
    },
]

myCoding.forEach( (item)=> {
    console.log(item.LanguageName);
} )