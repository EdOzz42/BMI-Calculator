
const Result = {
    show() {
        DOM.delete()
        DOM.create()
    }
}

const DOM = {
    create() {
        const BMIData = CalculateBMI.calculate()
        const range = {
            underweightLimit: 18.5,
            healthyWeightLimit: 24.9,
            overweightLimit: 29.9
        }

        let title = document.createElement('h2')
        let content = document.createElement('p')

        if (BMIData <=  range.underweightLimit) {
            title.innerHTML = 
            `
            <hr>
            <div class="result-title">
                <h2>Underweight</h2>
                <div class="bmi-result">${BMIData}</div>
            </div>
            `
            
            content.innerHTML = 
            `
            <p>If your BMI is less than 18.5, it falls within the underweight range.</p>
            `
            DOM.appendChild(title, content)
            document.querySelector('div.bmi-result').classList.add('danger')
        }
        else if (BMIData <= range.healthyWeightLimit) {     
            title.innerHTML = 
            `
            <hr>
            <div class="result-title">
                <h2>Healthy Weight</h2>
                <div class="bmi-result">${BMIData}</div>
            </div>
            `

            content.innerHTML = 
            `
            <p>If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range.</p>
            `
            DOM.appendChild(title, content)
            document.querySelector('div.bmi-result').classList.add('healthy')
        }
        else if (BMIData <= range.overweightLimit) {
            title.innerHTML = 
            `
            <hr>
            <div class="result-title">
                <h2>Overweight</h2>
                <div class="bmi-result">${BMIData}</div>
            </div>
            `
            
            content.innerHTML = 
            `
            <p>If your BMI is 25.0 to 29.9, it falls within the overweight range.</p>
            `
            DOM.appendChild(title, content)
            document.querySelector('div.bmi-result').classList.add('caution')
        }
        else {
            title.innerHTML = 
            `
            <hr>
            <div class="result-title">
                <h2>Obese</h2>
                <div class="bmi-result">${BMIData}</div>
            </div>
            `
            
            content.innerHTML = 
            `
            <p>If your BMI is 30.0 or higher, it falls within the obese range.</p>
            `
            DOM.appendChild(title, content)
            document.querySelector('div.bmi-result').classList.add('danger')
        }  
        
    },

    appendChild(title, content) {
        const resSection = document.querySelector('#result')

        resSection.appendChild(title)
        resSection.appendChild(content)
    },

    delete() {
        const resultSection = document.querySelector('#result')
        resultSection.innerHTML = ''
    }
}

const CalculateBMI = {
    calculate() {
        const amount = GetData.getWeightAndHeight()
        const weight = amount[0]
        let height = amount[1]
        height = height / 100
        let BMIResult = Utilities.formatAmount(weight / height ** 2)
        return BMIResult
    }
}

const GetData = {
    getWeightAndHeight() {
        const weight = document.querySelector('#weight').value
        const height = document.querySelector('#height').value

        return [weight, height]
    }
}

const Utilities = {
    preventDefaultAction(event) {
        event.preventDefault()
    },

    formatAmount(value) {
        return value.toFixed(2)
    }
}

const App = {
    init(event) {
        Utilities.preventDefaultAction(event)
        Result.show()
    }
}