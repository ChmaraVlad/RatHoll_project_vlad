// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchInitialAction, watchFetchInitial } from './fetchInitial';

export const useInitialSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchInitial: () => void dispatch(fetchInitialAction(1)),
    };
};

export function* watchInitial(): SagaIterator {
    yield all([ call(watchFetchInitial) ]);
}
