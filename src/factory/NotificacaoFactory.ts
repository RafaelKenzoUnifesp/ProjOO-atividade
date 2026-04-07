import { Notificacao } from "../interfaces/Notificacao"
import { NotificacaoEmail } from "../notificacoes/NotificacaoEmail"
import { NotificacaoSMS } from "../notificacoes/NotificacaoSMS"
import { NotificacaoPush } from "../notificacoes/NotificacaoPush"

export class NotificacaoFactory {
  static criarNotificacao(tipo: string): Notificacao {
    switch (tipo.toLowerCase()) {
      case "email":
        return new NotificacaoEmail()
      case "sms":
        return new NotificacaoSMS()
      case "push":
        return new NotificacaoPush()
      default:
        throw new Error(`Tipo de notificacao invalido: ${tipo}`)
    }
  }
}