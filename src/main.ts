import { ConfiguracaoSistema } from "./config/ConfiguracaoSistema"
import { NotificacaoFactory } from "./factory/NotificacaoFactory"

const config = ConfiguracaoSistema.getInstancia()

console.log("Aplicacao:", config.getNomeAplicacao())
console.log("Servidor:", config.getServidorEnvio())
console.log("Max tentativas:", config.getMaxTentativasReenvio())

const notificacaoEmail = NotificacaoFactory.criarNotificacao("email")
notificacaoEmail.enviar("teste@email.com", "Mensagem de teste por email")

const notificacaoSMS = NotificacaoFactory.criarNotificacao("sms")
notificacaoSMS.enviar("11999999999", "Mensagem de teste por sms")

const notificacaoPush = NotificacaoFactory.criarNotificacao("push")
notificacaoPush.enviar("usuario_app", "Mensagem de teste por push")

const notificacaoInvalida = NotificacaoFactory.criarNotificacao("email")
notificacaoInvalida.enviar("", "Mensagem sem destinatario")