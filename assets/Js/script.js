const amount = document.querySelector("#amount");
const result = document.querySelector("#result");
const btn = document.querySelector("button");
const select = document.querySelectorAll("select");
const body = document.querySelector("body");
const reject = document.querySelector(".reject");

const link = fetch('https://api.frankfurter.app/currencies')
link.then((respones) => {
    return respones.json()
})
.then((res) => {
    let arr = Object.entries(res)
    arr.forEach(arrays)
})

function arrays(val){
    let value = val[0]
    let opt = `<option value="${value}">${value}</option>`
    select[0].innerHTML += opt
    select[1].innerHTML += opt

}

btn.addEventListener('click', () => {
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputValue = amount.value
    if(curr1===curr2){
        reject.innerHTML = `<span>"Please change 'To' value"</span>`  
    }
    else{
        reject.innerHTML = ""
        convert(curr1,curr2,inputValue)
    }
})


function convert(curr1, curr2, inputValue){
    const host = "api.frankfurter.app"
    fetch(`https://${host}/latest?amount=${inputValue}&from=${curr1}&to=${curr2}`)
    .then(respon => respon.json())
    .then((data) => {
        let output = Object.values(data.rates)[0]
        result.value = output
        console.log(output)
    })
}
