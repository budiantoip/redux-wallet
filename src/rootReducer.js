const rootReducer = (state, action) => {
    switch (action.type) {
        case "withdraw":
            if(state.balance >= action.amount){
                return { ...state, balance: state.balance - action.amount };
            }

            return state;
        case "deposit":
            return { ...state, balance: state.balance + action.amount };
        default:
            return state;
    }
}

export default rootReducer;
