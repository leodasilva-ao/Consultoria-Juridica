import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Scale, FileText, Clock, Phone, Mail, MapPin, MessageCircle, Gavel, Building, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      category: "Consultas Jurídicas",
      icon: MessageCircle,
      description: "Orientação jurídica especializada para esclarecer dúvidas e avaliar casos",
      items: [
        { service: "Consulta Inicial Gratuita", duration: "30 min", price: "Gratuito" },
        { service: "Consulta Presencial", duration: "1 hora", price: "R$ 200,00" },
        { service: "Consulta Online", duration: "1 hora", price: "R$ 150,00" },
        { service: "Parecer Jurídico Simples", duration: "3-5 dias", price: "R$ 500,00" },
        { service: "Parecer Jurídico Complexo", duration: "7-10 dias", price: "R$ 1.200,00" },
      ],
    },
    {
      category: "Elaboração de Documentos",
      icon: FileText,
      description: "Redação e revisão de contratos, petições e documentos jurídicos",
      items: [
        { service: "Contrato Simples", duration: "2-3 dias", price: "R$ 300,00" },
        { service: "Contrato Complexo", duration: "5-7 dias", price: "R$ 800,00" },
        { service: "Petição Inicial", duration: "3-5 dias", price: "R$ 600,00" },
        { service: "Recurso Judicial", duration: "5-7 dias", price: "R$ 900,00" },
        { service: "Estatuto Social", duration: "7-10 dias", price: "R$ 1.500,00" },
      ],
    },
    {
      category: "Representação Legal",
      icon: Gavel,
      description: "Acompanhamento processual e representação em tribunais",
      items: [
        { service: "Ação Judicial Simples", duration: "Variável", price: "R$ 2.000,00" },
        { service: "Ação Judicial Complexa", duration: "Variável", price: "R$ 5.000,00" },
        { service: "Defesa Criminal", duration: "Variável", price: "R$ 3.500,00" },
        { service: "Recurso em Tribunal", duration: "Variável", price: "R$ 2.500,00" },
        { service: "Acompanhamento Processual", duration: "Mensal", price: "R$ 800,00/mês" },
      ],
    },
    {
      category: "Assessoria Empresarial",
      icon: Building,
      description: "Consultoria jurídica continuada para empresas e negócios",
      items: [
        { service: "Abertura de Empresa", duration: "15-20 dias", price: "R$ 1.200,00" },
        { service: "Assessoria Mensal Básica", duration: "Mensal", price: "R$ 1.500,00/mês" },
        { service: "Assessoria Mensal Completa", duration: "Mensal", price: "R$ 3.000,00/mês" },
        { service: "Due Diligence", duration: "15-30 dias", price: "R$ 8.000,00" },
        { service: "Compliance Empresarial", duration: "30-45 dias", price: "R$ 12.000,00" },
      ],
    },
  ]

  const benefits = [
    "Primeira consulta sempre gratuita",
    "Atendimento personalizado",
    "Acompanhamento constante do caso",
    "Transparência total nos custos",
    "Pagamento facilitado em até 12x",
    "Garantia de qualidade nos serviços",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" />
              <Link href="/" className="text-xl font-bold text-foreground">
                Consultoria Jurídica
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="/sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link href="/areas" className="text-foreground hover:text-primary transition-colors">
                Áreas de Atuação
              </Link>
              <Link href="/servicos" className="text-primary font-medium">
                Serviços
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </Link>
              <Button asChild>
                <Link href="/agendamento">Agendar Consulta</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Nossos Serviços
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Soluções jurídicas <span className="text-primary">completas</span> e{" "}
              <span className="text-primary">transparentes</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços jurídicos com preços transparentes e qualidade garantida para
              pessoas físicas e empresas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Categorias de Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organizamos nossos serviços em categorias para facilitar sua escolha
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Tables */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <Card>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">Serviço</TableHead>
                          <TableHead className="font-semibold">Prazo</TableHead>
                          <TableHead className="font-semibold text-right">Valor</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.items.map((item, itemIndex) => (
                          <TableRow key={itemIndex}>
                            <TableCell className="font-medium">{item.service}</TableCell>
                            <TableCell className="text-muted-foreground">{item.duration}</TableCell>
                            <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Vantagens de contratar nossos serviços
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Oferecemos muito mais que serviços jurídicos. Proporcionamos uma experiência completa com foco na sua
                satisfação e nos melhores resultados.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <Scale className="h-32 w-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Importante sobre nossos preços</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Transparência Total</h4>
                    <p className="text-sm text-muted-foreground">
                      Todos os valores são informados previamente, sem surpresas ou custos ocultos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Orçamento Personalizado</h4>
                    <p className="text-sm text-muted-foreground">
                      Casos complexos recebem orçamento específico após análise detalhada.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Formas de Pagamento</h4>
                    <p className="text-sm text-muted-foreground">
                      Aceitamos cartão, PIX, transferência e parcelamento em até 12x sem juros.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Primeira Consulta Gratuita</h4>
                    <p className="text-sm text-muted-foreground">
                      Avaliamos seu caso sem custo para você decidir com segurança.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pronto para resolver sua questão jurídica?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agende sua consulta gratuita e descubra como podemos ajudar você com transparência e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/agendamento">
                <Clock className="mr-2 h-5 w-5" />
                Agendar Consulta Gratuita
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/contato">
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-8 w-8 text-secondary" />
                <span className="text-xl font-bold">Consultoria Jurídica</span>
              </div>
              <p className="text-background/70 mb-4">
                Defendendo seus direitos com excelência e dedicação há mais de 25 anos.
              </p>
              <div className="flex space-x-4">
                <Phone className="h-5 w-5 text-secondary" />
                <Mail className="h-5 w-5 text-secondary" />
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Áreas de Atuação</h3>
              <ul className="space-y-2 text-background/70">
                <li>Direito Civil</li>
                <li>Direito Penal</li>
                <li>Direito Trabalhista</li>
                <li>Direito Empresarial</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-background/70">
                <li>Consultas Jurídicas</li>
                <li>Elaboração de Documentos</li>
                <li>Representação Legal</li>
                <li>Assessoria Empresarial</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-background/70">
                <p>(11) 9999-9999</p>
                <p>contato@consultoria.com.br</p>
                <p>
                  Rua Exemplo, 123
                  <br />
                  São Paulo - SP
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 Consultoria Jurídica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
