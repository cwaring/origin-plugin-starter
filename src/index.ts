import { OriginPlugin } from '@app-research/origin-vue'
import { name, version } from '../package.json'

export const setup: OriginPlugin = ({ app, router, initialState }) => {
  // setup plugin
  // app.use(plugn)
}

const plugin = (options = {}) => ({
  name,
  version,
  load: setup
})

export default plugin
