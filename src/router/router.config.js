import React,{Component} from 'react'
import Home from '../views/home'
import Index from '../views/index'
import Catagory from '../views/catagory';
import Cart from '../views/cart'
import Mine from '../views/mine'
import City from '../views/city'
import Registration from '../views/registration'
import Order from '../views/order'
import Brand from '../views/brand'
import Price from '../views/price'
import Screen from '../views/screen'
import Content from '../views/content'
import {combineReducers} from 'redux';
// function Index(){
//     return <h1>Index</h1>
// }
let router={
    routes:[
        {   //一级路由
            path:"/index",
            component:Index,
            children:[//二级路由
                {
                    path:"/index/home",
                    component:Home
                },
                {
                    path:"/index/catagory",
                    component:Catagory,
                    children: [
                        {
                            path:"/index/catagory/order",
                            component:Order,
                            children: [
                                {
                                    path:"/index/catagory/order/content",
                                    component:Content
                                }
                            ]
                        },
                        {
                            path:"/index/catagory/brand",
                            component:Brand
                        },
                        {
                            path:"/index/catagory/price",
                            component:Price
                        },
                        {
                            path:"/index/catagory/screen",
                            component:Screen
                        }
                    ]
                },{
                    path:"/index/cart",
                    component:Cart
                },{
                    path:"/index/mine",
                    component:Mine
                }
            ]
        },{
            path:"/city",
            component:City
        },{
            path:"/registration",
            component:Registration
        }
    ]
}
export default router