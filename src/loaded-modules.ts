import countriesModule from './modules/countries/index'
import { registerModules } from '@/register-modules'

// register all modules with extra params
registerModules({
  countriesModule,
})
