import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'

const originUrl = 'https://to2026.xyz'

export const defaultPersonList = <IPersonConfig[]>
    [
        { uid: 'U100156001', name: '朱厚熜', department: '皇室', identity: '万岁爷', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 1, y: 1, id: 0, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156002', name: '朱载垕', department: '皇室', identity: '裕王', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 2, y: 1, id: 1, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156003', name: '朱翊钧 ', department: '皇室', identity: '裕王世子', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 3, y: 1, id: 2, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156004', name: '严嵩', department: '内阁', identity: '首辅', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 4, y: 1, id: 3, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156005', name: '徐阶', department: '内阁', identity: '次辅、户部尚书', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 5, y: 1, id: 4, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156006', name: '张居正', department: '内阁', identity: '阁臣、兵部侍郞', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 6, y: 1, id: 5, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156007', name: '高拱', department: '内阁', identity: '阁臣、户部侍郞', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 7, y: 1, id: 6, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156008', name: '严世蕃', department: '内阁', identity: '吏部侍郞', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 8, y: 1, id: 7, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156009', name: '胡宗宪', department: '大臣', identity: '浙直总督', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 9, y: 1, id: 8, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156010', name: '戚继光', department: '大臣', identity: '都督佥事', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 10, y: 1, id: 9, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156011', name: '高瀚文', department: '大臣', identity: '杭州知府', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 11, y: 1, id: 10, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156012', name: '赵贞吉', department: '大臣', identity: '江苏巡抚', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 12, y: 1, id: 11, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156013', name: '海瑞', department: '大臣', identity: '淳安知县', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 13, y: 1, id: 12, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156014', name: '何茂才', department: '大臣', identity: '浙江布政使兼按察使', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 14, y: 1, id: 13, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156015', name: '郑泌昌', department: '大臣', identity: '浙江巡抚', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 15, y: 1, id: 14, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156016', name: '王用汲', department: '大臣', identity: '建德知县', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 16, y: 1, id: 15, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156017', name: '谭纶', department: '大臣', identity: '浙直总督府参军', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 17, y: 1, id: 16, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156018', name: '朱七', department: '大臣', identity: '北镇抚司', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 18, y: 1, id: 17, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156019', name: '罗龙文', department: '大臣', identity: '通政使司通政使', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 19, y: 1, id: 18, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156020', name: '马宁远', department: '大臣', identity: '杭州知府', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 20, y: 1, id: 19, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156021', name: '田有禄 ', department: '大臣', identity: '淳安县丞', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 21, y: 1, id: 20, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156022', name: '周云逸', department: '大臣', identity: '钦天监监正', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 1, y: 2, id: 21, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156023', name: '蒋千户', department: '大臣', identity: '浙江按察使司', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 2, y: 2, id: 22, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156024', name: '徐千户', department: '大臣', identity: '浙江按察使司', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 3, y: 2, id: 23, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156025', name: '王牢头 ', department: '大臣', identity: '牢头', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 4, y: 2, id: 24, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156026', name: '赵班头', department: '大臣', identity: '班头', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 5, y: 2, id: 25, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156027', name: '吕芳', department: '太监', identity: '掌印太监', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 6, y: 2, id: 26, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156028', name: '杨金水', department: '太监', identity: '织造局', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 7, y: 2, id: 27, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156029', name: '陈洪', department: '太监', identity: '首席秉笔太监', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 8, y: 2, id: 28, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156030', name: '黄锦', department: '太监', identity: '秉笔太监', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 9, y: 2, id: 29, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156031', name: '李玄', department: '太监', identity: '新安江河道监管', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 10, y: 2, id: 30, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156032', name: '冯保', department: '太监', identity: '世子大伴', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 11, y: 2, id: 31, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156033', name: '李时珍', department: '江湖', identity: '名医', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 12, y: 2, id: 32, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156034', name: '沈一石 ', department: '江湖', identity: '商人', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 13, y: 2, id: 33, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156035', name: '井上十四郎', department: '江湖', identity: '倭寇', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 14, y: 2, id: 34, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156036', name: '芸娘', department: '江湖', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 15, y: 2, id: 35, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
    ]

// 导入本地音乐文件
import bgmUrl from '@/Music/bgm.mp3'

export const defaultMusicList = [
    {
        id: `bgm.mp3${new Date().getTime().toString()}`,
        name: 'bgm.mp3',
        url: bgmUrl,
    },
]

export const defaultPrizeList = <IPrizeConfig[]>[    {
        id: '005',
        name: '五等奖',
        prizeName: '五等奖奖品',
        sort: 1,
        isAll: false,
        count: 5,
        isUsedCount: 0,
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '五等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
        imageId: '',
    },
    {
        id: '004',
        name: '四等奖',
        prizeName: '四等奖奖品',
        sort: 2,
        isAll: false,
        count: 4,
        isUsedCount: 0,
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '四等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
        imageId: '',
    },
    {
        id: '003',
        name: '三等奖',
        prizeName: '三等奖奖品',
        sort: 3,
        isAll: false,
        count: 3,
        isUsedCount: 0,
        separateCount: {
            enable: true,
            countList: [],
        },
        desc: '三等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
        imageId: '',
    },
    {
        id: '002',
        name: '二等奖',
        prizeName: '二等奖奖品',
        sort: 4,
        isAll: false,
        count: 2,
        isUsedCount: 0,
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '二等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
        imageId: '',
    },
    {
        id: '001',
        name: '一等奖',
        prizeName: '一等奖奖品',
        sort: 5,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '一等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
        imageId: '',
    },
]
export const defaultCurrentPrize = <IPrizeConfig>{
    id: '005',
    name: '五等奖',
    prizeName: '五等奖奖品',
    sort: 1,
    isAll: false,
    count: 5,
    isUsedCount: 0,
    separateCount: {
        enable: false,
        countList: [],
    },
    desc: '五等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
    imageId: '',
}
export const defaultTemporaryPrize = <IPrizeConfig>{
    id: '',
    name: '',
    prizeName: '',
    sort: 0,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    separateCount: {
        enable: true,
        countList: [],
    },
    desc: '',
    isShow: false,
    isUsed: false,
    frequency: 1,
    imageId: '',
}

export const defaultImageList = [
    {
        id: '0',
        name: '一等奖',
        url: `${originUrl}/resource/image/image1.png`,
    },
    {
        id: '1',
        name: '二等奖',
        url: `${originUrl}/resource/image/image2.png`,
    },
    {
        id: '2',
        name: '三等奖',
        url: `${originUrl}/resource/image/image3.png`,
    },
    {
        id: '3',
        name: '四等奖',
        url: `${originUrl}/resource/image/image4.png`,
    },
    {
        id: '4',
        name: '五等奖',
        url: `${originUrl}/resource/image/image5.png`,
    },
]
// 2026图案编号 - 21×9矩阵
export const defaultPatternList = [23,24,25,26,28,29,30,31,33,34,35,36,38,39,40,41,47,49,52,57,59,68,70,73,78,80,86,87,88,89,91,94,96,97,98,99,101,102,103,104,107,112,115,117,122,125,128,133,136,138,143,146,149,150,151,152,154,155,156,157,159,160,161,162,164,165,166,167]