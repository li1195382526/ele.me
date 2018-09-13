import AddShopType from '@/components/shop/addShopType'
import ShopTypeManage from '@/components/shop/shopTypeManage'
import AddShop from '@/components/shop/addShop'
import ShopManage from '@/components/shop/shopManage'
export default [
//添加店铺类别
    {
        path: '/addShopType',
        name: 'addShopType',
        component: AddShopType,
        meta:{
            requestAuthor:true,
            parentType:3,
            typeId:32
        }
    },
    //店铺类别管理
    {
    	   path: '/shopTypeManage',
        name: 'shopTypeManage',
        component: ShopTypeManage,
        meta:{
            requestAuthor:true,
            parentType:3,
            typeId:31
        }
    },
    {
    	   path: '/addShop',
        name: 'addShop',
        component: AddShop,
        meta:{
            requestAuthor:true,
            parentType:3,
            typeId:33
        }
    },
    {
    	   path: '/shopManage',
        name: 'shopManage',
        component: ShopManage,
        meta:{
            requestAuthor:true,
            parentType:3,
            typeId:34
        }
    },
     {
    	   path: '/upShopType/:shopTypeId',
        name: 'upShopType',
        component: AddShopType,
        meta:{
            requestAuthor:true,
            parentType:3,
            typeId:32
        }
    }
]
