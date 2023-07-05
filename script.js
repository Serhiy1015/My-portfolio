const select = document.querySelector('select')
const allLang = ['ua', 'eng']

select.addEventListener('change', changeURLLanguage)

function changeURLLanguage(){
    let lang = select.value
    location.href = window.location.pathname + '#' + lang
    location.reload()
}

function changeLanguage() {
    let hash = window.location.hash
    hash = hash.substr(1)
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua'
        location.reload()
    }
    select.value = hash

    document.querySelector('.my-name').innerHTML = langArr['my-name'][hash]
    document.querySelector('.stack').innerHTML = langArr['stack'][hash]
    document.querySelector('.librares').innerHTML = langArr['librares'][hash]
    document.querySelector('.my-projects-h1').innerHTML = langArr['my-projects-h1'][hash]
    document.querySelector('.click-p').innerHTML = langArr['click-p'][hash]
    document.querySelector('.tatto-h3').innerHTML = langArr['tatto-h3'][hash]
    document.querySelector('.tatto-p').innerHTML = langArr['tatto-p'][hash]
    document.querySelector('.quiz-h3').innerHTML = langArr['quiz-h3'][hash]
    document.querySelector('.quiz-p').innerHTML = langArr['quiz-p'][hash]
    document.querySelector('.password-h3').innerHTML = langArr['password-h3'][hash]
    document.querySelector('.password-p').innerHTML = langArr['password-p'][hash]
    document.querySelector('.building-h3').innerHTML = langArr['building-h3'][hash]
    document.querySelector('.building-p').innerHTML = langArr['building-p'][hash]
    document.querySelector('.notes-h3').innerHTML = langArr['notes-h3'][hash]
    document.querySelector('.notes-p').innerHTML = langArr['notes-p'][hash]
    document.querySelector('.stopwatch-h3').innerHTML = langArr['stopwatch-h3'][hash]
    document.querySelector('.stopwatch-p').innerHTML = langArr['stopwatch-p'][hash]
}

changeLanguage()