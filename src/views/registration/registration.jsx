import React, { Component } from 'react';
import { connect } from 'react-redux'
import city from '../../../server/province.js'
import './registration.css'
import '../../static/font1/iconfont.css'
class registration extends Component {
    constructor() {
        super();
        this.state = {
            arr: [],
            newarr: [],
            right: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        }
    }
    render() {
        let { arr, newarr, right } = this.state
        return (
            <div id='registration'>
                <div className="top">
                    <h2 onClick={this.handleChange.bind(this)}>
                        <i className="icon iconfont icon-zuojiantou"></i>
                        上牌地址
                    </h2>
                </div>
                <section>
                    <div id='left' ref='the' className='left'>
                        {arr.map((item, index) => {
                            return <div className='wrap' key={index}>
                                <h4 ref={item.letter}>{item.letter}</h4>
                                <ul className="ul" >
                                    {item.province.map((its, jts) => {
                                        return <li onClick={this.cl.bind(this, its)} key={jts}>{its.name}</li>
                                    })}
                                </ul>
                            </div>
                        })}
                    </div>
                    <div className='center'>
                        <ul className='ul' >
                            {
                                newarr.map((item, index) => {
                                    return <li key={index}>{item.name}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='right'>
                        <ul ref='bodybox'>
                            {
                                arr.map((item, index) => {
                                    return <li onClick={this.ri.bind(this, item, index)} key={index}>{item.letter}</li>
                                })
                            }
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
    handleChange() {
        this.props.history.push('/city')
    }
    componentDidMount() {
        let cts = []
        city.provinceArr.map(item => {
            cts.push(item.province[0])
        })
        let id = cts[0].id;
        for (let ins in city.city) {
            if (ins == id) {
                this.setState({
                    newarr: city.city[ins]
                })
            }
        }
        this.setState({
            arr: city.provinceArr
        })
    }
    cl(ct) {
        let id = ct.id;
        for (let ins in city.city) {
            if (ins == id) {
                this.setState({
                    newarr: city.city[ins]
                })
            }
        }
    }
    ri(item, letter) {
        let sum = document.getElementById("left").getElementsByClassName("wrap")
        let js = 0;
        for (let i = 0; i < sum.length; i++) {
            if (i == letter) {
                if (js == 84) {
                    js += sum[i].offsetHeight
                    document.getElementById("left").scrollTop = 0
                    console.log(sum[i].offsetHeight)
                } else {
                    js += sum[i].offsetHeight
                    console.log(sum[i].offsetHeight)
                    document.getElementById("left").scrollTop = js;
                }
            }
        }
    }
}
export default registration