

export default function reducer(state, action){
    
    console.log('in reducer Handling ' + action.type);

    switch(action.type){
        case 'SET_INIT_CONFIGURATION':
            return {
                ...state,
                configuration: action.payload,
                activeTab: (state.activeTab == null) ? action.payload.indices[0] : state.activeTab
            }
                      
        default:
            return state;
    }
}