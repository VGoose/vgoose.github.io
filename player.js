const pic = document.getElementById("pic")
let counter = 1
setInterval(() => {
    pic.setAttribute("src", `./${counter % 4}.jpg`)
    counter++
}, 3000)
