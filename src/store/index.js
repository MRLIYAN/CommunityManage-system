import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    router_path: '',
    detailsReportRepair: {},
    tabActiveName: 'patrolPoint',
    tabPropertyFeeActiveName: 'Paid',
    tabAccountActiveName: 'accountManage',
    tabPatrolActiveName: 'patrolPoint',
    menuList: [],
    routerList: [],
    noticeAnnouncementDetailsData: {},
    equipmentDetailsInfo: {},
    residentDetailsInfo: {},
    systemAccountDetailsInfo: {},
    partyBuildingDetailsInfo: {},
    patrolPointDetails: {}
  },
  mutations,
  actions,
  modules: {}
})
