
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/cadastro1', component: () => import('pages/cadastro1.vue') },
      { path: '/cadastro2', component: () => import('pages/cadastro2.vue') },
      { path: '/login', component: () => import('pages/login.vue') },
      { path: '/sobrenos', component: () => import('pages/sobrenos.vue') },
      { path: '/faleconosco', component: () => import('pages/faleconosco.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
