/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                path: '/',
                name: 'home',
                component: () => import('./views/Home.vue')
              },


              /* Administrative */

              // Users
              {
                path: '/usuarios',
                name: 'admin-user-list',
                component: () => import('@/views/admin/user/user-list/UserList.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Usuários' },
                        { title: 'Lista', active: true },
                    ],
                    pageTitle: 'Lista de Usuários',
                    rule: 'editor'
                },
              },
              {
                path: '/usuarios/visualizacao/:userId',
                name: 'admin-user-view',
                component: () => import('@/views/admin/user/UserView.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Usuários ' },
                        { title: 'Visualização', active: true },
                    ],
                    pageTitle: 'Visualização de Usuário',
                    rule: 'editor'
                },
              },
              {
                path: '/usuarios/cadastro',
                name: 'admin-user-create',
                component: () => import('@/views/admin/user/UserCreate.vue'),
                meta: {
                  breadcrumb: [
                      { title: 'Home', url: '/' },
                      { title: 'Usuários' },
                      { title: 'Cadastro', active: true },
                  ],
                  pageTitle: 'Cadastro de Usuário',
                  rule: 'editor'
              },
              },
              {
                path: '/usuarios/edicao/:userId',
                name: 'admin-user-edit',
                component: () => import('@/views/admin/user/user-edit/UserEdit.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Usuários' },
                        { title: 'Edição', active: true },
                    ],
                    pageTitle: 'Edição de Usuário',
                    rule: 'editor'
                },
              },
              // Users/>

              // Readers
              {
                path: '/leitores',
                name: 'admin-reader-list',
                component: () => import('@/views/admin/reader/reader-list/ReaderList.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Leitores' },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'Leitores',
                    rule: 'editor'
                },
              },
              {
                path: '/leitores/cadastro',
                name: 'admin-reader-create',
                component: () => import('@/views/admin/reader/ReaderCreate.vue'),
                meta: {
                  breadcrumb: [
                      { title: 'Home', url: '/' },
                      { title: 'Leitores' },
                      { title: 'Cadastro', active: true },
                  ],
                  pageTitle: 'Cadastro de Leitor',
                  rule: 'editor'
                },
              },
              {
                path: '/leitores/visualizacao/:readerId',
                name: 'admin-reader-view',
                component: () => import('@/views/admin/reader/ReaderView.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Leitores' },
                        { title: 'View', active: true },
                    ],
                    pageTitle: 'Visualizar Leitor',
                    rule: 'editor'
                },
              },
              {
                path: '/leitores/edicao/:readerId',
                name: 'admin-reader-edit',
                component: () => import('@/views/admin/reader/ReaderEdit.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Leitores' },
                        { title: 'Edição', active: true },
                    ],
                    pageTitle: 'Editar Leitor',
                    rule: 'editor'
                },
              },
              // Readers/>

              // Books
              {
                path: '/livros',
                name: 'admin-book-list',
                component: () => import('@/views/admin/book/book-list/BookList.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Livros' },
                        { title: 'Lista', active: true },
                    ],
                    pageTitle: 'Lista de Livros',
                    rule: 'editor'
                },
              },

              {
                path: '/livros/cadastro',
                name: 'admin-book-create',
                component: () => import('@/views/admin/book/BookCreate.vue'),
                meta: {
                  breadcrumb: [
                      { title: 'Home', url: '/' },
                      { title: 'Livros' },
                      { title: 'Cadastro', active: true },
                  ],
                  pageTitle: 'Cadastro de Livro',
                  rule: 'editor'
                },
              },
              {
                path: '/livros/visualizacao/:bookId',
                name: 'admin-book-view',
                component: () => import('@/views/admin/book/BookView.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Livros ' },
                        { title: 'Visualização', active: true },
                    ],
                    pageTitle: 'Visualização de Livro',
                    rule: 'editor'
                },
              },
              {
                path: '/livros/edicao/:bookId',
                name: 'admin-book-edit',
                component: () => import('@/views/admin/book/BookEdit.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Livros' },
                        { title: 'Edição', active: true },
                    ],
                    pageTitle: 'Edição de Livro',
                    rule: 'editor'
                },
              },
              // Books/>

              // Loans
              {
                path: '/emprestimos',
                name: 'admin-loan-list',
                component: () => import('@/views/admin/loan/loan-list/LoanList.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Empréstimos' },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'Lista de Empréstimos',
                    rule: 'editor'
                },
              },
              // Loans />

              // Authors
              {
                path: '/autores',
                name: 'admin-author-list',
                component: () => import('@/views/admin/author/author-list/AuthorList.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Autores' },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'Lista de Autores',
                    rule: 'editor'
                },
              },
              // Authors/>

              // Companies
              {
                path: '/editoras',
                name: 'admin-company-list',
                component: () => import('@/views/admin/company/company-list/CompanyList.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Editoras' },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'Lista de Editoras',
                    rule: 'editor'
                },
              },
              // Companies/>

              // Courses
              {
                path: '/cursos',
                name: 'admin-courses-list',
                component: () => import('@/views/admin/course/course-list/CourseList.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Cursos' },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'Lista de Cursos',
                    rule: 'editor'
                },
              },
              // Courses/>
            ],
        },
        /* Authentication and Miscellaneous */
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
              {
                path: '/pages/login',
                name: 'page-login',
                component: () => import('@/views/pages/Login.vue')
              },
              {
                path: '/pages/register',
                name: 'page-register',
                component: () => import('@/views/pages/Register.vue')
              },
              {
                path: '/pages/error-404',
                name: 'page-error-404',
                component: () => import('@/views/pages/Error404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

router.beforeEach(async (to, from, next) => {

  if(to.name !== 'page-login' && !store.getters['auth/hasToken']) {
    try {
      await store.dispatch('auth/checkToken')
      next({ name: to.name })
    } catch (err) {
      console.log(err)
      next({ name: 'page-login' })
    }
  } else {
    if(to.name === 'page-login' && store.getters['auth/hasToken']) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
})

export default router
