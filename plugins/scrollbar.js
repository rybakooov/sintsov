import OverlayScrollbars from 'overlayscrollbars'

const instance = OverlayScrollbars(document.querySelector('body'), {
  overflowBehavior: {
    x: 'hidden'
  }
})
