import IProjetos from "@/interfaces/IProjetos";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex"

interface Estado {
  projetos: IProjetos[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: []
  },
  mutations: {
    "ADICIONA_PROJETO"(state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        name: nomeDoProjeto
      } as IProjetos
      state.projetos.push(projeto)
    },
    "ALTERA_PROJETO"(state, projeto: IProjetos) {
      const index = state.projetos.findIndex(proj => proj.id == projeto.id)
      state.projetos[index] = projeto
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}