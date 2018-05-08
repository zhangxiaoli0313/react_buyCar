import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import RouterWrapper from '../../components/route.jsx'
import '../../static/font2/iconfont.css'
import './catagory.css'
class Catagory extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.clickorder = this.clickorder.bind(this);
    }
    render() {
        let { routes } = this.props
        return <div id='catagory'>
            <ul className='tabnav'>
                <li>
                    <NavLink to='/index/catagory/order' onClick={this.clickorder}>
                        <span>排序</span>
                        <b className='iconfont icon-shang'></b>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/index/catagory/brand'>
                        <span>品牌</span>
                        <span className='iconfont icon-shang'></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/index/catagory/price'>
                        <span>价格</span>
                        <span className='iconfont icon-shang'></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/index/catagory/screen'>
                        <span>筛选</span>
                        <span className='iconfont icon-shang'></span>
                    </NavLink>
                </li>
            </ul>
            <div className='tablist'>
                <RouterWrapper routes={routes}></RouterWrapper>
            </div>
        </div>
    }
    clickorder(e) {
        // 获取点击元素的子元素标签  （失败）
        console.log(e.currentTarget.getAttribute('aria-current'))
        // console.log(e.currentTarget.getAttribute('tab-tabs'))
        // if(e.currentTarget.getAttribute('aria-current') == 'true'){
        //     console.log(e.currentTarget.getAttribute('tabs'))
        // } else {

        // }
    }
    componentDidMount() {

    }
}
export default Catagory