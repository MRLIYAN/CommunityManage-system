export let renderEle = [
    {
        title:'基础信息',
        eleArr:[
            {
                key:'houseNo',
                label:'房屋门牌号',
                ele:'input',
                style:'', //绑定calss设置样式
                required:true,
            },
            {
                key:'houseName',
                label:'房屋名称',
                ele:'input',
                style:'', //绑定calss设置样式
                required:true,
            },
            {
                key:'houseLevel',
                label:'房屋所在楼层',
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
            {
                key:'unit',
                label:'所属单元',
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
                key:'status',
                label:'房屋状态',
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
                key:'area',
                label:'房屋面积',
                ele:'select',
                style:'', //绑定calss设置样式
                // required:true,
                option:[
                    { value: 0, label: '1栋' },
                    { value: 1, label: '2栋' },
                    { value: 2, label: '3栋' }
                ]
            },
            {
                key:'detail',
                label:'房屋描述',
                ele:'textarea',
                style:'full', //绑定calss设置样式
                // required:true,
            },
        ]
    }
]