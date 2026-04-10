export class Logger {
  log(mensagem: string): void {
    console.log(`[LOG] ${mensagem}`)
  }

  erro(mensagem: string): void {
    console.log(`[ERRO] ${mensagem}`)
  }
}