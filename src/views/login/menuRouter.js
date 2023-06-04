/**
 *  // childMenuShow  // 此字段是用于 菜单是否显示 子菜单 true 显示 反之
    // pathName 此字段是 用于是否展示菜单名称 有此字段就显示菜单  反之
    meta{
        title://标题，面包屑下面内容的标题，
        activePath //父级路由，用于左侧菜单导航的激活高亮选中
    }
 */
export let menuRouter = [
    {
        path: "basicInfo",
        pathName: "基础信息管理",
        // componentSrc:'basicInfo/index.vue',
        childMenuShow: true,
        meta:{
            names: ["基础信息管理"],
            title:'基础信息管理'
        },
        redirect: "/community",
        children: [
            {
                path: "community",
                pathName: "小区管理",
                componentSrc: "communityMage/index.vue",
                meta:{
                    names: ["基础信息管理", "小区管理"],
                    title:'小区管理'
                },
                children: [
                    {
                        path: "detailCommunity",
                        componentSrc: "communityMage/detailCommunity.vue",
                        meta:{
                            names: ["基础信息管理", "小区管理", "详情"],
                            title:'详情',
                            activePath:'community'
                        },
                    },
                    {
                        path: "editCommunity",
                        componentSrc: "communityMage/editCommunity.vue",
                        meta:{
                            names: ["基础信息管理", "小区管理", "编辑"],
                            title:'编辑',
                            activePath:'community'
                        },
                    },
                ],
            },
            {
                path: "building",
                pathName: "楼栋管理",
                componentSrc: "buildingMage/index.vue",
                meta:{
                    names: ["基础信息管理", "楼栋管理"],
                    title:'楼栋管理'
                },
                children: [
                    {
                        path: "addBuilding",
                        componentSrc: "buildingMage/building/addBuilding.vue",
                        meta:{
                            names: ["基础信息管理", "楼栋管理", "楼栋", "新增"],
                            title:'新增',
                            activePath:'building',
                        },
                       
                    },
                    {
                        path: "detailBuilding",
                        componentSrc: "buildingMage/building/detailBuilding.vue",
                        meta:{
                            names: ["基础信息管理", "楼栋管理","楼栋", "详情"],
                            title:'详情',
                            activePath:'building',
                        },
                       
                    },
                    {
                        path: "editBuilding",
                        componentSrc: "buildingMage/building/editBuilding.vue",
                        meta:{
                            names: ["基础信息管理", "楼栋管理","楼栋", "编辑"],
                            title:'编辑',
                            activePath:'building',
                        },
                    },
                    {
                        path: "addUnit",
                        componentSrc: "buildingMage/unit/addUnit.vue",
                        meta:{
                            names: ["基础信息管理", "楼栋管理", "单元", "新增"],
                            title:'新增',
                            activePath:'building',
                        },
                       
                    },
                    {
                        path: "detailUnit",
                        componentSrc: "buildingMage/unit/detailUnit.vue",
                        meta:{
                            names: ["基础信息管理", "楼栋管理","单元", "详情"],
                            title:'详情',
                            activePath:'building',
                        },
                       
                    },
                    {
                        path: "editUnit",
                        componentSrc: "buildingMage/unit/editUnit.vue",
                        meta:{
                            names: ["基础信息管理", "楼栋管理","单元", "编辑"],
                            title:'编辑',
                            activePath:'building',
                        },
                    },
                ],
            },
            {
                path: "house",
                pathName: "房屋管理",
                componentSrc: "house/index.vue",
                meta:{
                    names: ["基础信息管理", "房屋管理"],
                    title:'房屋管理'
                },
                children: [
                    {
                        path: "addHouse",
                        componentSrc: "house/addHouse.vue",
                        meta:{
                            names: ["基础信息管理", "房屋管理", "新增"],
                            title:'新增',
                            activePath:'house',
                        },
                       
                    },
                    {
                        path: "detailHouse",
                        componentSrc: "house/detailHouse.vue",
                        meta:{
                            names: ["基础信息管理", "房屋管理", "详情"],
                            title:'详情',
                            activePath:'house',
                        },
                       
                    },
                    {
                        path: "editHouse",
                        componentSrc: "house/editHouse.vue",
                        meta:{
                            names: ["基础信息管理", "房屋管理", "编辑"],
                            title:'编辑',
                            activePath:'house',
                        },
                    },
                ],
            },
            {
                path: "resident",
                pathName: "居民管理",
                componentSrc: "resident/index.vue",
                meta:{
                    names: ["基础信息管理", "居民管理"],
                    title:'居民管理'
                },
                children: [
                    {
                        path: "addResident",
                        componentSrc: "resident/addResident.vue",
                        meta:{
                            names: ["基础信息管理", "居民管理", "新增"],
                            title:'居民管理',
                            activePath:'resident'
                        },
                    },
                    {
                        path: "detailResident",
                        componentSrc: "resident/detailResident.vue",
                        meta:{
                            names: ["基础信息管理", "居民管理", "详情"],
                            title:'居民管理',
                            activePath:'resident'
                        },
                    },
                    {
                        path: "editResident",
                        componentSrc: "resident/editResident.vue",
                        meta:{
                            names: ["基础信息管理", "居民管理", "编辑"],
                            title:'居民管理',
                            activePath:'resident'
                        },
                    },
                ],
            },
            
        ],
    },
    {
        path: "wechatMage",
        pathName: "小程序管理",
        childMenuShow: true,
        meta:{
            names: ["小程序管理"],
            title:'小程序管理'
        },
        redirect: "/wechatUserInfo",
        children: [
            {
                path: "wechatUserInfo",
                pathName: "用户信息",
                componentSrc: "wechatMage/userInfo/index.vue",
                meta:{
                    names: ["小程序管理", "用户信息"],
                    title:'用户信息'
                },
                children: [
                    {
                        path: "wechatUserInfoDetail",
                        componentSrc: "wechatMage/userInfo/detail.vue",
                        meta:{
                            names: ["小程序管理", "用户信息", "查看"],
                            title:'查看',
                            activePath:'wechatUserInfo'
                        },
                    },
                ],
            },
            {
                path: "residentCheck",
                pathName: "居民审核",
                componentSrc: "wechatMage/residentCheck/index.vue",
                meta:{
                    names: ["小程序管理", "居民审核"],
                    title:'居民审核'
                },
                children: [
                    {
                        path: "residentCheckDetail",
                        componentSrc: "wechatMage/residentCheck/detail.vue",
                        meta:{
                            names: ["小程序管理", "居民审核", "查看"],
                            title:'查看',
                            activePath:'residentCheck'
                        },
                    },
                    {
                        path: "residentCheck-Check",
                        componentSrc: "wechatMage/residentCheck/check.vue",
                        meta:{
                            names: ["小程序管理", "居民审核", "审核"],
                            title:'审核',
                            activePath:'residentCheck'
                        },
                    },
                ],
            },
            
            
        ],
    },
    {
        path: "eventMage",
        pathName: "事件管理",
        componentSrc: "eventMage/index.vue",
        meta:{
            names: ["事件管理"],
            title:'事件管理'
        },
        children: [
            {
                path: "eventMageDetail",
                componentSrc: "eventMage/detailEvent.vue",
                meta:{
                    names: ["事件管理", "查看"],
                    title:'查看',
                    activePath:'eventMage'
                },
            },
        ],
    },

    {
        path: "systemMage",
        pathName: "系统管理",
        childMenuShow: true,
        meta:{
            names: ["小程序管理"],
            title:'小程序管理'
        },
        redirect: "/wechatUserInfo",
        children: [
            {
                path: "wechatUserInfo",
                pathName: "用户信息",
                componentSrc: "wechatMage/userInfo/index.vue",
                meta:{
                    names: ["小程序管理", "用户信息"],
                    title:'用户信息'
                },
                children: [
                    {
                        path: "wechatUserInfoDetail",
                        componentSrc: "wechatMage/userInfo/detail.vue",
                        meta:{
                            names: ["小程序管理", "用户信息", "查看"],
                            title:'查看',
                            activePath:'wechatUserInfo'
                        },
                    },
                ],
            },
            
            
            
        ],
    },

   
];
