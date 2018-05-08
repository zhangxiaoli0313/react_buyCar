import React,{Component} from 'react';
import './index.css'
import {NavLink,Link} from 'react-router-dom';
import RouterWrapper from '../../components/route.jsx'
//ip地址定位
var mycity = remote_ip_info['city'];
class Index extends Component{
    constructor(){
        super();
        this.state={
            city:''
        }
         this.getCity = this.getCity.bind(this)
    }
    componentDidMount(){
        //设置ip地址位置
        this.setState({
            city:mycity
        })
    }
    render(){
        let {routes} =this.props
        //默认ip地址获取
        let {city}=this.state
        return <div id='index'>
              <header>
                 <span onClick={this.getCity}>{city}</span>
                 <span><input type="text" placeholder='搜索'/></span>
              </header>
              <div className='content'>
                    <RouterWrapper routes={routes}></RouterWrapper>
              </div>
              <ul className='footerNav'>
                    <li>
                        <NavLink to='/index/home' activeClassName='tab-active'>
                            <span className='iconfont icon-home'></span>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/index/catagory' activeClassName='tab-active'>
                            <span className='iconfont icon-catagory'></span>
                            <span>分类</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/index/cart' activeClassName='tab-active'>
                            <span className='iconfont icon-cart'></span>
                            <span>购物车</span>
                        </NavLink>
                        </li>
                    <li>
                        <NavLink to='/index/mine' activeClassName='tab-active'>
                            <span className='iconfont icon-mine'></span>
                            <span>我的</span>
                        </NavLink>
                    </li>
              </ul>
        </div>
    }
    getCity() {
        this.props.history.push('/city')
    }
}
export default Index