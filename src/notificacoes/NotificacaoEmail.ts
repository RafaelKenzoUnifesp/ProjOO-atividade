import { Notificacao } from "../interfaces/Notificacao"

export class NotificacaoEmail implements Notificacao {
  enviar(destinatario: string, mensagem: string): void {
    console.log(`Enviando EMAIL para ${destinatario}: ${mensagem}`)
  }
}