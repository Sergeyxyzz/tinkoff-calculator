let hours = document.querySelector('#hours'),
    minutes = document.querySelector('#minutes'),
    hoursDisplay = document.querySelector('.hoursDisplay'),
    minutesDisplay = document.querySelector('.minutesDisplay'),
    resultDisplay = document.querySelector('.resultDisplay'),
    btn = document.querySelector('.btn'),
    h,m,result;      

hours.addEventListener('input', function() {
    let checkingRegExp = new RegExp(/^(\d)$/g);
    let resHours = eval(this.value)

    renderHours(resHours)
})

minutes.addEventListener('input', function() {
    let resMinutes = eval(this.value)
    renderMinutes(resMinutes)
})

function renderHours(hours) {
    h = hours
    hoursDisplay.innerHTML = `${hours ? hours : 0} Часов`
}

function renderMinutes(minutes) {
    m = minutes
    minutesDisplay.innerHTML = `${minutes ? minutes : 0} Минут`
}

btn.addEventListener('click', function() {
    let resH = Math.floor(((h * 60) + m) / 60)
    let resM = ((h * 60) + m) % 60
    resultDisplay.innerHTML = `${isNaN(resH) || isNaN(resM) ? 'Заполните оба поля: ЧАСЫ, МИНУТЫ' : `Вы отработали фактического времени <b>${resH} часов</b> и <b>${resM} минут</b>`} `
})