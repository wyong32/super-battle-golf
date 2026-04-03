import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { scrollToSection } from '../utils/sectionScroll.js'
import { SEO } from './seoMeta.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { seo: SEO.home },
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/getting-started',
      name: 'getting-started',
      meta: { seo: SEO.gettingStarted },
      component: () => import('../views/GettingStartedView.vue'),
    },
    {
      path: '/wiki/weapons',
      name: 'wiki-weapons',
      meta: { seo: SEO.wikiWeapons },
      component: () => import('../views/wiki/WikiWeaponsListView.vue'),
    },
    {
      path: '/wiki/maps',
      name: 'wiki-maps',
      meta: { seo: SEO.wikiMaps },
      component: () => import('../views/wiki/WikiMapsListView.vue'),
    },
    {
      path: '/wiki/achievements',
      name: 'wiki-achievements',
      meta: { seo: SEO.wikiAchievements },
      component: () => import('../views/wiki/WikiAchievementsListView.vue'),
    },
    {
      path: '/wiki/cosmetics',
      name: 'wiki-cosmetics',
      meta: { seo: SEO.wikiCosmetics },
      component: () => import('../views/wiki/WikiCosmeticsListView.vue'),
    },
    {
      path: '/wiki',
      name: 'wiki',
      meta: { seo: SEO.wiki },
      component: () => import('../views/wiki/WikiListView.vue'),
    },
    {
      path: '/advanced',
      redirect: { path: '/', query: { focus: 'adv-heading' } },
    },
    {
      path: '/advanced/:slug',
      name: 'advanced-tip-detail',
      component: () => import('../views/AdvancedTipDetailView.vue'),
    },
    {
      path: '/guides',
      name: 'guides',
      meta: { seo: SEO.guides },
      component: () => import('../views/GuidesListView.vue'),
    },
    {
      path: '/guides/:slug',
      name: 'guide-detail',
      component: () => import('../views/GuideDetailView.vue'),
    },
    {
      path: '/mods',
      name: 'mods',
      meta: { seo: SEO.mods },
      component: () => import('../views/ModsListView.vue'),
    },
    {
      path: '/mods/:slug',
      name: 'mod-detail',
      component: () => import('../views/ModDetailView.vue'),
    },
    {
      path: '/platforms',
      name: 'platforms',
      meta: { seo: SEO.platforms },
      component: () => import('../views/PlatformsView.vue'),
    },
    {
      path: '/support',
      name: 'support',
      meta: { seo: SEO.support },
      component: () => import('../views/SupportView.vue'),
    },
    {
      path: '/search',
      name: 'search',
      meta: { seo: SEO.search },
      component: () => import('../views/SearchView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      meta: { seo: SEO.privacyPolicy },
      component: () => import('../views/site/PrivacyPolicyView.vue'),
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      meta: { seo: SEO.termsOfService },
      component: () => import('../views/site/TermsOfServiceView.vue'),
    },
    {
      path: '/copyright',
      name: 'copyright',
      meta: { seo: SEO.copyright },
      component: () => import('../views/site/CopyrightView.vue'),
    },
    {
      path: '/about-us',
      name: 'about-us',
      meta: { seo: SEO.aboutUs },
      component: () => import('../views/site/AboutUsView.vue'),
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      meta: { seo: SEO.contactUs },
      component: () => import('../views/site/ContactUsView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach((to, _from, failure) => {
  if (failure) return
  const focus = to.query.focus
  if (typeof focus !== 'string' || !focus.length) return

  nextTick(() => {
    scrollToSection(focus).then(() => {
      const nextQuery = { ...to.query }
      delete nextQuery.focus
      router.replace({ path: to.path, query: nextQuery })
    })
  })
})

export default router
