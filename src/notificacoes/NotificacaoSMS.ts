import { Notificacao } from "../interfaces/Notificacao"

export class NotificacaoSMS implements Notificacao {
  enviar(destinatario: string, mensagem: string): void {
    console.log(`Enviando SMS para ${destinatario}: ${mensagem}`)
  }
}