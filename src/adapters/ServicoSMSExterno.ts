export class ServicoSMSExterno {
  sendSMS(numero: string, texto: string): boolean {
    console.log(`[API EXTERNA] SMS enviado para ${numero}: ${texto}`)
    return true
  }
}