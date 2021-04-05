import Vue from 'vue'

import Notification from 'element-ui/lib/notification'
import Select from 'element-ui/lib/select'
import Option from 'element-ui/lib/option'
import DatePicker from 'element-ui/lib/date-picker'

import locale from 'element-ui/lib/locale'
import id from 'element-ui/lib/locale/lang/id'

import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/select.css'
import 'element-ui/lib/theme-chalk/option.css'
import 'element-ui/lib/theme-chalk/date-picker.css'
import 'element-ui/lib/theme-chalk/notification.css'

Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.prototype.$notify = Notification

locale.use(id)
