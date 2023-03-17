import { all } from 'redux-saga/effects';
import foodModel from '../model/food';

export default function* rootSaga() 
{
    yield all(
    [
        // foodModel.getAll(),
    ])
}