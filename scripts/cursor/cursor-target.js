import defaultOptions from './_options'

export class CursorTarget {
  constructor (element, options, callbacks = {}) {
    this.id = CursorTarget.makeId(20)
    this.$element = element

    this.callbacks = {
      mouseenter: callbacks.mouseenter,
      mouseleave: callbacks.mouseleave,
      click: callbacks.click
    }

    this.events = {
      onmouseenter: this.onmouseenter.bind(this),
      onmouseleave: this.onmouseleave.bind(this),
      onclick: this.onclick.bind(this)
    }

    element.dataset.cursorTarget = this.id

    this.addEventListeners()
    this.update(options)
  }

  static makeId (length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const charactersLength = characters.length
    let result = ''
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  update (options) {
    this.updateOptions(options)
    this.updateEvents()
  }

  updateOptions (options = {}) {
    this.options = Object.assign({}, defaultOptions, options)
  }

  addEventListeners () {
    this.$element.addEventListener('mouseenter', this.events.onmouseenter)
    this.$element.addEventListener('mouseleave', this.events.onmouseleave)
  }

  removeEventListeners () {
    this.$element.removeEventListener('mouseenter', this.events.onmouseenter)
    this.$element.removeEventListener('mouseleave', this.events.onmouseleave)
    this.$element.removeEventListener('click', this.events.onclick)
  }

  updateEvents () {
    if (this.options.click) {
      this.$element.addEventListener('click', this.events.onclick)
    } else {
      this.$element.removeEventListener('click', this.events.onclick)
    }
  }

  onmouseenter (instance, event) {
    if (!this.options.disabled) {
      this.callbacks.mouseenter && this.callbacks.mouseenter(this, event)
    }
  }

  onmouseleave (instance, event) {
    this.callbacks.mouseleave && this.callbacks.mouseleave(this, event)
  }

  onclick (instance, event) {
    if (!this.options.disabled) {
      this.callbacks.click && this.callbacks.click(this, event)
    }
  }

  destroy () {
    this.callbacks = {}
    this.removeEventListeners()
  }
}
