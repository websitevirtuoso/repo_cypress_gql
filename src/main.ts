import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import i18n from './plugins/i18n'
import { loadFonts } from './plugins/webfontloader'
import { apolloPublicClient, apolloDefaultClient } from '@/plugins/apollo/vue-apollo'
import { ApolloClients } from '@vue/apollo-composable'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// @ts-expect-error for declaration this module
import breadcrumbs from 'vue-3-breadcrumbs'

// load modules
import './loaded-modules'

loadFonts().then()

createApp(App)
  .provide(ApolloClients, {
    default: apolloDefaultClient,
    public: apolloPublicClient,
  })
  .use(i18n)
  .use(createPinia().use(piniaPluginPersistedstate))
  .use(router)
  .use(vuetify)
  .use(breadcrumbs)
  .mount('#app')
