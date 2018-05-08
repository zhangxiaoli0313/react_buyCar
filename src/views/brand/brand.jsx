import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './brand.css'

class Brand extends Component {
    render() {
        let { list } = this.props;
        console.log(list)
        return (
            <div className='carlist'>
                {
                    list.map((item,index) => {
                        return (
                            <ul key={index}>
                                {
                                    item.map((items,ind) => {
                                        return (
                                            <p key={ind}>{items.carClass}</p>
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
import { UPDATA_LIST } from '../../store/reducer.js';
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
    console.log(UPDATA_LIST)
}
export default connect(mapStateToProps, mapDispatchToProps)(Brand)