const searchMemory = (state=[],action) => {
    switch(action.type){
        // case 'STORAGE_LIST':
        //     console.log('!!!!:',action.content)
        //     return [...state, action.content]
        case 'ADD_SEARCH_MEMORY':
            return [...state,action.item]
        default:
            return state
    }
} 

export default searchMemory;
export const getSearchMemory = (state) => state.searchMemory
