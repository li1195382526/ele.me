import shop from "@/components/shop/shop"
import shopList from "@/components/shop/shopList"
import shopInfo from "@/components/shop/shopInfo"
import shopListByType from "@/components/shop/shopListByType"
export default [
    {
        path: '/shop',
        name: 'shop',
        component: shop,
        meta:{
            isTop:false
        }
    },
     {
        path: '/shopList',
        name: 'shopList',
        component: shopList,
        meta:{
            isTop:false
        }
    },
    {
        path: '/shopInfo',
        name: 'shopInfo',
        component: shopInfo,
        meta:{
            isTop:false
        }
    },
    {
        path: '/shopListByType',
        name: 'shopListByType',
        component: shopListByType,
        meta:{
            isTop:false
        }
    }
]
