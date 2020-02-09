// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from 'vue'
import VueAgile from 'vue-agile'
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/_global.scss'
import 'normalize-scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueAgile)
}
