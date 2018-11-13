import * as actions from './actionType';
import {fetch} from 'node-fetch';
import axios from 'axios';


const changeOne=(value)=>({
    type:actions.CHANGELIST,
    value
})

const loginChange=(bbb)=>({
    type:actions.CHANGELOGIN,
    bbb
})

const changeJiazai =(value)=>({
    type:actions.CHANGEJIAZAI,
    value
})

const huanyiHuang=(valuess)=>({
    type:actions.HUANGYIHUAN,
    valuess
})


export const huangyiHuang= ()=>(
    (dispatch)=>{
        axios.get('/api/huanyihuan.json').then((res)=>{
            // console.log(res)
            const valuess = res.data.data;
            // console.log(res.data.data)
            dispatch(huanyiHuang(valuess))
            
        }).catch(()=>{
            console.log("no")
        })
    }
)

export const loginChanges = () =>({
    type:actions.LOGINCHANE,
    value:false
})

export const changeListValue = ()=>(
    (dispatch)=>{
        axios.get('/api/ceshi.json').then((res)=>{
            console.log(res)
            const value = res.data.list
            dispatch(changeOne(value))
            
        }).catch(()=>{
            console.log("no")
        })
    }
)
export const login=(account,password)=>(
    (dispatch)=>{
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=>{
            const tg=res.data.data;
            // console.log(res.data.data)
            const action = loginChange(tg)
            dispatch(action)

        })
    }
)


// export const changeListValue =()=>(
//     (dispatch)=>{
//         fetch('/ceshi.json').then((res) => {
//         console.log(res)
//     }).then(json => console.log(json));
//     }
// )

export const jiazai = (page) => (
    (dispatch)=>{
        axios.get(axios.get('/api/jiazai.json?page='+page).then((res)=>{
            console.log(res)
            const value = res.data.list
            dispatch(changeJiazai(value))
            
        }).catch(()=>{
            console.log("no")
        }))
    }
)