// const coding = ["ruby", "js", "cpp", "python", "java"]

// const vlaues = coding.forEach( (item)=> {
//     console.log(item);
//     return item
// })
// console.log(vlaues);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// newNum = myNums.filter( (num)=> num > 4 )

// newNum = myNums.filter( (num)=> {
//     return num > 4
// } )


// const newNums = []

// myNums.forEach( (num)=> {
//     if(num > 4){
        
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const Books = [ 
    { title: 'Book One', genre: 'history', publish: '1989', edition: '2008' },
    { title: 'Book Two', genre: 'Science', publish: '1992', edition: '2004' },
    { title: 'Book Three', genre: 'Science', publish: '1996', edition: '2012' },
    { title: 'Book Four', genre: 'Fiction', publish: '1985', edition: '2022' },
    { title: 'Book Five', genre: 'history', publish: '1987', edition: '2006' },
    { title: 'Book Six', genre: 'Non-Fiction', publish: '1991', edition: '2013' },
    { title: 'Book Seven', genre: 'Science', publish: '1993', edition: '2009' },
    { title: 'Book Eight', genre: 'Fiction', publish: '1997', edition: '2015' },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: '1984', edition: '2011' },
 ];


let userBooks = Books.filter( (bk) => bk.genre === 'history' )

userBooks = Books.filter( (bk) => {
    return bk.publish >= 1990 && bk.genre === 'Fiction'
} )

console.log(userBooks);