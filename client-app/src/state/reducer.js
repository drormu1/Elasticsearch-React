

export default function reducer(state, action){
    
    console.log('in reducer Handling ' + action.type);

    switch(action.type){
        case 'SET_INIT_CONFIGURATION':         
            return {
                ...state,
                configuration: action.payload,
                activeIndex: action.payload== null ? ( state.activeIndex == null ? 'orders' : state.activeIndex) : action.payload.indices[0]
            }
             
        case 'TERM_CHANGED':         
            return {
                ...state,                
                term: action.payload
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
            

        default:
            return state;
    }
}