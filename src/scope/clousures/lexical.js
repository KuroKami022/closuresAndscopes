const myGlobal = 0;

function myFn() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { //intern function
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child()
    }

    return parent()
}

myFn();