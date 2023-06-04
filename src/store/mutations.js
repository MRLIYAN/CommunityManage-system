import router from '../router/index'
export default {
    // 路由改变
    HANDEL_ROUTER(state, path) {
        if (path) {
            state.router_path = path
        }
    },

    // 选项卡点击事件
    handleTabClick(state, name) {
        if (name) {
            state.tabActiveName = name
        }
    },
    // 物业缴费选项卡点击
    propertyFeeTabClick(state, name) {
        if (name) {
            state.tabPropertyFeeActiveName = name
        }
    },
    // 账号管理选项卡点击
    handleAccountTabClick(state, name) {
        if (name) {
            state.tabAccountActiveName = name
        }
    },
    // 巡检管理选项卡点击
    handlePatrolTabClick(state, name) {
        if (name) {
            state.tabPatrolActiveName = name
        }
    },
    // 报事报修跳转
    detailsReportRepair(state, row) {
        if (row) {
            state.detailsReportRepair = row
        }
    },
    // 通知管理跳转
    noticeAnnouncementDetails(state, row) {
        if (row) {
            state.noticeAnnouncementDetailsData = row
        }
    },
    // 设备管理跳转
    equipmentDetailsInfo(state, row) {
        if (row) {
            state.equipmentDetailsInfo = row
        }
    },
    // 居民管理跳转
    residentDetailsInfo(state, row) {
        if (row) {
            state.residentDetailsInfo = row
        }
    },
    // 房屋管理跳转
    houseDtailsInfo(state, row) {
        if (row) {
            state.houseDtailsInfo = row
        }
    },
    // 系统管理 账户管理跳转
    systemAccountDetailsInfo(state, row) {
        if (row) {
            state.systemAccountDetailsInfo = row
        }
    },
    partyBuildingDetailsInfo(state, row) {
        if (row) {
            state.partyBuildingDetailsInfo = row
        }
    },
    patrolPointDetails(state, row) {
        if (row) {
            state.patrolPointDetails = row
        }
    },
    // 添加 动态路由
    // GET_MENU_LIST(state, list) {
    //     if (list.length > 0) {
    //         let menuList = list
    //         let routers = []
    //         for (let i = 0; i < menuList.length; i++) {
    //             routers.push({
    //                 path: `/${menuList[i].path}`,
    //                 component: resolve => {
    //                     require([menuList[i].componentSrc ? '@/views/' + menuList[i].componentSrc : '@/views/' + menuList[i].path + '/page/index.vue'], resolve)
    //                 },
    //                 meta: {
    //                     names: [...menuList[i].names]
    //                 }
    //             })

    //             if (menuList[i].children && menuList[i].children.length > 0) {
    //                 let childrenList = menuList[i].children
    //                 for (let j = 0; j < childrenList.length; j++) {
    //                     routers.push({
    //                         // path: !childrenList[j].pathName ? `/${menuList[i].path}-${childrenList[j].path}` : `/${childrenList[j].path}`,
    //                         path: childrenList[j].path,
    //                         component: resolve => {
    //                             require([childrenList[j].componentSrc ? ('@/views/' + childrenList[j].componentSrc) : (`@/views/${menuList[i].path}/page/childrenPage/${childrenList[j].path}.vue`)], resolve)
    //                         },
    //                         meta: {
    //                             names: [...childrenList[j].names],
    //                             path1: childrenList[j].path1
    //                         }
    //                     })
    //                 }
    //             }
    //         }
    //         let routerList = [
    //             {
    //                 path: '/',
    //                 childMenuShow: true,
    //                 redirect: list[0].childMenuShow ? list[0].redirect : list[0].path,
    //                 component: () => import('../views/home/home.vue'),
    //                 children: [
    //                     ...routers
    //                 ]
    //             }
    //         ]
    //         state.routerList = routerList
    //         state.menuList = list
    //         console.log(routerList, 'routerList')
    //         router.addRoutes(routerList)
    //     }
    // }
    GET_MENU_LIST(state, list) {
        let routers = [];
        dealRouter(state, list, routers);
        let routerList = [
            {
                path: '/',
                childMenuShow: true,
                redirect:list[0].childMenuShow ? list[0].redirect : list[0].path,
                component: () => import('../views/home/home.vue'),
                children: [
                    ...routers
                ]
            }
        ]
        console.log("==========");
        state.routerList = routerList
        state.menuList = list
        console.log(list);
        console.log(routerList, 'routerList')
        router.addRoutes(routerList)
    }
}

function dealRouter(state, list, routers) {
    if (list.length > 0) {
        let menuList = list
        for (let i = 0; i < menuList.length; i++) {
            routers.push({
                path: `/${menuList[i].path}`,
                component: resolve => {
                    require([menuList[i].componentSrc ? '@/views/' + menuList[i].componentSrc : '@/views/NotFound.vue'], resolve)
                },
                meta: {
                    ...menuList[i].meta
                }
            })

            if (menuList[i].children && menuList[i].children.length > 0) {
                let childrenList = menuList[i].children
                dealRouter(state, childrenList, routers);
            }
        }
       
    }
}
