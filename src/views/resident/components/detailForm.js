export let renderEle = [
    {
        title:'基础信息',
        eleArr:[
            {
                key:'residentName',
                label:'住户姓名',
                ele:'input',
                style:'', //绑定calss设置样式
                required:true,
            },
            {
                key:'idcardType',
                label:'证件类型',
                ele:'select',
                style:'', //绑定calss设置样式
                option:[
                    { value: 0, label: '1栋' },
                    { value: 1, label: '2栋' },
                    { value: 2, label: '3栋' }
                ]
            },
            {
                key:'idcardNum',
                label:'证件号码',
                ele:'input',
                style:'', //绑定calss设置样式
            },
            {
                key:'phone',
                label:'手机号码',
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
                key:'house',
                label:'所属房屋',
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
                key:'residentType',
                label:'住户类型',
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
                label:'住户状态',
                ele:'select',
                style:'', //绑定calss设置样式
                option:[
                    { value: 0, label: '1栋' },
                    { value: 1, label: '2栋' },
                    { value: 2, label: '3栋' }
                ]
            },
            {
                key:'inTime',
                label:'入住时间',
                ele:'dateTime',
                style:'', //绑定calss设置样式
                // required:true,
            },
            {
                key:'outTime',
                label:'搬离时间',
                ele:'dateTime',
                style:'', //绑定calss设置样式
                // required:true,
            },
            {
                key:'label',
                label:'人员标签',
                ele:'input',
                style:'', //绑定calss设置样式
                // required:true,
            },
        ]
    },
    {
        title:'基础信息',
        eleArr:[
            {
                key:'sex',
                label:'性别',
                ele:'select',
                style:'', //绑定calss设置样式
                option:[
                    { value: 0, label: '1栋' },
                    { value: 1, label: '2栋' },
                    { value: 2, label: '3栋' }
                ]
            },
            {
                key:'guoji',
                label:'国籍',
                ele:'select',
                style:'', //绑定calss设置样式
                option:[
                    { value: 0, label: '1栋' },
                    { value: 1, label: '2栋' },
                    { value: 2, label: '3栋' }
                ]
            },
            {
                key:'address',
                label:'户籍地址',
                ele:'input',
                style:'', //绑定calss设置样式
            },
            {
                key:'marry',
                label:'婚姻状况',
                ele:'select',
                style:'', //绑定calss设置样式
                option:[
                    { value: 0, label: '1栋' },
                    { value: 1, label: '2栋' },
                    { value: 2, label: '3栋' }
                ]
            },
            {
                key:'detail',
                label:'备注',
                ele:'textarea',
                style:'full', //绑定calss设置样式
            },
            
        ]
    }
]