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
  GET_PROCESSOS_GARANTIA_SP,
} from '../constants/UserConstants';

const INITIAL_STATE = {
  user_data: null,
  login_loading: false,
  errorMessage: null,
  listaSolicitacoes: [],
  totalSolicitacao: 0,
  totalConcluidos: 0,
  totalAndamento: 0,
  processosGarantiaSP: 0,
  calendarMarked: null,
  solicitacoesConcluidas: [],
  user: [],
  totalSolicitacaoSP: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        login_loading: false,
        user_data: action.data,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        login_loading: true,
        errorMessage: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login_loading: false,
        errorMessage: action.data,
      };
    case GET_SOLICITACOES:
      return {
        ...state,
        listaSolicitacoes: action.data,
      };
    case GET_SOLICITACOES_CONCLUIDAS:
      return {
        ...state,
        solicitacoesConcluidas: action.data,
      };

    case GET_SOLICITACOES_ANDAMENTO:
      return {
        ...state,
        solicitacoesConcluidas: action.data,
      };
    case GET_USER:
      return {
        ...state,
        user: action.data,
      };
    case GET_CALENDARIO:
      var agenda = new Object();
      var marked = new Object();
      var markedArray = new Array();

      for (let i = 0; i < action.data.length; i++) {
        if (!marked[action.data[i].DATA_PREVISTA.substring(0, 10)]) {
          marked[action.data[i].DATA_PREVISTA.substring(0, 10)] = {
            marked: true,
            customStyles: {
              container: {
                backgroundColor: '#264177',
              },
              text: {
                color: '#FFF',
              },
            },
          };

          markedArray.push(action.data[i]);
        }
      }

      var rr;
      var rm;

      if (state.gerenteMarked != null) {
        rm = state.gerenteMarked;

        Object.keys(rm).forEach(key => {
          marked[key] = rm[key];
        });
      }

      rm = marked;

      if (state.gerenteAgenda != null) {
        rr = state.gerenteAgenda;

        Object.keys(rr).forEach(key => {
          agenda[key] = rr[key];
        });
      }

      rr = agenda;

      console.log(rr);

      return {
        ...state,
        loading_agenda: false,
        gerenteAgenda: rr,
        calendarMarked: rm,
        gerenteMarkedArray: markedArray,
      };

    case GET_TOTAL:
      var array = action.data;
      var _concluidos = 0;
      var _solicitacoes = 0;
      var _andamento = 0;

      for (var i = 0; i < action.data.length; i++) {
        _solicitacoes += action.data[i].TOTAL;

        if (action.data[i].STATUS == 'Concluído') {
          _concluidos += action.data[i].TOTAL;
        }

        if (action.data[i].STATUS == 'Em andamento') {
          _andamento += action.data[i].TOTAL;
        }
      }

      return {
        ...state,
        totalSolicitacao: _solicitacoes,
        totalConcluidos: _concluidos,
        totalAndamento: _andamento,
      };

    case GET_PROCESSOS_GARANTIA_SP:
      return {
        ...state,
        totalSolicitacaoSP: action.data,
      };
  }

  return state;
};
