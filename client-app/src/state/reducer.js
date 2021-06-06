

export default function reducer(state, action){
    
    console.log('in reducer Handling ' + action.type);

    switch(action.type){
        case 'SET_INIT_CONFIGURATION':
                        
                return {
                    ...state,
                    configuration: action.payload
                }
                      
        
        default:
            return state;
    }
}