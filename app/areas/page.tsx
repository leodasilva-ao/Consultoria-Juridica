import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  Shield,
  Users,
  FileText,
  Clock,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Home,
  Building,
  Heart,
  Car,
  Landmark,
} from "lucide-react"
import Link from "next/link"

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, direito de família, sucessões e direito imobiliário",
      details: [
        "Elaboração e revisão de contratos",
        "Ações de cobrança e indenização",
        "Divórcio, guarda e pensão alimentícia",
        "Inventários e partilhas",
        "Compra e venda de imóveis",
      ],
    },
    {
      icon: Shield,
      title: "Direito Penal",
      description: "Defesa criminal, recursos, habeas corpus e acompanhamento processual",
      details: [
        "Defesa em inquéritos policiais",
        "Acompanhamento de processos criminais",
        "Recursos em todas as instâncias",
        "Habeas corpus preventivo e liberatório",
        "Acordos de colaboração premiada",
      ],
    },
    {
      icon: Users,
      title: "Direito Trabalhista",
      description: "Relações de trabalho, rescisões, direitos do trabalhador e consultoria empresarial",
      details: [
        "Ações trabalhistas e defesas",
        "Rescisões contratuais",
        "Cálculos trabalhistas",
        "Consultoria preventiva para empresas",
        "Negociações coletivas",
      ],
    },
    {
      icon: Building,
      title: "Direito Empresarial",
      description: "Constituição de empresas, contratos comerciais, fusões e aquisições",
      details: [
        "Abertura e fechamento de empresas",
        "Contratos comerciais e societários",
        "Fusões, aquisições e joint ventures",
        "Compliance e governança corporativa",
        "Recuperação judicial e falência",
      ],
    },
    {
      icon: FileText,
      title: "Direito Tributário",
      description: "Planejamento tributário, defesas fiscais e consultoria em impostos",
      details: [
        "Planejamento tributário",
        "Defesas em autuações fiscais",
        "Parcelamentos e transações tributárias",
        "Consultoria em impostos",
        "Revisão de tributos pagos indevidamente",
      ],
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Compra, venda, locação e regularização de imóveis",
      details: [
        "Contratos de compra e venda",
        "Locações residenciais e comerciais",
        "Regularização de imóveis",
        "Usucapião urbano e rural",
        "Incorporações imobiliárias",
      ],
    },
    {
      icon: Heart,
      title: "Direito de Família",
      description: "Divórcio, guarda, pensão alimentícia e união estável",
      details: [
        "Divórcio consensual e litigioso",
        "Guarda compartilhada e unilateral",
        "Pensão alimentícia",
        "Reconhecimento de união estável",
        "Adoção e tutela",
      ],
    },
    {
      icon: Car,
      title: "Direito do Consumidor",
      description: "Defesa dos direitos do consumidor e relações de consumo",
      details: [
        "Ações contra fornecedores",
        "Defeitos em produtos e serviços",
        "Publicidade enganosa",
        "Contratos abusivos",
        "Superendividamento",
      ],
    },
    {
      icon: Landmark,
      title: "Direito Previdenciário",
      description: "Benefícios previdenciários, aposentadorias e pensões",
      details: [
        "Aposentadorias por tempo e idade",
        "Auxílio-doença e invalidez",
        "Pensão por morte",
        "Revisão de benefícios",
        "Planejamento previdenciário",
      ],
    },
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
              <Link href="/areas" className="text-primary font-medium">
                Áreas de Actuação
              </Link>
              <Link href="/servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              {/* <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link> */}
              <Link href="/contato" className="text-foreground hover:text-primary transition-colors">
                Contacto
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
              Áreas de Actuação
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-primary">Expertise</span> em todas as áreas do{" "}
              <span className="text-primary">direito</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Nossa equipe especializada oferece soluções jurídicas completas para pessoas físicas e empresas em
              diversas áreas do direito.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-6 bg-transparent" asChild>
                      <Link href="/agendamento">Consultar Especialista</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Por que escolher nossa consultoria?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diferenciais que nos tornam a melhor escolha para suas necessidades jurídicas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Experiência Comprovada</h3>
              <p className="text-sm text-muted-foreground">Mais de 25 anos de actuação no mercado jurídico</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Equipe Especializada</h3>
              <p className="text-sm text-muted-foreground">Profissionais especializados em cada área do direito</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Atendimento Ágil</h3>
              <p className="text-sm text-muted-foreground">Respostas rápidas e acompanhamento constante</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Resultados Efetivos</h3>
              <p className="text-sm text-muted-foreground">Taxa de sucesso superior a 95% em nossos casos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Precisa de assessoria jurídica especializada?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nossa equipe está pronta para analisar seu caso e oferecer a melhor solução jurídica.
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
              <Link href="/servicos">
                <FileText className="mr-2 h-5 w-5" />
                Ver Nossos Serviços
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
              <h3 className="font-semibold mb-4">Áreas de Actuação</h3>
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
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-background/70">
                <p>(+244) 936-822-703</p>
                <p>contato@consultoria.com.br</p>
                <p>
                  Rua Exemplo, 123
                  <br />
                  Kilamba
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
