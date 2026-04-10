import { Notificacao } from "../interfaces/Notificacao"
import { ConfiguracaoSistema } from "../config/ConfiguracaoSistema"

export class NotificacaoProxy implements Notificacao {
  private tentativas: number = 0

  constructor(private notificacaoReal: Notificacao) {}

  enviar(destinatario: string, mensagem: string): void {
    const config = ConfiguracaoSistema.getInstancia()

    console.log("[LOG] Iniciando envio de notificacao")

    if (!destinatario || !mensagem) {
      console.log("[LOG] Falha: destinatario ou mensagem invalidos")
      return
    }

    if (this.tentativas >= config.getMaxTentativasReenvio()) {
      console.log("[LOG] Limite maximo de tentativas atingido")
      return
    }

    this.tentativas++
    console.log(`[LOG] Tentativa ${this.tentativas} de ${config.getMaxTentativasReenvio()}`)

    this.notificacaoReal.enviar(destinatario, mensagem)

    console.log("[LOG] Envio concluido")
  }
}