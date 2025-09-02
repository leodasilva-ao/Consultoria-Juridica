import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, Clock, Star, Phone, Mail, MapPin, Menu } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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
              <span className="text-2xl font-bold text-foreground tracking-tight">Consultoria Jurídica</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Início
              </Link>
              <Link href="/sobre" className="text-foreground/80 hover:text-primary transition-colors font-medium">
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
      <section
        id="inicio"
        className="py-24 lg:py-32 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
              >
                Excelência Jurídica desde 1995
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
                Protegendo seus direitos com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                  expertise
                </span>{" "}
                e{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                  confiança
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-10 text-pretty leading-relaxed">
                Nossa consultoria jurídica oferece soluções personalizadas e estratégicas para pessoas físicas e
                empresas, com mais de 25 anos de experiência no mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
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
                  <Link href="/servicos">Ver Nossos Serviços</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl"></div>
              <img
                src="/hero-law-consultation.png"
                alt="Consulta jurídica profissional em escritório moderno"
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Nossas Especialidades
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Principais Áreas de Atuação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Oferecemos assessoria jurídica completa em diversas áreas do direito com excelência e dedicação
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 group">
              <div className="h-56 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 flex items-center justify-center rounded-t-xl group-hover:scale-105 transition-transform duration-300">
                <img src="/civil-law-icon.png" alt="Direito Civil" className="w-24 h-24 object-contain" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Direito Civil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Contratos, responsabilidade civil, direito de família e sucessões
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 group">
              <div className="h-56 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 flex items-center justify-center rounded-t-xl group-hover:scale-105 transition-transform duration-300">
                <img src="/criminal-law-icon.png" alt="Direito Penal" className="w-24 h-24 object-contain" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Direito Penal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Defesa criminal, recursos e acompanhamento processual
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 group">
              <div className="h-56 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 flex items-center justify-center rounded-t-xl group-hover:scale-105 transition-transform duration-300">
                <img src="/labor-law-icon.png" alt="Direito Trabalhista" className="w-24 h-24 object-contain" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Direito Trabalhista</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Relações de trabalho, rescisões e direitos do trabalhador
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/30 group">
              <div className="h-56 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 flex items-center justify-center rounded-t-xl group-hover:scale-105 transition-transform duration-300">
                <img src="/business-law-icon.png" alt="Direito Empresarial" className="w-24 h-24 object-contain" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Direito Empresarial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Constituição de empresas, contratos comerciais e consultoria
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Depoimentos
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">O que nossos clientes dizem</h2>
            <p className="text-xl text-muted-foreground">Depoimentos de quem confia em nosso trabalho</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "Excelente atendimento e profissionalismo. Resolveram meu caso com eficiência e transparência."
                </p>
                <div className="font-semibold text-foreground text-lg">Maria Silva</div>
                <div className="text-sm text-muted-foreground">Empresária</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "Equipe muito competente e dedicada. Sempre disponíveis para esclarecer dúvidas."
                </p>
                <div className="font-semibold text-foreground text-lg">João Santos</div>
                <div className="text-sm text-muted-foreground">Contador</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "Recomendo sem hesitar. Profissionais éticos e resultados excepcionais."
                </p>
                <div className="font-semibold text-foreground text-lg">Ana Costa</div>
                <div className="text-sm text-muted-foreground">Médica</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
                Sobre Nós
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
                Mais de 25 anos defendendo seus direitos
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Nossa consultoria jurídica foi fundada com o compromisso de oferecer serviços jurídicos de excelência,
                pautados na ética, transparência e resultados efetivos.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-2xl">500+</div>
                    <div className="text-muted-foreground">Clientes Atendidos</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <Scale className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-2xl">95%</div>
                    <div className="text-muted-foreground">Taxa de Sucesso</div>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="h-12 px-8 text-lg">
                <Link href="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl"></div>
              <img
                src="/modern-law-office.png"
                alt="Escritório de advocacia moderno e profissional"
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Precisa de assessoria jurídica?</h2>
          <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Entre em contacto conosco e agende uma consulta gratuita. Estamos prontos para defender seus direitos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/agendamento">
                <Clock className="mr-3 h-6 w-6" />
                Agendar Consulta
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              asChild
            >
              <Link href="/contato">
                <Phone className="mr-3 h-6 w-6" />
                Falar Conosco
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                  <Scale className="h-6 w-6 text-secondary-foreground" />
                </div>
                <span className="text-2xl font-bold">Consultoria Jurídica</span>
              </div>
              <p className="text-background/70 mb-6 leading-relaxed">
                Defendendo seus direitos com excelência e dedicação há mais de 25 anos.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/contato"
                  className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors"
                >
                  <Phone className="h-5 w-5 text-secondary" />
                </Link>
                <Link
                  href="/contato"
                  className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors"
                >
                  <Mail className="h-5 w-5 text-secondary" />
                </Link>
                <Link
                  href="/contato"
                  className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors"
                >
                  <MapPin className="h-5 w-5 text-secondary" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Áreas de Actuação</h3>
              <ul className="space-y-3 text-background/70">
                <li>
                  <Link href="/areas#civil" className="hover:text-secondary transition-colors">
                    Direito Civil
                  </Link>
                </li>
                <li>
                  <Link href="/areas#penal" className="hover:text-secondary transition-colors">
                    Direito Penal
                  </Link>
                </li>
                <li>
                  <Link href="/areas#trabalhista" className="hover:text-secondary transition-colors">
                    Direito Trabalhista
                  </Link>
                </li>
                <li>
                  <Link href="/areas#empresarial" className="hover:text-secondary transition-colors">
                    Direito Empresarial
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Serviços</h3>
              <ul className="space-y-3 text-background/70">
                <li>
                  <Link href="/servicos#consultas" className="hover:text-secondary transition-colors">
                    Consultas Jurídicas
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#documentos" className="hover:text-secondary transition-colors">
                    Elaboração de Documentos
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#representacao" className="hover:text-secondary transition-colors">
                    Representação Legal
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#assessoria" className="hover:text-secondary transition-colors">
                    Assessoria Empresarial
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Links Úteis</h3>
              <ul className="space-y-3 text-background/70">
                <li>
                  <Link href="/faq" className="hover:text-secondary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/sobre#equipe" className="hover:text-secondary transition-colors">
                    Nossa Equipe
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="hover:text-secondary transition-colors">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="hover:text-secondary transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
            <p>&copy; 2024 Consultoria Jurídica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
