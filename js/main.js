function pobierz() {
    const wybor = document.getElementById('tabela').value
    const url = `http://api.nbp.pl/api/exchangerates/tables/${wybor}/?format=json`
    const kursy = document.getElementById('kursy')
    kursy.innerHTML = ''
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            for (let i = 0; i < res[0].rates.length; i++) {
                let newDiv = document.createElement('div')
                let spanWithCurrency = document.createElement('span')
                spanWithCurrency.setAttribute('id', "spanWithCurrency")
                spanWithCurrency.innerHTML = res[0].rates[i].currency
                newDiv.appendChild(spanWithCurrency)
                if (wybor === "C") {
                    let spanWithBid = document.createElement('span')
                    let spanWithAsk = document.createElement('span')
                    spanWithBid.innerText = res[0].rates[i].bid
                    spanWithAsk.innerText = res[0].rates[i].ask
                    newDiv.appendChild(spanWithBid)
                    newDiv.appendChild(spanWithAsk)
                } else {
                    let spanWithMid = document.createElement('span')
                    spanWithMid.innerText = res[0].rates[i].mid
                    spanWithMid.style.color = "red"
                    newDiv.appendChild(spanWithMid)
                }
                kursy.appendChild(newDiv)
            }
        })
}   