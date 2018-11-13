import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as actionCreators from '../store/actionCreators';


class Login extends Component{
    render(){
        if(!this.props.login){
            return(
                <div>
                    账号:<input type="text" ref={(input) => {this.account = input}} />
                    密码:<input type="password"  ref={(input) => {this.password = input}}/>
                    <button onClick={()=>this.props.handleClick(this.account.value,this.password.value)}>提交</button>
                </div>
            )
        }else{
            return <Redirect to='/'/>
        }
        
    }
}
const mapDispatchToProps=(dispatch)=>({
    handleClick(account,password){
        // console.log(account)
        const action=actionCreators.login(account,password)
        dispatch(action)
    }
})
const mapStateToProps=(state)=>({
    login:state.login
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)