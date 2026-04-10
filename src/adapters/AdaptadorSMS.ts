import { Notificacao } from "../interfaces/Notificacao"
import { ServicoSMSExterno } from "./ServicoSMSExterno"

export class AdaptadorSMS implements Notificacao {
  constructor(private servicoSMSExterno: ServicoSMSExterno) {}

  enviar(destinatario: string, mensagem: string): void {
    this.servicoSMSExterno.sendSMS(destinatario, mensagem)
  }
}