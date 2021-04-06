import { TweenMax, Power2 } from 'gsap'

export default function () {
  return {
    transition(to, from) {
      const path = to.fullPath.replaceAll(to.hash, '')
      const direction = path === '/' || path === '/en' ? 1 : -1
      console.log(to)
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
          el.style.width = '100%'
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
