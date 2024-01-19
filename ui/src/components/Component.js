import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'ActionTable',

  setup () {
    return () => h(QBadge, {
      class: 'ActionTable',
      label: 'ActionTable'
    })
  }
}
