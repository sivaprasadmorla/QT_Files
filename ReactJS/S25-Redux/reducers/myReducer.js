const myReducer = (state,action) =>{
    let newState ;

    newState = action.payload;
    console.log(newState);
    return newState;
}

export default myReducer;