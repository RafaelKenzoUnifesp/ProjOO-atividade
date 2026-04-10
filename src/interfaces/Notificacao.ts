export interface Notificacao {
  enviar(destinatario: string, mensagem: string): boolean
} 