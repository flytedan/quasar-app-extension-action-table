import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-action-table'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
