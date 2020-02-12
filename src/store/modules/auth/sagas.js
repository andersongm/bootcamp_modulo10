import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (user.provider) {
            // console.tron.error('Usuário não é prestador e serviços');
            // toast.error('Usuário não é prestador e serviços');
            Alert.alert(
                'Erro no Login',
                'O usuário não pode ser prestador de serviços'
            );
            yield put(signFailure());
            return;
        }

        api.defaults.headers.Autorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));

        // history.push('/dashboard');
    } catch (err) {
        // toast.error('Falha na autenticação, verifique seus dados!');
        Alert.alert(
            'Falha na Autenticação',
            'Houve um erro na autenticação, verifique seus dados!'
        );
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password,
        });

        // history.push('/');
    } catch (err) {
        // toast.error('Falha no cadastro, verifique seus dados');
        Alert.alert(
            'Falha no cadastro',
            'Houve um erro no cadastro, verifique seus dados!'
        );

        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;
    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Autorization = `Bearer ${token}`;
    }
}

export function signOut() {
    // history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
