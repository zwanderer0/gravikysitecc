const addState = {
    sideNav: false,
    navid: "HOME"
};

const reducer = (state = addState, action) => {

    if(action.type === "OPEN_SIDE_NAV") {
        return {
            ...state,
            sideNav: action.payload
        }
    }

    if(action.type === "CLOSE_SIDE_NAV") {
        return {
            ...state,
            sideNav: action.payload
        }
    }

    if(action.type === "NAV_ENTRY") {
        return {
            ...state,
            navid: action.payload
        }
    }
    
    return state;
}

export default reducer;