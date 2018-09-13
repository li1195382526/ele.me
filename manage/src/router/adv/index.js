import AddAdv from '@/components/adv/addAdv'
import AdvManage from '@/components/adv/advManage'
export default [
    {
        path: '/addAdv',
        name: 'addAdv',
        component: AddAdv,
        meta:{
            requestAuthor:true,
            parentType:4,
            typeId:41
        }
    },
     {
        path: '/advManage',
        name: 'advManage',
        component: AdvManage,
        meta:{
            requestAuthor:true,
            parentType:4,
            typeId:42
        }
    }
]
