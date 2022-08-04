import { TipoNotificacao } from '@/interfaces/INotificacao';
import { store } from '@/store';
import { NOTIFICAR } from '@/store/type-mutations';

type Notificador = {
  notificar: (type: TipoNotificacao, title: string, text: string) => void
}

export default () : Notificador => {

  const notificar = (type: TipoNotificacao, title: string, text: string) : void  => {
    store.commit(NOTIFICAR, {
      title,
      text,
      type,
    });
  }

  return {
    notificar
  }
}