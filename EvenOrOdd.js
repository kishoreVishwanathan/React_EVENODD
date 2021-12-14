import react from 'react';

class EvenOrOdd extends react.Component {
    render() {
        var arr=[25,45,56,8,4,36,1,10,87];
        var output=arr.filter(x=> x % 2 === 0)
        return(
            <center>
            <div>
                <h1>Get Even or Odd numbers</h1>
            </div>
            <h1>{output.join(", ")}</h1>
            </center>
        )
    }

}
export default EvenOrOdd 