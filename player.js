const pic = document.getElementById("pic")
let counter = 1
setInterval(() => {
    pic.setAttribute("src", `./${counter % 5}.jpg`)
    counter++
}, 6000)
