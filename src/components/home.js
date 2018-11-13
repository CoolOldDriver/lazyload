import React, {Component ,Fragment} from 'react';


import ContentBox from './contentbox';
import '../css/home.css';
class Home extends Component {
    
    render(){
        // console.log(this.props.list)
        return(
            <Fragment>
                
                <div className="content">
                    <img className="homeban" src={require('../img/OTA1ZjA4Y2JjYjhhMzcwZmZiNjkxYWUwNDQ2MWM2MmQ-ad1400.jpg')}/>
                    <div className="contentLeft">
                       
                        <ContentBox />
                        
                    </div>
                    <div className="contentRight">
                        <img src={require('../img/banner_new-117c6ec76e.png')}/>
                        <img src={require('../img/banner_52-80f21aafdb.png')}/>
                        <img src={require('../img/banner_12_new-3591ff3e12.jpg')}/>
                        <img src={require('../img/banner_bx-730d05fbf8.jpg')}/>
                        <div>
                            <h3>理财达人</h3>
                            <p>
                                <img className="logoxx" src={require('../img/Y2QyMDA1YjgyYWI0ZmE5NDgzNDhiZjYyYWRmODYyN2I-tb100.jpg')} alt=""/>
                                <span>哈哈哈</span>
                            </p>
                            <p>
                                <img className="logoxx" src={require('../img/Y2QyMDA1YjgyYWI0ZmE5NDgzNDhiZjYyYWRmODYyN2I-tb100.jpg')} alt=""/>
                                <span>哈哈哈</span>
                            </p>
                            <p>
                                <img className="logoxx" src={require('../img/Y2QyMDA1YjgyYWI0ZmE5NDgzNDhiZjYyYWRmODYyN2I-tb100.jpg')} alt=""/>
                                <span>哈哈哈</span>
                            </p>
                            <p>
                                <img className="logoxx" src={require('../img/Y2QyMDA1YjgyYWI0ZmE5NDgzNDhiZjYyYWRmODYyN2I-tb100.jpg')} alt=""/>
                                <span>哈哈哈</span>
                            </p>
                            <p>
                                <img className="logoxx" src={require('../img/Y2QyMDA1YjgyYWI0ZmE5NDgzNDhiZjYyYWRmODYyN2I-tb100.jpg')} alt=""/>
                                <span>哈哈哈</span>
                            </p>
                            <p>
                                <img className="logoxx" src={require('../img/Y2QyMDA1YjgyYWI0ZmE5NDgzNDhiZjYyYWRmODYyN2I-tb100.jpg')} alt=""/>
                                <span>哈哈哈</span>
                            </p>
                            <p>
                                <img className="logoxx" src={require('../img/Y2QyMDA1YjgyYWI0ZmE5NDgzNDhiZjYyYWRmODYyN2I-tb100.jpg')} alt=""/>
                                <span>哈哈哈</span>
                            </p>
                            <p>
                                <img className="logoxx" src={require('../img/Y2QyMDA1YjgyYWI0ZmE5NDgzNDhiZjYyYWRmODYyN2I-tb100.jpg')} alt=""/>
                                <span>哈哈哈</span>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </Fragment>
        )
    }
    
    

    
}


export default Home