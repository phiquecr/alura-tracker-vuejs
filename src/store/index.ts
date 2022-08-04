import INotificao from "@/interfaces/INotificacao";
import IProjetos from "@/interfaces/IProjetos";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex"
import { ADICIONA_PROJETO, ALTERA_PROJETO, DEFINIR_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from "./type-mutations";
import { OBTER_PROJETOS, CADASTRAR_PROJETOS, ALTERAR_PROJETOS, REMOVER_PROJETOS } from './type-actions';
import http from "@/http"

interface Estado {
  projetos: IProjetos[],
  notificacoes: INotificao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: [],
    notificacoes: []
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        name: nomeDoProjeto
      } as IProjetos
      state.projetos.push(projeto)
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter(proj => proj.id != id)
    },
    [ALTERA_PROJETO](state, projeto: IProjetos) {
      const index = state.projetos.findIndex(proj => proj.id == projeto.id)
      state.projetos[index] = projeto
    },
    [DEFINIR_PROJETO](state, projetos: IProjetos[]) {
      state.projetos = projetos
    },
    [NOTIFICAR](state, novaNotificacao: INotificao) {
      novaNotificacao.id = new Date().getTime()
      state.notificacoes.push(novaNotificacao)

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
      }, 4000)
    }
  },
  actions: {
    [OBTER_PROJETOS] ({ commit }) {
      http.get("projetos")
        .then(resposta => commit(DEFINIR_PROJETO, resposta.data))
    },
    [CADASTRAR_PROJETOS] (context, nomeDoProjeto: string) {
      return http.post("/projetos", {
        name: nomeDoProjeto
      })
    },
    [ALTERAR_PROJETOS] (context, projeto: IProjetos) {
      return http.put(`/projetos/${projeto.id}`, projeto)
    },
    [REMOVER_PROJETOS] ({ commit }, id: string) {
      return http.delete(`/projetos/${id}`).then(() => commit(EXCLUIR_PROJETO, id))
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}