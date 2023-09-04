import { configureStore } from '@reduxjs/toolkit';
import { searchOne, changeSearchTerm } from './searchTermSLice';


const store = configureStore({
    reducer: {
        search: searchOne,
        //form: formReducer,
    },
});

export { changeSearchTerm};
//export {store};


