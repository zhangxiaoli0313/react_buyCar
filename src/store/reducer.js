export const UPDATA_LIST='UPDATA_LIST'
export const UPDATA_DATA='UPDATA_DATA'
import {combineReducers} from 'redux'
let initState={
    updata_list:[],
    updata_data:[]
}
function updata_list(state=initState.updata_list,action){
    if(action.type==UPDATA_LIST){
        return action.data
    }
    return state
}
function updata_data(state=initState.updata_data,action){
    if(action.type==UPDATA_DATA){
        return action.data
    }
    return state
}
export default combineReducers({
    updata_list,
    updata_data
})