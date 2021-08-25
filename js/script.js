document.addEventListener('DOMContentLoaded', ()=> {
    let timer_ = 1630025523//unix timestamp
    let flipdown = new FlipDown(timer_)
    .start()
    .ifEnded(() => {
        document.querySelector('.flipdown').innerHTML = '<h2>Timer is ended</h2>'
    })
})