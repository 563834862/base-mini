//const ENV = 'sit' //正式环境

const ENV = 'dev' //测试环境

const SYS_INFO = {
    dev: {
        order_host: "https://xxx.cn", //在线下单
        main_host: 'https://xxx.cn/center-rest', //中心系统
        version: "1.0.1", //版本号
        name: '测试版',
        app: '100010',
        SECRET: 'EGZVY3DZFX5',
        socket: 'wss://oxxx.cn/device_order/detail',
    },


    sit: {
        order_host: "https://xxx.com", //在线下单
        main_host: 'https://xxx.com/center-rest', //中心系统
        version: "1.0.1", //版本号
        name: '正式版 ',
        app: '100010',
        SECRET: 'EGZVY3VMJNVEOYSDZFX5',
        socket: 'wss://xxx.com/device_order/detail',
    },

    show: {
        order_host: "https://xxx.cn", //在线下单
        main_host: 'https://xxx.cn/center-rest', //中心系统 order_host: "https://order.fzgi.cn", //在线下单
        version: "1.0.1", //版本号
        name: '演示版 ',
        app: '100011',
        SECRET: 'OEID8ZVAW884IEME',
        socket: 'wss://xxx.cn/device_order/detail',
    }
};


export default {...SYS_INFO[ENV], ... { ENV } }