const clock = document.getElementById('clock')

setInterval(function() {
    let date = new Date();
    const time = date.toLocaleTimeString();
    clock.innerHTML = `<span>${time}</span>`
}, 1000)