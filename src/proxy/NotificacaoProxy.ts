import { Notificacao } from "../interfaces/Notificacao"
import { ConfiguracaoSistema } from "../config/ConfiguracaoSistema"
import { Logger } from "../utils/Logger"

export class NotificacaoProxy implements Notificacao {
  private tentativas: number = 0
  private logger: Logger

  constructor(private notificacaoReal: Notificacao) {
    this.logger = new Logger()
  }

  enviar(destinatario: string, mensagem: string): boolean {
    const config = ConfiguracaoSistema.getInstancia()

    this.logger.log("Iniciando envio de notificacao")

    if (!destinatario || destinatario.trim() === "") {
      this.logger.erro("Destinatario invalido")
      return false
    }

    if (!mensagem || mensagem.trim() === "") {
      this.logger.erro("Mensagem invalida")
      return false
    }

    if (mensagem.length > 200) {
      this.logger.erro("Mensagem excede o limite de 200 caracteres")
      return false
    }

    if (this.tentativas >= config.getMaxTentativasReenvio()) {
      this.logger.erro("Limite maximo de tentativas atingido")
      return false
    }

    this.tentativas++
    this.logger.log(`Tentativa ${this.tentativas} de ${config.getMaxTentativasReenvio()}`)

    try {
      const sucesso = this.notificacaoReal.enviar(destinatario, mensagem)

      if (sucesso) {
        this.logger.log("Envio realizado com sucesso")
        return true
      }

      this.logger.erro("Falha no envio da notificacao")
      return false
    } catch (error) {
      this.logger.erro("Erro inesperado ao enviar notificacao")
      return false
    }
  }
}