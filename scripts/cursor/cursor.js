import iconArrowRight from './assets/icon.arrow-right'
import iconEye from './assets/icon.eye'
import config from './_config'
import { CursorTarget } from './cursor-target'
import { clamp } from '@/utils/math'
import isMobile from '@/utils/isMobile'

export class Cursor {
  constructor () {
    this.isMobile = isMobile.any()

    if (!this.isMobile) {
      this.setup()
    }
  }

  setup () {
    this.cursor = Cursor.createCursor()

    this.speed = config.speed
    this.size = config.size

    this.position = { x: 0, y: 0 }
    this.destination = { x: 0, y: 0 }
    this.targets = {}
    this.hover = null
    this.raf = null
    this.clickTimeout = null
    this.rafRender = this.render.bind(this)
    this.sticky = []
    this.addListeners()
    this.render()
    document.body.classList.add('cursor-area')
  }

  static createCursor () {
    const cursor = {
      $element: document.createElement('div'),
      $view: document.createElement('div'),
      $text: document.createElement('span'),
      $icon: document.createElement('span')
    }

    cursor.$element.classList.add(config.classNames.elements.cursor)
    cursor.$view.classList.add(config.classNames.elements.view)
    cursor.$text.classList.add(config.classNames.elements.text)
    cursor.$icon.classList.add(config.classNames.elements.icon)

    cursor.$element.appendChild(cursor.$view)
    cursor.$view.appendChild(cursor.$text)
    cursor.$view.appendChild(cursor.$icon)

    document.body.appendChild(cursor.$element)

    return cursor
  }

  addTarget (el, binding) {
    if (!this.isMobile) {
      const target = new CursorTarget(el, binding.value, {
        click: this.onclickTarget.bind(this),
        mouseenter: this.onmouseenterTarget.bind(this),
        mouseleave: this.onmouseleaveTarget.bind(this)
      })
      this.targets[target.id] = target
    }
  }

  removeTarget (element) {
    if (!this.isMobile) {
      const id = element.dataset.cursorTarget
      const target = this.targets[id]

      this.cursor.$element.classList.remove('cursor--blend-none')
      target.destroy()
      delete this.targets[id]
    }
  }

  updateTarget (element, binding) {
    if (!this.isMobile) {
      const id = element.dataset.cursorTarget
      const target = this.targets[id]
      target.update(binding.value)
      this.updateIcon()
    }
  }

  addListeners () {
    this.events = {
      onmousemove: this.onmousemove.bind(this)
    }
    document.addEventListener('mousemove', this.events.onmousemove)
  }

  removeEventListeners () {
    document.removeEventListener('mousemove', this.events.onmousemove)
  }

  onmouseenterTarget (target, event) {
    this.hover = {
      target,
      rect: target.$element.getBoundingClientRect(),
      iconName: ''
    }

    this.cursor.$element.classList.add(config.classNames.modifiers.hover)

    if (target.options.text) {
      this.cursor.$text.textContent = target.options.text
    }

    this.cursor.$element.dataset.size = target.options.size

    if (target.options.sticky) {
      this.sticky.push({
        target,
        position: [0, 0],
        destination: [0, 0]
      })
    }

    if (!target.options.blend) {
      this.cursor.$element.classList.add(config.classNames.modifiers.blend)
    } else {
      this.cursor.$element.classList.remove(config.classNames.modifiers.blend)
    }
    if (target.options.hidden) {
      this.cursor.$element.classList.add(config.classNames.modifiers.hidden)
    }
    setTimeout(() => this.updateIcon(), 50)
  }

  onmouseleaveTarget (instance, event) {
    this.reset()
  }

  onclickTarget (instance, event) {
    clearTimeout(this.clickTimeout)
    this.cursor.$element.classList.add(config.classNames.modifiers.click)
    this.clickTimeout = setTimeout(() => {
      this.cursor.$element.classList.remove(config.classNames.modifiers.click)
    }, 150)
  }

  onmousemove (e) {
    this.updateSticky(e)
    this.updateIcon()
    this.updatePosition(e)
  }

  updateIcon () {
    if (this.hover) {
      const iconName = this.hover.target.options.icon
      if (iconName && iconName !== this.hover.iconName) {
        let iconHTML = ''
        let iconGroup = ''
        if (iconName === 'eye') {
          iconHTML = iconEye
          iconGroup = 'iconEye'
        } else if (iconName === 'arrow') {
          iconHTML = iconArrowRight
          iconGroup = 'arrowRight'
        }
        this.cursor.$icon.dataset.icon = iconName
        this.hover.iconName = iconName
        if (this.hover.iconGroup !== iconGroup) {
          this.cursor.$icon.innerHTML = iconHTML
          this.hover.iconGroup = iconGroup
        }
      }
    }
  }

  updatePosition (e) {
    if (this.hover?.target.options.magnetic) {
      this.destination = {
        x: this.hover.rect.left + this.hover.rect.width / 2,
        y: this.hover.rect.top + this.hover.rect.height / 2
      }
    } else {
      this.destination = { x: e.clientX, y: e.clientY }
    }
  }

  updateSticky (e) {
    this.sticky.forEach((item) => {
      if (item.target === this.hover?.target) {
        const maxX = this.hover.rect.width * item.target.options.stickyDistention / 100
        const maxY = this.hover.rect.height * item.target.options.stickyDistention / 100
        const centerX = this.hover.rect.left + this.hover.rect.width / 2
        const centerY = this.hover.rect.top + this.hover.rect.height / 2
        item.timeout = Date.now() + 2000
        item.destination = [
          clamp(maxX * -1, maxX, e.pageX - centerX),
          clamp(maxY * -1, maxY, e.pageY - centerY)
        ]
      } else {
        item.destination = [0, 0]
      }
    })
  }

  render () {
    const removeSticky = []
    const now = Date.now()
    this.sticky.forEach((item, index) => {
      if (now > item.timeout && !this.hover) {
        removeSticky.push(index)
      } else {
        item.position[0] += this.speed * (item.destination[0] - item.position[0])
        item.position[1] += this.speed * (item.destination[1] - item.position[1])
        item.target.$element.style.transform = `translate(${item.position[0]}px, ${item.position[1]}px)`
      }
    })
    removeSticky.forEach(i => this.sticky.splice(i, 1))
    this.position.x += this.speed * (this.destination.x - this.position.x)
    this.position.y += this.speed * (this.destination.y - this.position.y)
    this.cursor.$element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`
    // this.cursor.$view.style.width = `${this.size}em`
    // this.cursor.$view.style.height = `${this.size}em`
    this.raf = requestAnimationFrame(this.rafRender)
  }

  reset () {
    if (!this.isMobile) {
      this.cursor.$element.classList.remove(
        config.classNames.modifiers.hover,
        config.classNames.modifiers.click,
        config.classNames.modifiers.hidden,
        config.classNames.modifiers.blend
      )
      this.cursor.$text.textContent = ''
      this.cursor.$icon.innerHTML = ''
      this.hover = null
    }
  }

  destroy () {
    cancelAnimationFrame(this.raf)
    this.removeEventListeners()
    Object.keys(this.targets).forEach((id) => {
      this.removeTarget(this.targets[id])
    })
  }
}
