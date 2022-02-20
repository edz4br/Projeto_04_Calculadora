//List of variables
let resultBox = document.querySelector('.resultBox')
let resultBoxFalseOrTrue = true
let storeInResultBox = ''
let storeInResultBox1 = ''
let storeInResultBox2 = ''
let buttons = document.querySelectorAll('.button')
let arr = [...buttons]
let signals = document.querySelectorAll('.operate')
let arrSignals = [...signals]
let equalButton = document.querySelector('.equal')
let pickOperate = ''
let ifOperate = true
let checkDot = true
//List of functions
let enableInput = () => {
    for (let value of arr) {
        let number = value.getAttribute('data-value')
        if (value.getAttribute('data-value')) {
            value.addEventListener('click', () => {
                let checkLastChar = storeInResultBox.charAt(storeInResultBox.length - 1)
                if (number == '.') {
                    if (resultBoxFalseOrTrue === true && checkDot === true && checkLastChar !== ' ' && checkLastChar !== '' && checkLastChar !== '.') {
                        storeInResultBox += number
                        storeInResultBox1 += number
                        resultBox.textContent = storeInResultBox
                        checkDot = false
                    } else if (resultBoxFalseOrTrue === false && checkDot === true && checkLastChar !== ' ' && checkLastChar !== '' && checkLastChar !== '.') {
                        storeInResultBox += number
                        storeInResultBox2 += number
                        resultBox.textContent = storeInResultBox
                        checkDot = false
                    }
                }
                if (resultBoxFalseOrTrue === true && number !== '.') {
                    storeInResultBox += number
                    storeInResultBox1 += number
                    resultBox.textContent = storeInResultBox
                } else if (resultBoxFalseOrTrue === false && number !== '.') {
                    resultBoxFalseOrTrue = false
                    storeInResultBox += number
                    storeInResultBox2 += number
                    resultBox.textContent = storeInResultBox
                }
            })
        }
    }
}

let add = function (x, y) {
    x *= 1
    y *= 1
    let result = x + y
    storeInResultBox = result.toString()
    storeInResultBox1 = result.toString()
    storeInResultBox2 = ''
    resultBoxFalseOrTrue = true
    return result.toString()
}

let subtract = function (x, y) {
    return x - y
}

let multiply = function (x, y) {
    return x * y
}

let divide = function (x, y) {
    return x / y
}

let operate = function () {
    for (let value of arrSignals) {
        value.addEventListener('click', () => {
            let checkLastChar = storeInResultBox.charAt(storeInResultBox.length - 1)
            if (ifOperate === false) {
                calculate()
            }
            if (value.textContent === '+') {
                if (checkLastChar === '' || checkLastChar === '-') {
                    return
                }
                resultBoxFalseOrTrue = false
                checkDot = true
                storeInResultBox += ' + '
                pickOperate = '+'
                resultBox.textContent = storeInResultBox
                ifOperate = false
            }
            if (value.textContent === '-') {
                if (checkLastChar === '-') {
                    return
                }
                if (checkLastChar === '') {
                    storeInResultBox += '-'
                    storeInResultBox1 += '-'
                    resultBox.textContent = storeInResultBox
                    return
                }
                resultBoxFalseOrTrue = false
                checkDot = true
                storeInResultBox += ' - '
                pickOperate = '-'
                resultBox.textContent = storeInResultBox
                ifOperate = false
            }
            if (value.textContent === '*') {
                if (checkLastChar === '' || checkLastChar === '-') {
                    return
                }
                resultBoxFalseOrTrue = false
                checkDot = true
                storeInResultBox += ' * '
                pickOperate = '*'
                resultBox.textContent = storeInResultBox
                ifOperate = false
            }
            if (value.textContent === '÷') {
                if (checkLastChar === '' || checkLastChar === '-') {
                    return
                }
                resultBoxFalseOrTrue = false
                checkDot = true
                storeInResultBox += ' ÷ '
                pickOperate = '÷'
                resultBox.textContent = storeInResultBox
                ifOperate = false
            }

        })
    }
}
let calculate = function () {
    ifOperate = true
    let checkLastChar = storeInResultBox.charAt(storeInResultBox.length - 1)
    if (checkLastChar === ' ') {
        resultBox.textContent = storeInResultBox1
        storeInResultBox = resultBox.textContent
        storeInResultBox2 = ''
        resultBoxFalseOrTrue = true
        checkDot = true
        return
    }
    if (pickOperate === '+') {
        resultBox.textContent = add(storeInResultBox1, storeInResultBox2)
    }
    if (pickOperate === '-') {
        resultBox.textContent = subtract(storeInResultBox1, storeInResultBox2)
    }
    if (pickOperate === '*') {
        resultBox.textContent = multiply(storeInResultBox1, storeInResultBox2)
    }
    if (pickOperate === '÷') {
        resultBox.textContent = divide(storeInResultBox1, storeInResultBox2)
    }
    if (resultBox.textContent === 0 || resultBox.textContent === '0') {
        storeInResultBox = ''
        storeInResultBox1 = ''
        storeInResultBox2 = ''
        resultBoxFalseOrTrue = true
        checkDot = true
        return
    }
    if (resultBox.textContent === 'Infinity') {
        storeInResultBox = ''
        storeInResultBox1 = ''
        storeInResultBox2 = ''
        resultBoxFalseOrTrue = true
        checkDot = true
        return
    }
    storeInResultBox = resultBox.textContent
    storeInResultBox1 = resultBox.textContent
    storeInResultBox2 = ''
    resultBoxFalseOrTrue = true
    checkDot = true
}
let equal = function () {
    equalButton.addEventListener('click', calculate)
}
let delete_clear = function () {
    let delet = document.querySelector('.delete')
    let clear = document.querySelector('.clear')
    delet.addEventListener('click', () => {
        if (storeInResultBox.charAt(storeInResultBox.length - 1) == '.') {
            checkDot = true
            storeInResultBox = storeInResultBox.slice(0, -1);
            resultBox.textContent = storeInResultBox
            return
        }
        if (storeInResultBox.charAt(storeInResultBox.length - 1) == ' ') {
            pickOperate = ''
            storeInResultBox = storeInResultBox.slice(0, -3);
            resultBox.textContent = storeInResultBox
            return
        }
        storeInResultBox = storeInResultBox.slice(0, -1);
        resultBox.textContent = storeInResultBox
        if (resultBox.textContent == '') {
            resultBox.textContent = '0'
        }
        if (resultBoxFalseOrTrue === true) {
            storeInResultBox1 = storeInResultBox1.slice(0, -1);
        }
        if (resultBoxFalseOrTrue === false) {
            storeInResultBox2 = storeInResultBox2.slice(0, -1);
        }
    })
    clear.addEventListener('click', () => {
        resultBoxFalseOrTrue = true
        checkDot = true
        storeInResultBox = ''
        storeInResultBox1 = ''
        storeInResultBox2 = ''
        resultBox.textContent = '0'
    })
}

//Call on page start
delete_clear()
enableInput()
operate()
