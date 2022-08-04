export enum TipoNotificacao {
  SUCCESS,
  WARNING,
  DANGER
}

export default interface INotificao {
  title: string
  text: string
  type: TipoNotificacao
  id: number
}