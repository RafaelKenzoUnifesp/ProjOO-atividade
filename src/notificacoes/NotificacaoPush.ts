import { Notificacao } from "../interfaces/Notificacao"

export class NotificacaoPush implements Notificacao {
  enviar(destinatario: string, mensagem: string): boolean {
    console.log(`Enviando PUSH para ${destinatario}: ${mensagem}`)
    return true
  }
}