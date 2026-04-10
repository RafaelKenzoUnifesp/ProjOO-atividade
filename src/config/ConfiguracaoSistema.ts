export class ConfiguracaoSistema {
  private static instancia: ConfiguracaoSistema | null = null

  private constructor(
    private nomeAplicacao: string,
    private servidorEnvio: string,
    private maxTentativasReenvio: number
  ) {}

  static getInstancia(): ConfiguracaoSistema {
    if (ConfiguracaoSistema.instancia === null) {
      ConfiguracaoSistema.instancia = new ConfiguracaoSistema(
        "Sistema de Notificacoes",
        "smtp.empresa.com",
        3
      )
    }
    return ConfiguracaoSistema.instancia
  }

  getNomeAplicacao(): string {
    return this.nomeAplicacao
  }

  getServidorEnvio(): string {
    return this.servidorEnvio
  }

  getMaxTentativasReenvio(): number {
    return this.maxTentativasReenvio
  }

  setMaxTentativasReenvio(maxTentativasReenvio: number): void {
    this.maxTentativasReenvio = maxTentativasReenvio
  }
}