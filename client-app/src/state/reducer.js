

export default function reducer(state, action){
    
    console.log('in reducer Handling ' + action.type);

    switch(action.type){
        case 'SET_INIT_CONFIGURATION':         
            return {
                ...state,
                configuration: action.payload,
                activeIndex: action.payload== null ? ( state.activeIndex == null ? 'orders' : state.activeIndex) : action.payload.indices[0]
            }
                    
        case 'SET_AUTOCOMPLETE_RESULTS':  
              
            return {
                ...state,                
                autocompleteResults: action.payload
            }        
        case 'SET_TERM': 
        return {
            ...state,                
            term: action.payload
        }

        case 'SET_ACTIVE_INDEX': 
        return {
            ...state,                
            activeIndex: action.payload
        }

        case 'SET_ACITVE_RESULTS':         
            return {
                ...state,                
                results: action.payload
            }
        case 'SET_NONACTIVE':         
            return {
                ...state,                
                nonActiveResults: action.payload
            }            
        
        default:
            return state;
    }
}