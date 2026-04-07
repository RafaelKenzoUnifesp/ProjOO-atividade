import { Notificacao } from "../interfaces/Notificacao"

export class NotificacaoPush implements Notificacao {
  enviar(destinatario: string, mensagem: string): void {
    console.log(`Enviando PUSH para ${destinatario}: ${mensagem}`)
  }
}