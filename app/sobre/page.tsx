import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Shield, Clock, Phone, Mail, MapPin, Award, BookOpen, Briefcase, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <Scale className="h-6 w-6 text-primary-foreground" />
              </div>
              <Link href="/" className="text-2xl font-bold text-foreground tracking-tight">
                Consultoria Jurídica
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Início
              </Link>
              <Link href="/sobre" className="text-primary font-semibold">
                Sobre Nós
              </Link>
              <Link href="/areas" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Áreas de Actuação
              </Link>
              <Link href="/servicos" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Serviços
              </Link>
              {/*<Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Blog
              </Link> */}
              <Link href="/contato" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Contacto
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/agendamento">Agendar Consulta</Link>
              </Button>
            </div>
            <div className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
            >
              Nossa História
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
              Construindo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                confiança
              </span>{" "}
              há mais de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">25 anos</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 text-pretty max-w-3xl mx-auto leading-relaxed">
              Desde 1995, nossa consultoria jurídica tem sido sinônimo de excelência, ética e resultados efetivos no
              mercado jurídico brasileiro.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">Nossa Trajetória</h2>
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Fundada em 1995 pelos advogados Dr. Carlos Silva e Dra. Maria Santos, nossa consultoria nasceu com o
                  propósito de democratizar o acesso à justiça e oferecer serviços jurídicos de alta qualidade tanto
                  para pessoas físicas quanto jurídicas.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ao longo dos anos, expandimos nossa atuação para diversas áreas do direito, sempre mantendo nossos
                  valores fundamentais: ética, transparência, excelência técnica e compromisso com os resultados de
                  nossos clientes.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Hoje, somos reconhecidos como uma das principais consultorias jurídicas da região, com mais de 500
                  clientes atendidos e uma taxa de sucesso superior a 95% em nossos casos.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl flex items-center justify-center border border-border/50">
                <Image
                  src="/professional-law-office.png"
                  alt="Escritório da Consultoria Jurídica"
                  width={500}
                  height={500}
                  className="rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Nossos Valores
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Nossos Pilares</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os valores que norteiam nossa actuação e definem nossa identidade
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">
                  Oferecer serviços jurídicos de excelência, defendendo os direitos de nossos clientes com ética,
                  transparência e dedicação, contribuindo para uma sociedade mais justa.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">
                  Ser reconhecida como a consultoria jurídica de referência na região, pela qualidade de nossos serviços
                  e pelo relacionamento próximo com nossos clientes.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">
                  Ética profissional, transparência nas relações, excelência técnica, compromisso com resultados e
                  respeito aos direitos fundamentais.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Nossa Equipe
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profissionais experientes e dedicados, prontos para defender seus direitos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="text-center group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <Image
                    src="/professional-male-lawyer.png"
                    alt="Dr. Carlos Silva"
                    width={200}
                    height={200}
                    className="relative rounded-full object-cover mx-auto border-4 border-background shadow-xl"
                  />
                </div>
                <CardTitle className="text-xl">Dr. Carlos Silva</CardTitle>
                <CardDescription className="text-primary font-semibold text-lg">Sócio Fundador</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">25+ anos de experiência</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Especialista em Direito Civil e Empresarial</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">OAB/SP 123.456</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                  Graduado pela USP, com pós-graduação em Direito Empresarial. Especialista em contratos e consultoria
                  jurídica para empresas.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="text-center group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <Image
                    src="/female-lawyer-business-attire.png"
                    alt="Dra. Maria Santos"
                    width={200}
                    height={200}
                    className="relative rounded-full object-cover mx-auto border-4 border-background shadow-xl"
                  />
                </div>
                <CardTitle className="text-xl">Dra. Maria Santos</CardTitle>
                <CardDescription className="text-primary font-semibold text-lg">Sócia Fundadora</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">23+ anos de experiência</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Especialista em Direito Trabalhista e Penal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">OAB/SP 234.567</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                  Graduada pela PUC-SP, com mestrado em Direito Penal. Reconhecida pela excelência em defesa criminal e
                  direito trabalhista.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="text-center group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <Image
                    src="/young-professional-male-lawyer.png"
                    alt="Dr. João Oliveira"
                    width={200}
                    height={200}
                    className="relative rounded-full object-cover mx-auto border-4 border-background shadow-xl"
                  />
                </div>
                <CardTitle className="text-xl">Dr. João Oliveira</CardTitle>
                <CardDescription className="text-primary font-semibold text-lg">Advogado Associado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">8+ anos de experiência</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Especialista em Direito Digital e Tributário</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">OAB/SP 345.678</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                  Graduado pela Mackenzie, especialização em Direito Digital. Focado em inovação jurídica e tecnologia
                  aplicada ao direito.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nossos Números</h2>
            <p className="text-xl lg:text-2xl opacity-90">Resultados que comprovam nossa excelência</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold mb-4">25+</div>
              <div className="text-xl opacity-90">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold mb-4">500+</div>
              <div className="text-xl opacity-90">Clientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold mb-4">95%</div>
              <div className="text-xl opacity-90">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold mb-4">1000+</div>
              <div className="text-xl opacity-90">Casos Resolvidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pronto para conhecer nossa equipe pessoalmente?
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Agende uma consulta gratuita e descubra como podemos ajudar você a resolver suas questões jurídicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/agendamento">
                <Clock className="mr-3 h-6 w-6" />
                Agendar Consulta Gratuita
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-14 px-8 text-lg border-2 hover:bg-muted/50 transition-all duration-300 bg-transparent"
            >
              <Link href="/contato">
                <Phone className="mr-3 h-6 w-6" />
                Entrar em Contacto
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
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-background/70">
                <p>(11) 936-822-703</p>
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
