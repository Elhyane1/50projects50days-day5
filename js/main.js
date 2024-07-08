let l = document.getElementsByTagName("p")[0]
let container = document.querySelector('.container')
let i = 1
let myI = setInterval(loading, 40)
let blur = getComputedStyle(container).filter
let load_number = document.querySelector('.loading')
function loading(){
    if (i <= 100){
        l.innerHTML = `${i}%`
        container.style.filter = `blur(${transforming(i, 10)}px)`
        load_number.style.opacity = transforming(i, 1)
        i += 1
    }else{
        clearTimeout(myI)
    }
}

function transforming(n, a){
    return a - (a * n/100)
}
