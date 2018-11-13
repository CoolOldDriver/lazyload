import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators'
import '../css/contentbox.css'

class ContentBox extends Component{
    componentDidMount(){
        this.props.changList()
    }
    render(){
        return(
            <div className="contentbox">
                <ul>
                    <li>精选</li>
                    <li>我的小组</li>
                </ul>
                <div className="contentShow">
                   
                    <img className="conimg" src={require('../img/FmqEelrPjawHU3eD7HxIL-M0Mm-i-tb100.jpg')} alt=""/>
                    <div className="conRight">
                        <p>她理财</p>
                        <h4>【她币商城】10.15-10.19商品出炉，另有热门唇釉回归</h4>
                        <p>此处省略一万字...</p>
                    </div>
                    
                </div>
                {
                    this.props.list.map((item)=>(
                        <div className="contentShow">                  
                            <img className="conimg" src={require('../img/FmqEelrPjawHU3eD7HxIL-M0Mm-i-tb100.jpg')} alt=""/>
                            <div className="conRight">
                                <p>{item.one}</p>
                                <h4>{item.two}</h4>
                                <p>{item.three}</p>
                            </div>
                        </div>
                    )
                    )
                }
                <button className="jiazai" onClick={()=>(this.props.jiazai(this.props.page))}>加载更多</button>
                
                
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    list:state.list,
    page:state.page
})

const mapDispatchToProps=(dispatch)=>({
    changList(){
        const action =actionCreators.changeListValue();
        dispatch(action)
    },
    jiazai(page){
        alert("aa")
        const action = actionCreators.jiazai(page+1);
        dispatch(action)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(ContentBox)