const  slideCases = () => {
  const btnsCase = document.querySelectorAll('.slider-cases__button')
  const contentsCase = document.querySelectorAll('.slider-cases__content')
  const itemsCase = document.querySelectorAll('.slider-cases__item')

  const slideOpen = (content) => {
    if (!content.classList.contains('_active')) {
      content.classList.add('_active')
      content.style.width = 'aoto'

      let width = content.clientWidth + 'px'

      content.style.width = '0px'

      setTimeout(() => {
        content.style.width = width
      }, 0);
    }
  }

  const slideClose = (content) => {
    if (content.classList.contains('_active')) {
      content.style.width = '0px'

      content.addEventListener('transitionend', () => {
        content.classList.remove('_active')
      }, {
        once: true
      })
    }
  }

  btnsCase[0].classList.add('_active')
  contentsCase[0].classList.add('_active')
  itemsCase[0].classList.add('_active')

  for (let btn of btnsCase) {
    btn.addEventListener('click', () => {
      for (let el of btnsCase) {
        el.classList.remove('_active')
      }

      for (let el of contentsCase) {
        // slideClose(el)
        el.classList.remove('_active')
      }

      for (let el of itemsCase) {
        el.classList.remove('_active')
      }
      btn.parentElement.classList.add('_active')
      
      btn.classList.add('_active')
      slideOpen(btn.nextElementSibling)
      

    })
  }
}

slideCases()


const showMore = () => {
  const btnsMore = document.querySelectorAll('.content-case__btnmore')
  const itemsCase = document.querySelectorAll('.slider-cases__item')

  for (let btn of btnsMore) {
    btn.addEventListener('click', () => {
      for (let el of itemsCase) {
        if (!el.classList.contains('_active')) {
          el.classList.toggle('_more')
        }
      }
      
      btn.previousElementSibling.classList.toggle('_more')

      if (!btn.classList.contains('_close')) {
        btn.classList.add('_close')
        btn.innerText = 'Close'
      } else {
        btn.classList.remove('_close')
        btn.innerText = 'Show more'
      }
      
    })
  }
}

showMore()