
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/cadastro1', component: () => import('pages/cadastro1.vue') },
      { path: '/cadastro2', component: () => import('pages/cadastro2.vue') },
      { path: '/instituicoes', component: () => import('pages/instituicoes.vue') },
      { path: '/sobrenos', component: () => import('pages/sobrenos.vue') },
      { path: '/faleconosco', component: () => import('pages/faleconosco.vue') },
      { path: '/busca', component: () => import('pages/busca.vue') },
      { path: '/testes', component: () => import('pages/testes.vue') },
      { path: '/testes2', component: () => import('pages/testes2.vue') },
      { path: '/profissional', component: () => import('pages/profissionais.vue') }

    ]
  },
  {
    path: '/Login',
    component: () => import('layouts/WhiteLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/login.vue') },
      { path: '/pagamento', component: () => import('pages/PgPagamento.vue') }
    ]
  },
  {
    path: '/usuarios',
    component: () => import('layouts/ChatLayout.vue'),
    children: [
      { path: '/usuarios', component: () => import('pages/paginaUsuarios.vue') },
      { path: '/chat', component: () => import('pages/chat.vue') }
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
