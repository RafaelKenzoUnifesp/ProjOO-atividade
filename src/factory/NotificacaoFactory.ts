import { Notificacao } from "../interfaces/Notificacao"
import { NotificacaoEmail } from "../notificacoes/NotificacaoEmail"
import { NotificacaoPush } from "../notificacoes/NotificacaoPush"
import { AdaptadorSMS } from "../adapters/AdaptadorSMS"
import { ServicoSMSExterno } from "../adapters/ServicoSMSExterno"
import { NotificacaoProxy } from "../proxy/NotificacaoProxy"

export class NotificacaoFactory {
  static criarNotificacao(tipo: string): Notificacao {
    let notificacao: Notificacao

    switch (tipo.toLowerCase()) {
      case "email":
        notificacao = new NotificacaoEmail()
        break
      case "sms":
        notificacao = new AdaptadorSMS(new ServicoSMSExterno())
        break
      case "push":
        notificacao = new NotificacaoPush()
        break
      default:
        throw new Error(`Tipo de notificacao invalido: ${tipo}`)
    }

    return new NotificacaoProxy(notificacao)
  }
}