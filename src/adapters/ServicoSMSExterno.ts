export class ServicoSMSExterno {
  sendSMS(numero: string, texto: string): void {
    console.log(`[API EXTERNA] SMS enviado para ${numero}: ${texto}`)
  }
}