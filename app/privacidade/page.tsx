import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react"
import Link from "next/link"

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <Scale className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground tracking-tight">Consultoria Jurídica</span>
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar ao Início</span>
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Política de Privacidade</h1>
            <p className="text-xl text-muted-foreground">Última atualização: Janeiro de 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Privacy Principles */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Segurança</h3>
                  <p className="text-muted-foreground">Seus dados são protegidos com criptografia avançada</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Transparência</h3>
                  <p className="text-muted-foreground">Você sempre sabe como seus dados são usados</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Controle</h3>
                  <p className="text-muted-foreground">Você tem controle total sobre suas informações</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Informações que Coletamos</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Coletamos informações que você nos fornece diretamente, incluindo:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Informações de contato:</strong> nome, email, telefone, endereço
                    </li>
                    <li>
                      <strong>Informações profissionais:</strong> empresa, cargo, área de interesse jurídico
                    </li>
                    <li>
                      <strong>Informações de consulta:</strong> detalhes sobre seu caso ou necessidade jurídica
                    </li>
                    <li>
                      <strong>Informações técnicas:</strong> endereço IP, tipo de navegador, páginas visitadas
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Como Usamos suas Informações</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Utilizamos suas informações para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fornecer serviços jurídicos solicitados</li>
                    <li>Responder às suas consultas e agendamentos</li>
                    <li>Enviar informações relevantes sobre nossos serviços</li>
                    <li>Melhorar nosso website e serviços</li>
                    <li>Cumprir obrigações legais e regulamentares</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Compartilhamento de Informações</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Quando necessário para prestar serviços jurídicos</li>
                    <li>Com seu consentimento explícito</li>
                    <li>Para cumprir obrigações legais</li>
                    <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Segurança dos Dados</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Criptografia SSL/TLS para transmissão de dados</li>
                    <li>Armazenamento seguro em servidores protegidos</li>
                    <li>Acesso restrito apenas a funcionários autorizados</li>
                    <li>Monitoramento regular de segurança</li>
                    <li>Backup regular e seguro dos dados</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Seus Direitos</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>De acordo com a LGPD, você tem os seguintes direitos:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Acesso:</strong> solicitar informações sobre o tratamento de seus dados
                    </li>
                    <li>
                      <strong>Correção:</strong> solicitar a correção de dados incompletos ou incorretos
                    </li>
                    <li>
                      <strong>Exclusão:</strong> solicitar a exclusão de dados desnecessários
                    </li>
                    <li>
                      <strong>Portabilidade:</strong> solicitar a transferência de dados para outro fornecedor
                    </li>
                    <li>
                      <strong>Oposição:</strong> opor-se ao tratamento de dados em certas circunstâncias
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Cookies e Tecnologias Similares</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Utilizamos cookies para melhorar sua experiência em nosso website. Os cookies nos ajudam a:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Lembrar suas preferências</li>
                    <li>Analisar o tráfego do website</li>
                    <li>Personalizar conteúdo</li>
                    <li>Melhorar a funcionalidade do site</li>
                  </ul>
                  <p>Você pode controlar o uso de cookies através das configurações do seu navegador.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Contato e Exercício de Direitos</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:</p>
                  <div className="bg-muted/50 p-6 rounded-lg mt-4">
                    <ul className="list-none space-y-2">
                      <li>
                        <strong>Email:</strong> privacidade@consultoria.com.br
                      </li>
                      <li>
                        <strong>Telefone:</strong> (11) 9999-9999
                      </li>
                      <li>
                        <strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo - SP
                      </li>
                      <li>
                        <strong>Encarregado de Dados:</strong> Dr. João Silva
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/">Voltar ao Início</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
