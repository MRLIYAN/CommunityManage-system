export let renderEle = [
    {
        title:'基础信息',
        eleArr:[
            {
                key:'unitName',
                label:'单元名称',
                ele:'input',
                style:'', //绑定calss设置样式
                required:true,
            },
            {
                key:'unitNo',
                label:'单元号',
                ele:'input',
                style:'', //绑定calss设置样式
                required:true,
            },
            {
                key:'community',
                label:'所属小区',
                ele:'select',
                style:'', //绑定calss设置样式
                required:true,
                option:[
                    { value: 0, label: '1栋' },
                    { value: 1, label: '2栋' },
                    { value: 2, label: '3栋' }
                ]
            },
            {
                key:'building',
                label:'所属楼栋',
                ele:'select',
                style:'', //绑定calss设置样式
                required:true,
                option:[
                    { value: 0, label: '1栋' },
                    { value: 1, label: '2栋' },
                    { value: 2, label: '3栋' }
                ]
            },
        ]
    },
    {
        title:'房屋生成信息',
        eleArr:[
            {
                key:'unitLevelNum',
                label:'单元层数',
                ele:'inputNumber',
                style:'', //绑定calss设置样式
            },
            {
                key:'zzksNum',
                label:'住宅开始层数',
                ele:'inputNumber',
                style:'', //绑定calss设置样式
            },
            {
                key:'levelFamilyNum',
                label:'住宅每层户数',
                ele:'inputNumber',
                style:'', //绑定calss设置样式
            },
        ]
    }
]