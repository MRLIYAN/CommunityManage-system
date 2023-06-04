export let renderEle = [
    {
        title:'基础信息',
        eleArr:[
            {
                key:'houseNo',
                label:'楼栋名称',
                ele:'input',
                style:'', //绑定calss设置样式
                required:true,
            },
            {
                key:'houseName',
                label:'楼栋号',
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
        ]
    },
    {
        title:'基础信息',
        eleArr:[
            {
                key:'position',
                label:'选择位置',
                ele:'input',
                style:'', //绑定calss设置样式
            },
            {
                key:'longitude',
                label:'经度',
                ele:'input',
                style:'', //绑定calss设置样式
            },
            {
                key:'latitude',
                label:'纬度',
                ele:'input',
                style:'', //绑定calss设置样式
            },
            {
                key:'msg',
                label:'楼栋描述',
                ele:'textarea',
                style:'full', //绑定calss设置样式
            },
            {
                key:'uploadImg',
                label:'楼栋图片',
                ele:'uploadImg',
                style:'full', //绑定calss设置样式
            },
           
        ]
    }
]