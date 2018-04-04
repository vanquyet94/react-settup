import {UPDATE_USER} from 'constants/user';

const initialUserState = {
    name: 'Full Name'
};
const user = (state = initialUserState, action) => {
    switch(action.type) {
        case UPDATE_USER.RECEIVED:
        default:
            return state;
    }
}
export default user;