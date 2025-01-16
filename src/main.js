import { createApp } from 'vue'
import App from './App.vue'
import routers from './router'
import '@/assets/style/main.scss'

import { languages } from './i18n'
import { defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

const localStorageLang = localStorage.getItem("lang")

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: localStorageLang || defaultLocale,
    fallbackLocale: "ru",
    messages
})

import { reactive } from "vue";

export const loadingState = reactive({
  isLoading: false,
});

export const setLoading = (state) => {
  loadingState.isLoading = state;
};

const app = createApp(App, {
    setup() {
        const { t } = useI18n
        return { t }
    }
})
app.use(routers)
app.use(i18n)
app.mount("#app")
