
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

        const content = document.querySelector('#result')
        
        if (BMIData <=  range.underweightLimit) {    
            content.innerHTML = 
            `
            <hr>
            <div class="result">
                <div class="content">
                    <h2>Underweight</h2>
                    <p>If your BMI is less than 18.5, it falls within the underweight range.</p>
                </div>
                <div class="bmi">${BMIData}</div>
            </div>
            `

            document.querySelector('div.bmi').classList.add('danger')
        }
        else if (BMIData <= range.healthyWeightLimit) {                
            content.innerHTML = 
            `
            <hr>
            <div class="result">
                <div class="content">
                    <h2>Healthy Weight</h2>
                    <p>If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range.</p>
                </div>
                <div class="bmi">${BMIData}</div>
            </div>
            `

            document.querySelector('div.bmi').classList.add('healthy')
        }
        else if (BMIData <= range.overweightLimit) {  
            content.innerHTML = 
            `
            <hr>
            <div class="result">
                <div class="content">
                    <h2>Overweight</h2>
                    <p>If your BMI is 25.0 to 29.9, it falls within the overweight range.</p>
                </div>
                <div class="bmi">${BMIData}</div>
            </div>
            `

            document.querySelector('div.bmi').classList.add('caution')
        }
        else {           
            content.innerHTML = 
            `
            <hr>
            <div class="result">
                <div class="content">
                    <h2>Obese</h2>
                    <p>If your BMI is 30.0 or higher, it falls within the obese range.</p>
                </div>
                <div class="bmi">${BMIData}</div>
            </div>
            `

            document.querySelector('div.bmi').classList.add('danger')
        }  
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

const ErrorVerification = {
    verification(){
        const weight = document.querySelector('#weight')
        const height = document.querySelector('#height')
        const error = document.getElementsByClassName('error')

        ErrorVerification.deleteError(error)

        if (weight.value === "" && height.value === "") 
        {
            for (i = 0; i < error.length; i++) {
                error[i].innerHTML = "Error - Please fill out this field"
                error[i].classList.add('active')
            }
            
            return false
        }
        
        if ((height.value > 200 || height.value < 70) && (weight.value > 400 || weight.value < 40)) {
            error[0].innerHTML = "Error - Please enter a valid value (70cm - 200cm)"
            error[0].classList.add('active')

            error[1].innerHTML = "Error - Please enter a valid value (40kg - 400kg)"
            error[1].classList.add('active')

            return false
        }

        if (height.value > 200 || height.value < 70) 
        {
            error[0].innerHTML = "Error - Please enter a valid value (70cm - 200cm)"
            error[0].classList.add('active')

            return false
        }

        if (weight.value > 400 || weight.value < 40) 
        {
            error[1].innerHTML = "Error - Please enter a valid value (40kg - 400kg)"
            error[1].classList.add('active')

            return false
        }

        return true
    },

    deleteError(error){
        for (i = 0; i < error.length; i++){
            error[i].classList.remove('active')
        }
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
        if (ErrorVerification.verification()) {
            Result.show()
        }
    }
}