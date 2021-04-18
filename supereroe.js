let navbar = document.querySelector('#navbar')
let navbarBrand = document.querySelector('#navbarBrand')
let navbarCTAScroll = document.querySelector('#navbarCTAScroll')


if(window.innerWidth > 20){

  document.addEventListener('scroll',()=> {

    if (window.pageYOffset > 20) {
        navbar.classList.remove ('bg-transparent')
        navbar.classList.add ('bg-white','shadow')
        navbarBrand.src = "./img/logocolore.png";
    }
      else {
        navbar.classList.remove ('bg-white','shadow')
        navbar.classList.add ('bg-transparent')
        navbarBrand.src = "./img/logobianco.png";
       }

      if(window.pageYOffset > 450) {
        navbarCTAScroll.classList.remove('d-none');
      }
      else {
        navbarCTAScroll.classList.add('d-none');
      }

      })


} else {
  navbar.classList.add ('bg-white')
  navbarBrand.src = "./img/logocolore.png"

}

/* timer */
let final = new Date ('April 30, 2021')

let giorniMancanti = document.querySelector ('#giorniMancanti')
let oreMancanti = document.querySelector ('#oreMancanti')
let minutiMancanti = document.querySelector ('#minutiMancanti')
let secondiMancanti = document.querySelector ('#secondiMancanti')

function timer() {
  let today = new Date()
  let diff = final - today
  let secondi = Math.floor (diff/1000 % 60)
  let minuti = Math.floor ((diff/ (1000*60)) % 60)
  let ore = Math.floor ((diff/ (1000 * 60 * 60)) % 24)
  let giorni  = Math.floor ((diff/ (1000 * 60 * 60 * 24)))

  giorniMancanti.innerHTML = (giorni > 9) ? giorni : "0" + giorni
  oreMancanti.innerHTML = (ore > 9) ? ore : "0" + ore
  minutiMancanti.innerHTML = (minuti > 9) ? minuti : "0" + minuti 
  secondiMancanti.innerHTML = (secondi > 9) ? secondi : "0" + secondi
}
setInterval(timer,1000)


