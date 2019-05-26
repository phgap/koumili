import { combineReducers } from 'redux';

// import { authentication } from './authentication.reducer';
// import { users } from './users.reducer';
// import { alert } from './alert.reducer';
import { users } from './users.reducer'
import { ui } from './ui.reducer'
import { slides } from './sliders.reducer'
import {goods} from './goods.reducer'

const rootReducer = combineReducers({
    users,
    ui,
    slides,
    goods
});

export default rootReducer;