
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
        
        console.log(BMIData)

        const resSection = document.querySelector('#result')
        let title = document.createElement('h2')
        let content = document.createElement('p')

        if (BMIData <=  range.underweightLimit) {
            title.innerHTML = 
            `
            <h2>Underweight</h2>
            `
            
            content.innerHTML = 
            `
            <p>If your BMI is less than 18.5, it falls within the underweight range.</p>
            `
        }
        else if (BMIData <= range.healthyWeightLimit) {
            title.innerHTML = 
            `
            <h2>Healthy Weight</h2>
            `

            content.innerHTML = 
            `
            <p>If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range.</p>
            `
        }
        else if (BMIData <= range.overweightLimit) {
            title.innerHTML = 
            `
            <h2>Overweight</h2>
            `
            
            content.innerHTML = 
            `
            <p>If your BMI is 25.0 to 29.9, it falls within the overweight range.</p>
            `
        }
        else {
            title.innerHTML = 
            `
            <h2>Obese</h2>
            `
            
            content.innerHTML = 
            `
            <p>If your BMI is 30.0 or higher, it falls within the obese range.</p>
            `
        }  
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
        const height = amount[1]
        let BMIResult = weight / height ** 2
        Utilities.formatAmount(BMIResult)
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

    formatAmount(BMIResult) {
        BMIResult.toFixed(2)
    }
}

const App = {
    init(event) {
        Utilities.preventDefaultAction(event)
        Result.show()
    }
}