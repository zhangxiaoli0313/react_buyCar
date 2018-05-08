import React, { Component } from 'react';
import { connect } from 'react-redux'
import { UPDATA_LIST } from '../../store/reducer.js';
import './city.css'
import axios from 'axios'
var mycity = remote_ip_info['city'];
class City extends Component {
    constructor() {
        super()
        this.state = {
            data: null,
            arr: [mycity + "市"]
        }
        this.Return = this.Return.bind(this)
        this.add = this.add.bind(this)
        this.registration = this.registration.bind(this);
        this.del = this.del.bind(this)
    }
    render() {
        let { list } = this.props;
        let { arr } = this.state;
        return <div id='city'>
            <header><span onClick={this.Return}>{'<'}</span>|<span>选择城市</span></header>
            <section>
                <p onClick={this.registration}><span>您的上牌地址</span><span>></span></p>
                <p>你已选择城市</p>
                <ul className='uls'>
                    {
                        arr.map((item, index) => {
                            return <li key={index} onClick={this.del.bind(this, item)} >{item}</li>
                        })
                    }
                </ul>
                <div>
                    {list.map((item, index) => {
                        return <div className='wrap' key={index}>
                            <h4>{item.letter}</h4>
                            <ul className="uls" >
                                {item.province.map((its, jts) => {
                                    return <li key={jts} onClick={this.add} ref={its}>{its}</li>
                                })}
                            </ul>
                        </div>
                    })}
                </div>
            </section>
        </div>
    }
    componentDidMount() {
        this.props.updataList()
    }
    add(e) {
        let { arr } = this.state
        if (e.target.className == "") {
            e.target.className = "border";
            if (arr.indexOf(e.target.innerHTML) == -1) {
                this.setState({
                    arr: [...arr, e.target.innerHTML]
                })
            }
        } else {
            arr.splice(arr.indexOf(e.target.innerHTML), 1)
            e.target.className = "";
            this.forceUpdate()
        }
    }

    registration() {
        this.props.history.push('/registration')
    }
    del(ev) {
        let { arr } = this.state;
        let inner = this.refs[ev].innerHTML
        this.refs[ev].className = ''
        if (arr.length > 1) {
            arr.splice(arr.indexOf(inner), 1)
        }
        this.forceUpdate()
    }
    Return() {
        this.props.history.push('/index/home')
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
            fetch('../../../server/data.json').then(res => res.json()).then(res => {
                dispatch({
                    type: UPDATA_LIST,
                    data: res
                })
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(City)