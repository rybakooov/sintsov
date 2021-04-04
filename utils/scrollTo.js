import animateScrollTo from 'animated-scroll-to'

export default function scrollTo(element, options) {
  if (options.elementToScroll) {
    options.elementToScroll.classList.add('scrolling')
  }

  return animateScrollTo(element, options).then(() => {
    if (options.elementToScroll) {
      options.elementToScroll.classList.remove('scrolling')
    }
  })
}
