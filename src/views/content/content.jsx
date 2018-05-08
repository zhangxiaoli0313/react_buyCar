import React, { Component } from 'react'
import axios from 'axios'
import { UPDATA_LIST } from '../../store/reducer.js';
import { connect } from 'react-redux'
import './content.css'

class Content extends Component {
    render() {
        let { list } = this.props;
        console.log(list)
        return (
            <div className='pricelist'>
                {
                    list.map((item,index) => {
                        return (
                            <ul key={index}>
                                {
                                    item.map((items,ind) => {
                                        return (
                                            <li key={ind}>
                                                {
                                                    items.carList.map((itm, inx) => {
                                                        return (
                                                            <div className="cart" key={inx}>
                                                                <p className='bagcat'>{itm.carName}</p>
                                                                <p className='bagprice'>{itm.price}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                } 
            </div>
        )
    }
    componentDidMount() {
        this.props.updataList()
    }
}
function mapStateToProps(state) {
    return {
        list: state.updata_list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updataList: function () {
            fetch('../../../server/cart.json').then(res => res.json()).then(res => {
                dispatch({
                    type: UPDATA_LIST,
                    data: res
                })
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)