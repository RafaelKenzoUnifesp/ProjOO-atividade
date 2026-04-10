import { Notificacao } from "../interfaces/Notificacao"

export class NotificacaoEmail implements Notificacao {
  enviar(destinatario: string, mensagem: string): boolean {
    console.log(`Enviando EMAIL para ${destinatario}: ${mensagem}`)
    return true
  }
}