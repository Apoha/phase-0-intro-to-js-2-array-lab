// Write your solution here!



const cats = ["Milo", "Otis", "Garfield"];



//  function beforeEach (){
//      cats.length = 0;
//      cats.push('Milo', 'Otis', 'Garfield');
  


// 1 -- DESTRUCTIVELY APPENDCAT

    function destructivelyAppendCat(name){
        cats.push(name)
    }

    destructivelyAppendCat.cats.push("Ralph")



    // 2 --DESTRUCTIVELY PREPENDCAT

    function destructivelyPrependCat(name){
        cats.unshift(name)
    }

    destructivelyAppendCat.cats.unshift("Bob")





// 3 --- DESTRUCTIVELY REMOVELASTCAT

    function destructivelyRemoveLastCat(){
        cats.pop()
    }

    destructivelyRemoveLastCat.cats.pop()






    // 4 -- DESTRUCTIVELY REMOVELASTCAT

    function destructivelyRemoveFirstCat(){
        cats.shift()
    }

    destructivelyRemoveFirstCat.cats.shift()







    // 5 -- DESTRUCTIVELY APPENDCAT

    
    function appendCat(name){
        const newCats = [...cats, name]
 return newCats;
    }
    appendCat.newCats('Broom')





    // 5 -- DESTRUCTIVELY PREPENDCAT


    function prependCat(name){
        const newCats = [name,...cats]
 return newCats;
    }
    prependCat.newCats('Arnold')





  // 6 --- DESTRUCTIVELY REMOVELASTCAT

    function removeLastCat(){
        const newCats = [...cats]
        newCats.pop();
 return newCats;
    }


    // 7 --- DESTRUCTIVELY REMOVEFIRSTCAT

    function removeFirstCat(){
        const newCats = [...cats]
        newCats.shift();
 return newCats;
    }

