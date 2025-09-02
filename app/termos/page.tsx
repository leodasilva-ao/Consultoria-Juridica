import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermosPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Termos de Uso</h1>
            <p className="text-xl text-muted-foreground">Última atualização: Janeiro de 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Aceitação dos Termos</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Ao acessar e utilizar o website da Consultoria Jurídica, você concorda em cumprir e estar vinculado
                    aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não
                    deve utilizar nosso website.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Uso do Website</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Este website é fornecido para fins informativos sobre nossos serviços jurídicos. Você pode usar este
                    website para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Obter informações sobre nossos serviços</li>
                    <li>Agendar consultas</li>
                    <li>Entrar em contato conosco</li>
                    <li>Ler nosso blog jurídico</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Limitações de Responsabilidade</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    As informações contidas neste website são fornecidas apenas para fins informativos gerais e não
                    constituem aconselhamento jurídico. Não nos responsabilizamos por:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Decisões tomadas com base nas informações do website</li>
                    <li>Interrupções ou falhas no funcionamento do website</li>
                    <li>Perda de dados ou informações</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Propriedade Intelectual</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Todo o conteúdo deste website, incluindo textos, imagens, logos e design, é propriedade da
                    Consultoria Jurídica e está protegido por leis de direitos autorais. É proibida a reprodução sem
                    autorização prévia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Privacidade</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Respeitamos sua privacidade e protegemos suas informações pessoais de acordo com nossa Política de
                    Privacidade. Ao usar este website, você concorda com a coleta e uso de informações conforme descrito
                    em nossa política.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Modificações</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em
                    vigor imediatamente após a publicação no website. É sua responsabilidade revisar periodicamente
                    estes termos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Contato</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:</p>
                  <ul className="list-none space-y-2">
                    <li>
                      <strong>Email:</strong> contato@consultoria.com.br
                    </li>
                    <li>
                      <strong>Telefone:</strong> (+244) 999-999-999
                    </li>
                    <li>
                      <strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo - SP
                    </li>
                  </ul>
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
