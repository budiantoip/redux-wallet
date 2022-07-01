const rootReducer = (state, action) => {
    switch (action.type) {
        case "withdraw":
            if(state.balance >= 10000){
                return { ...state, balance: state.balance - 10000 };
            }
            
            return state;
        case "deposit":
            return { ...state, balance: state.balance + 10000 };
        default:
            return state;
    }
}

export default rootReducer;
