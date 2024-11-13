const ActionCreator = (name,data) =>{
    return {
        type:name,
        payload:data
    }
}
export default ActionCreator;