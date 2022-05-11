// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchMessages } from '../../bus/messages/saga';
import { watchUser } from '../../bus/user/saga';
// import { watch__entityName__ } from '../../bus/__entityName__/saga';

export function* rootSaga() {
    yield all([ watchMessages(), watchUser() ]);
}
