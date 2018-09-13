//import UserRouter from '@/components/user/userRouter'
import UserManage from '@/components/user/userManage'
import UserLog from '@/components/user/userLog'
import AddUser from '@/components/user/addUser'
export default [
//  {
//      path: '/userRouter',
//      name: 'userRouter',
//      component: UserRouter,
//      meta:{
//          requestAuthor:true,
//          parentType:2,
//          typeId:21
//      }
//  },
      {
        path: '/userManage',
        name: 'userManage',
        component: UserManage,
        meta:{
            requestAuthor:true,
            parentType:2,
            typeId:22
        }
    },
      {
        path: '/addUser',
        name: 'addUser',
        component: AddUser,
        meta:{
            requestAuthor:true,
            parentType:2,
            typeId:23
        }
    },
      {
        path: '/userLog',
        name: 'userLog',
        component: UserLog,
        meta:{
            requestAuthor:true,
            parentType:2,
            typeId:24
        }
    }
]
