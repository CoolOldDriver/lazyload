import * as actions from './actionType';
const defaultState={
    list:[],
    login:false,
    page:1,
    pageindex:1,
    pagesum:1,
    val:[1,2]
}


export default (state=defaultState,action)=>{
   if(action.type===actions.CHANGELIST){
       const newState=JSON.parse(JSON.stringify(state));
       newState.list=action.value;
       return newState
   }
   if(action.type===actions.CHANGELOGIN){
        const newState=JSON.parse(JSON.stringify(state));
        newState.login=action.bbb;
        return newState
   }
   if(action.type===actions.LOGINCHANE){
    const newState=JSON.parse(JSON.stringify(state));
    newState.login=action.value;
    return newState
    }
    if(action.type===actions.CHANGEJIAZAI){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=newState.list.concat(action.value)
        return newState
    }
    if(action.type===actions.HUANGYIHUAN){
        const newState=JSON.parse(JSON.stringify(state));
        newState.val=newState.valuess;
        
        return newState
    }

    return state
}