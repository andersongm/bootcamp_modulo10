import { takeLatest, all, put, call } from 'redux-saga/effects';

import { Alert } from 'react-native';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest } = payload.data;

        const profile = {
            name,
            email,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, 'users', profile);

        // toast.success('Perfil Atualizado com Sucesso!');
        Alert.alert('Sucesso', 'Perfil Atualizado com Sucesso!');

        yield put(updateProfileSuccess(response.data));
    } catch (err) {
        console.tron.error(err.message);
        // toast.error('Erro ao atualizar perfil, confira seus dados');
        Alert.alert('Erro', 'Erro ao atualizar perfil, confira seus dados!');
        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
