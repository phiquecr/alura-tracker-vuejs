import { TipoNotificacao } from "@/interfaces/INotificacao";
import { NOTIFICAR } from "@/store/type-mutations";
import { store } from "@/store";

export const notificacaoMixin = {
  methods: {
    notificar(type: TipoNotificacao, title: string, text: string) : void {
      store.commit(NOTIFICAR, {
        title,
        text,
        type,
      });
    },
  }
}