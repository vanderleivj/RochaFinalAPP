import {
    DO_LOGIN,
    LOGIN_ERROR,
    LOGIN_LOADING,
    GET_SOLICITACOES,
    GET_TOTAL,
    GET_SOLICITACOES_CONCLUIDAS,
    GET_SOLICITACOES_ANDAMENTO,
    GET_USER,
    GET_CALENDARIO,
} from '../constants/UserConstants';


const doLoginLoading = (dispatch) => {
    dispatch({type: LOGIN_LOADING})
}
const doLoginEnd = (dispatch, data) => {
    dispatch({type: DO_LOGIN, data});
}

const doLoginErrorEnd = (dispatch, data) => {
    dispatch({type: LOGIN_ERROR, data});
}

const getSolicitacoesEnd = (dispatch, data) => {
    dispatch({type: GET_SOLICITACOES, data});
}

const getSolicitacoesConcluidasEnd = (dispatch, data) => {
    dispatch({type: GET_SOLICITACOES_CONCLUIDAS, data});
}

const getCalendarioEnd = (dispatch, data) => {
    dispatch({type: GET_CALENDARIO, data});
}

const getSolicitacoesAndamentoEnd = (dispatch, data) => {
    dispatch({type: GET_SOLICITACOES_ANDAMENTO, data});
}

const getTotalEnd = (dispatch, data) => {
    dispatch({type: GET_TOTAL, data});
}

const getUserEnd = (dispatch, data) => {
    dispatch({type: GET_USER, data});
}




export const doLogin = (user, password, callback) => {

    return dispatch => {

        doLoginLoading(dispatch);

            fetch('https://apps.blueprojects.com.br/rocha/Security/login',
            {
              method: 'POST',
              timeout: 100,
              headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                      },
              body: JSON.stringify({
                'username': user,
                'password' : password
              }),
            })
            .then((response) => response.json())
            .then((responseJson) => {

              console.log(responseJson);

            if(responseJson.error == null)
            {

               doLoginEnd(dispatch, responseJson.data);

               callback(responseJson);
            }
            else
            {
                doLoginErrorEnd(dispatch, responseJson.error.message);
            }

          });
    }
}

export const getSolicitacoes = (obj, token, callback) => {

    return dispatch => {

        fetch('https://apps.blueprojects.com.br/rocha/Integration/Query', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth' : token,
        },
        body: JSON.stringify(obj)
        }).then((response) => response.json()).then((responseJson) => {

            console.log(responseJson);

            if(responseJson.list != null)
                getSolicitacoesEnd(dispatch, responseJson.list);

            callback(responseJson.list);
        });

    }
}

export const getSolicitacoesConcluidas = (obj, token, callback) => {

    return dispatch => {

        fetch('https://apps.blueprojects.com.br/rocha/Integration/Query', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth' : token,
        },
        body: JSON.stringify(obj)
        }).then((response) => response.json()).then((responseJson) => {

            console.log(responseJson);

            if(responseJson.list != null){
                getSolicitacoesConcluidasEnd(dispatch, responseJson.list);
                getCalendarioEnd(dispatch, responseJson.list);
            }


            callback(responseJson.list);
        });

    }
}

export const getSolicitacoesAndamento = (obj, token, callback) => {

    return dispatch => {

        fetch('https://apps.blueprojects.com.br/rocha/Integration/Query', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth' : token,
        },
        body: JSON.stringify(obj)
        }).then((response) => response.json()).then((responseJson) => {

            console.log(responseJson);

            if(responseJson.list != null)
                getSolicitacoesAndamentoEnd(dispatch, responseJson.list);

            callback(responseJson.list);
        });

    }
}

export const getTotal = (obj, token, callback) => {

    return dispatch => {

        fetch('https://apps.blueprojects.com.br/rocha/Integration/Query', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth' : token,
        },
        body: JSON.stringify(obj)
        }).then((response) => response.json()).then((responseJson) => {

            console.log(responseJson);

            if(responseJson.list != null)
                getTotalEnd(dispatch, responseJson.list);

            callback(responseJson.list);
        });

    }
}

export const getUser = (obj, token, callback) => {

    return dispatch => {

        fetch('https://apps.blueprojects.com.br/rocha/Integration/Query', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth' : token,
        },
        body: JSON.stringify(obj)
        }).then((response) => response.json()).then((responseJson) => {

            console.log(responseJson);

            if(responseJson.list != null)
                getUserEnd(dispatch, responseJson.list);

            callback(responseJson.list);
        });

    }
}

