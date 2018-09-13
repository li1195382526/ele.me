import AddGoodsType from '@/components/goods/addGoodsType'
import GoodsTypeManage from '@/components/goods/goodsTypeManage'
import AddGoods from '@/components/goods/addGoods'
import GoodsManage from '@/components/goods/goodsManage'
export default [
//添加店铺类别
    {
        path: '/addGoodsType',
        name: 'addGoodsType',
        component: AddGoodsType,
        meta:{
            requestAuthor:true,
            parentType:5,
            typeId:51
        }
    },
//    店铺类别管理
    {
    	   path: '/goodsTypeManage',
        name: 'goodsTypeManage',
        component: GoodsTypeManage,
        meta:{
            requestAuthor:true,
            parentType:5,
            typeId:52
        }
    },
    {
    	   path: '/addGoods',
        name: 'addGoods',
        component: AddGoods,
        meta:{
            requestAuthor:true,
            parentType:5,
            typeId:53
        }
    },
    {
    	   path: '/goodsManage',
        name: 'goodsManage',
        component: GoodsManage,
        meta:{
            requestAuthor:true,
            parentType:5,
            typeId:54
        }
    }
]
