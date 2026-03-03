const convertButton = document.querySelector(".convert-button");
const select = document.querySelector(".select-option");
const selectCountry = document.querySelector(".select-convert")

function convert() {
    const input = document.querySelector(".money")
    const currency = document.querySelector(".money-value")
    const currencyConvert = document.querySelector(".money-convert")
    const select = document.querySelector(".select-option")
    const selectCountry = document.querySelector(".select-convert")
    const dolar = 5.17
    const euro = 6.05
    const dolarToEuro = 0.86

    if (select.value == "dolar" && selectCountry.value == "real") {
        currencyConvert.innerText = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format (input.value / dolar)
    } 

    if (select.value == "euro" && selectCountry.value == "real") {
        currencyConvert.innerText = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format (input.value / euro)
    }

    currency.innerText = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format (input.value)

    if (selectCountry.value == "dolar" && select.value == "real") { 
        currencyConvert.innerText = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format (input.value * dolar)
        currency.innerText = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format (input.value)
    }

    if (selectCountry.value == "euro" && select.value == "real") {         
        currencyConvert.innerText = new Intl.NumberFormat("pr-BR", {
        style: "currency",
        currency: "BRL"
    }).format (input.value * euro)
        currency.innerText = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format (input.value)
    }

    if (selectCountry.value == "dolar" && select.value == "euro") {
        currencyConvert.innerText = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format (input.value * dolarToEuro)
        currency.innerText = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format (input.value)
    }

    if (selectCountry.value == "euro" && select.value == "dolar") {
        currencyConvert.innerText = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format (input.value / dolarToEuro)
        currency.innerText = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format (input.value)
    }   
}

function changeCurrency() {
        const currencyName = document.querySelector(".currency-title")
        const currencyImg = document.querySelector(".currency-image")
        const currencyNameConvert = document.querySelector (".currency-title-2")
        const currencyImgConvert = document.querySelector(".currency-image-2")
        
        if (select.value == "dolar") {
            currencyName.innerText = "Dólar Americano"
            currencyImg.src = "./assets/estados-unidos (1) 1.png"
        }

        if (select.value == "euro") {
            currencyName.innerText = "Euro"
            currencyImg.src = "./assets/Design sem nome 3.png"
        }
        
        if (select.value == "real") {
            currencyName.innerText = "Real Brasileiro"
            currencyImg.src = "./assets/brasil 2.png"
        }
        if (selectCountry.value == "real") {
            currencyNameConvert.innerText = "Real Brasileiro"
            currencyImgConvert.src = "./assets/brasil 2.png"
        }
 
        if (selectCountry.value == "dolar") {
            currencyNameConvert.innerText = "Dólar Americano"
            currencyImgConvert.src = "./assets/estados-unidos (1) 1.png"
        }
        if (selectCountry.value == "euro") {
            currencyNameConvert.innerText = "Euro"
            currencyImgConvert.src = "./assets/Design sem nome 3.png"
        }

        convert()
}
selectCountry.addEventListener("change", changeCurrency)
select.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convert)
