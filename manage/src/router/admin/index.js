import AdminLoginLog from '@/components/admin/adminLoginLog'
import UpPassWord from "@/components/admin/upPassWord"
import AdminManage from "@/components/admin/adminManage"
import AddAemin from "@/components/admin/addAdmin"
export default [
    {
        path: '/',
        name: 'adminLoginLog',
        component: AdminLoginLog,
        meta:{
            requestAuthor:true,
            parentType:1,
            typeId:11
        }
    },{
        path: '/upPassWord/:adminId',
        name: 'UpPassWord',
        component: UpPassWord,
        meta:{
            requestAuthor:true,
            parentType:1,
            typeId:12
        }
    },{
        path: '/adminManage',
        name: 'adminManage',
        component: AdminManage,
        meta:{
            requestAuthor:true,
            parentType:1,
            typeId:13
        }
    },{
        path: '/addAdmin',
        name: 'addAdmin',
        component: AddAemin,
        meta:{
            requestAuthor:true,
            parentType:1,
            typeId:14
        }
    }
]
