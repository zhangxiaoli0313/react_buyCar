import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import RouterWrapper from '../../components/route.jsx'
import './order.css'

class Order extends Component {
    render() {
        let {routes} =this.props
        return (
            <div>
                <div className="box">
                    <ul>
                        <li>
                            <NavLink to='/index/catagory/order/content'>
                                价格最高
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/index/catagory/order/content'>
                                价格最低
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="boss">
                    <RouterWrapper routes={routes}></RouterWrapper>
                </div>
            </div>
        )
    }
}

export default Order