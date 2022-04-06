export const filterReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_UI":
            state = "UI"
            return state
            break;
        case "FILTER_BUG":
            state = "Bug"
            return state
            break;
        case "FILTER_FEATURE":
            state = "Feature"
            return state
            break;
        default:
            return state = "All"
    }
}