const PressBotton = document.querySelector('.button-currency')
const Options = document.querySelector('.selects')
const CurrencyReal = document.querySelector('.currency-value-real')
const CurrencyDolar = document.querySelector('.currency-value-dolar')

const dolarToday = 5.62
const euroToday = 6.08

function buttonClick() {
        const InputCurrency = document.querySelector('.input-currency').value
        CurrencyReal.innerHTML = InputCurrency

        CurrencyReal.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
        }).format(InputCurrency)

        if(Options.value == 'dolar'){
                CurrencyDolar.innerHTML = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                }).format(InputCurrency / dolarToday)
        }

        if(Options.value == 'euro'){
                CurrencyDolar.innerHTML = new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'EUR'
                }).format(InputCurrency / euroToday)
        }
}

Options.addEventListener('change', function(){
        const currencyImg = document.querySelector('.image')
        const dolarName = document.querySelector('.currency-dolar')
        const InputCurrency = document.querySelector('.input-currency').value
        CurrencyReal.innerHTML = InputCurrency

        CurrencyReal.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
        }).format(InputCurrency)

        if(Options.value == 'euro'){
                currencyImg.src = './assets/euro.currency.png'
                dolarName.innerHTML = 'Euro'
                buttonClick()
        }

        if(Options.value == 'dolar'){
                currencyImg.src = './assets/estados-unidos (1) 1.png'
                dolarName.innerHTML = 'American dollar'
                buttonClick()
                }
        }       
)