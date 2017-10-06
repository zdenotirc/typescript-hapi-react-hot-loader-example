import {FormReducer} from 'redux-form';
import ILoadingReducerState from './loading/ILoadingReducerState';
import IMetaReducerState from './meta/IMetaReducerState';
import IUserReducerState from './user/IUserReducerState';
import IRenderReducerState from './render/IRenderReducerState';

interface IStore {
    readonly form: FormReducer;
    readonly loadingReducer: ILoadingReducerState;
    readonly metaReducer: IMetaReducerState;
    readonly renderReducer: IRenderReducerState;
    readonly userReducer: IUserReducerState;
}

export default IStore;
