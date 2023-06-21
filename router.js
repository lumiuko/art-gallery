import Navigo from 'navigo'

import Homepage from './pages/Homepage'
import Location from './pages/Location'

export default function createRoutes() {
  const router = new Navigo('/')

  const routes = [
    {
      path: '/',
      view: Homepage
    },
    {
      path: '/location',
      view: Location
    }
  ]

  routes.forEach(route => {
    router.on(route.path, () => {
      document.documentElement.scrollTop = 0
      route.view()
    })
  })

  router.resolve()
}
