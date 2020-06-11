import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/b825405948.js'
  })

  Vue.component('Layout', DefaultLayout)
}
