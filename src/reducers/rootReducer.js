import finnish from './textfinnish.js';

import english from './textenglish.js';




var initState = {

    texts: finnish,
    loadingscreen: "on"

}

const rootReducer = (state=initState, action) => { 



if (action.type === "change") {
    
    if (action.language === "fin") {

        return {
            ...state,
            texts: finnish
        }

    }

    if (action.language === "eng") {

        return {
            ...state,
            texts: english
        }
        
    }


}

if (action.type === "loading") {

    return {
        ...state,
        loadingscreen: "off"
    }


}

return state

}

export default rootReducer;