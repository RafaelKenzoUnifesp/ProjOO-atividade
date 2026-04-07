import { ConfiguracaoSistema } from "./config/ConfiguracaoSistema"
import { NotificacaoFactory } from "./factory/NotificacaoFactory"

const config = ConfiguracaoSistema.getInstancia()

console.log("Aplicacao:", config.getNomeAplicacao())
console.log("Servidor:", config.getServidorEnvio())
console.log("Max tentativas:", config.getMaxTentativasReenvio())

const notificacaoEmail = NotificacaoFactory.criarNotificacao("email")
notificacaoEmail.enviar("teste@email.com", "Mensagem de teste")

const notificacaoSMS = NotificacaoFactory.criarNotificacao("sms")
notificacaoSMS.enviar("99", "sms")

const notificacaoPush = NotificacaoFactory.criarNotificacao("push")
notificacaoPush.enviar("user", "notificacao")