import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators'
import '../css/jijin.css';

class Jijin extends Component{
    render(){
        
        console.log(this.props.values)
        // let newArr=[]
        // for(let i=(this.props.pageindex-1);i<(this.props.pageindex*10);i++){
        // newArr.push(<p>{this.props.values[i]}</p>)
        // }
        return(
            <Fragment>
                <div className="jijin">
                   {/* {newArr} */}
                    
                </div>
                <button onClick={this.props.mmp}>换一些</button>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.huanyihuan()
    }
}

const mapStateToProps=(state)=>({
    pageindex:state.pageindex,
    pagesum:state.pagesum,
    values:state.values
})
const mapDispatchToProps=(dispatch)=>({
    huanyihuan(){
       const action = actionCreators.huangyiHuang();
       dispatch(action)
   }
   
})
export default connect(mapStateToProps,mapDispatchToProps)(Jijin)