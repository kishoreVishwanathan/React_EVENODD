import react from 'react';

class EvenOrOdd extends react.Component {
    // render() {
    //     var arr=[25,45,56,8,4,36,1,10,87];
    //     var output=arr.filter(x=> x % 2 === 0)
    //     return(
    //         <center>
    //         <div>
    //             <h1>Get Even or Odd numbers</h1>
    //         </div>
    //         <h1>{output.join(", ")}</h1>
    //         </center>
    //     )
    // }
    render() {
        var value = 0;
        var array = [1, 2, 3];
        var even = [];
        var odd = [];
        var evens = false;
        var odds = false;

        function getData(val) {
            value = val.target.value;
        }

        function handle() {
            for (let i = 0; i < value; i++) {
                array[i] = Math.floor(Math.random() * 100) + 1;
            }
            console.log(array);
        }

        function oddDisplay() {
            if (evens === false) {
            odds = true;
            }
            else {
                evens = false;
                odds = true;
            }
            let i = 0;
            odd = [];
            console.log(array.length);
            while (i <= array.length) {
                if (array[i] % 2 !== 0) {
                    if (array[i] !== undefined) {
                        odd.push(array[i]);
                    }
                }
                i++;
            }
            console.log(odd);
        }

        function evenDisplay() {
            if (odds === false) {
            evens = true;
            } else {
                odds = false;
                evens = true;
            }
            let i = 0;
            even = [];
            console.log(array.length);
            while (i <= array.length) {
                if (array[i] % 2 === 0) {
                    even.push(array[i]);
                }
                i++;
            }
            console.log(even);
        }
        return (
            <>
                <header>
                    <div className="heading">NUMBER FILTER</div>
                </header>
                <br></br>
                <div>
                    <input type="text" placeholder="Enter the number of inputs" className="numbers" onChange={getData}></input>
                </div><br></br>
                <div>
                    <button className="random" onClick={handle}>Generate Random Numbers</button>
                </div><br></br>
                <div className="buttons">
                    <button onClick={oddDisplay}>ODD</button>&emsp;<span><button onClick={evenDisplay}>EVEN</button></span>
                </div>
                <div>
                    <h2 className="heading">Filtered Numbers</h2>
                    {odds ? <h1>{odd.join(", ")}</h1> : <h1>{even.join(", ")}</h1> }
                </div>
            </>
        )

    }
}
export default EvenOrOdd 