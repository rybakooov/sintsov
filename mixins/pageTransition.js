import { TweenMax, Power2 } from 'gsap'

export default function () {
  return {
    transition(to, from) {
      const direction = to.fullPath === '/' || to.fullPath === '/en' ? 1 : -1
      return {
        name: 'parent-page',
        mode: 'in-out',
        css: false,
        beforeEnter(el) {
          TweenMax.to(el, 0, {
            xPercent: -100 * direction,
            scale: 0.9,
            ease: Power2.easeInOut
          })
        },
        enter(el, done) {
          done()
          TweenMax.to(el, 1, {
            xPercent: -50 * direction,
            scale: 0.9,
            ease: Power2.easeInOut,
            onComplete () {
              TweenMax.to(el, 1, {
                xPercent: 0,
                scale: 1,
                ease: Power2.easeInOut,
                onComplete () {
                  el.style = ''
                }
              })
            }
          })
        },
        leave(el, done) {
          el.style.position = 'absolute'
          TweenMax.to(el, 1, {
            xPercent: 50 * direction,
            scale: 0.9,
            ease: Power2.easeInOut,
            onComplete () {
              TweenMax.to(el, 1, {
                xPercent: 100 * direction,
                scale: 1,
                ease: Power2.easeInOut,
                onComplete () {
                  done()
                }
              })
            }
          })
        }
      }
    }
  }
}
