import { createApp, ref } from 'vue/dist/vue.esm-bundler.js'

import useHeader from './common/useHeader.js'
import useFooter from './common/useFooter.js'

createApp({
  compilerOptions: {
    delimiters: ['{[', ']}'],
    comments: true
  },
  setup() {

    const { name: headerName } = useHeader()
    const { name: footerName } = useFooter()

    const name = ref("about page")

    return {
      headerName,
      footerName,
      name
    }
  }
}).mount('#app')