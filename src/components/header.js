import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators'
import '../css/header.css'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <ul className="nav-one">
                    <li className="nav-left"><img src={require('../img/logo-b0586d743f.png')}/></li>
                    <li className="nav-left">首页</li>
                    <li className="nav-left">服务</li>
                    <li className="nav-right">搜索</li>
                    <li className="nav-right">手机</li>
                    {
                        this.props.login?<li className="nav-right" onClick={this.props.loginChange} >退出</li>:
                        <li className="nav-right" ><Link to="/login">登录</Link></li>
                    }
                    
                    <li className="nav-right">注册</li>
                </ul>
                <ul className="nav-two">
                    <li><Link to="/">小组</Link></li>
                    <li><Link to="/licai">综合理财</Link></li>
                    <li><Link to="/yuanmeng">攒钱圆梦</Link></li>
                    <li><Link to="/jijin">基金可以这么玩</Link></li>
                    <li>玩转信用卡</li>
                    <li>我的保险我做主</li>
                    <li>股票涨涨涨</li>
                    <li>房子.家具</li>
                    <li>买买买俱乐部</li>
                    <li>21天边菜鸟</li>
                    <li className="nav-active">更多</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    login:state.login
})
const mapDispatchToProps=(dispatch)=>({
    loginChange(){
        const action = actionCreators.loginChanges()
        dispatch(action)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)