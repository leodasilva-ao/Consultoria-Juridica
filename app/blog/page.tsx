import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Scale, Clock, Phone, Mail, MapPin, Search, Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "direitos-trabalhador-2024",
      title: "Principais Direitos do Trabalhador em 2024",
      excerpt:
        "Conheça os direitos fundamentais que todo trabalhador deve conhecer, incluindo as mudanças na legislação trabalhista.",
      author: "Dra. Maria Santos",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      category: "Direito Trabalhista",
      image: "/blog-trabalhista.png",
      featured: true,
    },
    {
      slug: "como-abrir-empresa-2024",
      title: "Como Abrir uma Empresa: Guia Completo 2024",
      excerpt:
        "Passo a passo completo para abrir sua empresa, desde a escolha do tipo societário até a obtenção do CNPJ.",
      author: "Dr. Carlos Silva",
      date: "10 de Janeiro, 2024",
      readTime: "8 min",
      category: "Direito Empresarial",
      image: "/blog-empresarial.png",
      featured: true,
    },
    {
      slug: "divorcio-consensual-litigioso",
      title: "Divórcio Consensual vs Litigioso: Qual Escolher?",
      excerpt: "Entenda as diferenças entre os tipos de divórcio e qual é a melhor opção para sua situação.",
      author: "Dra. Maria Santos",
      date: "5 de Janeiro, 2024",
      readTime: "6 min",
      category: "Direito de Família",
      image: "/blog-familia.png",
      featured: false,
    },
    {
      slug: "direitos-consumidor-compras-online",
      title: "Direitos do Consumidor em Compras Online",
      excerpt:
        "Saiba quais são seus direitos ao comprar pela internet e como se proteger de fraudes e produtos defeituosos.",
      author: "Dr. João Oliveira",
      date: "28 de Dezembro, 2023",
      readTime: "4 min",
      category: "Direito do Consumidor",
      image: "/blog-consumidor.png",
      featured: false,
    },
    {
      slug: "planejamento-sucessorio-familiar",
      title: "Planejamento Sucessório: Protegendo sua Família",
      excerpt:
        "A importância do planejamento sucessório e como proteger o patrimônio familiar para as próximas gerações.",
      author: "Dr. Carlos Silva",
      date: "20 de Dezembro, 2023",
      readTime: "7 min",
      category: "Direito Civil",
      image: "/blog-sucessorio.png",
      featured: false,
    },
    {
      slug: "crimes-digitais-como-se-proteger",
      title: "Crimes Digitais: Como se Proteger na Era Digital",
      excerpt: "Conheça os principais crimes digitais e aprenda como se proteger de golpes, fraudes e invasões online.",
      author: "Dr. João Oliveira",
      date: "15 de Dezembro, 2023",
      readTime: "5 min",
      category: "Direito Penal",
      image: "/blog-digital.png",
      featured: false,
    },
  ]

  const categories = [
    "Todos",
    "Direito Trabalhista",
    "Direito Empresarial",
    "Direito de Família",
    "Direito do Consumidor",
    "Direito Civil",
    "Direito Penal",
  ]

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
              <Link href="/servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="/blog" className="text-primary font-medium">
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
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Blog Jurídico
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-primary">Conhecimento</span> jurídico ao seu alcance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Artigos, guias e dicas jurídicas para esclarecer suas dúvidas e mantê-lo informado sobre seus direitos.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar artigos..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm" className="rounded-full bg-transparent">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Artigos em Destaque</h2>
            <p className="text-muted-foreground">Os artigos mais importantes e atuais do nosso blog</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" asChild className="group/btn bg-transparent">
                    <Link href={`/blog/${post.slug}`}>
                      Ler Artigo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Todos os Artigos</h2>
            <p className="text-muted-foreground">Explore nossa biblioteca completa de conteúdo jurídico</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-3">{post.date}</div>
                  <Button variant="outline" size="sm" asChild className="w-full group/btn bg-transparent">
                    <Link href={`/blog/${post.slug}`}>
                      Ler Mais
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Receba nossos artigos por e-mail</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Cadastre-se em nossa newsletter e receba semanalmente os melhores conteúdos jurídicos diretamente em sua
            caixa de entrada.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input placeholder="Seu e-mail" className="bg-primary-foreground text-primary" />
            <Button variant="secondary">Cadastrar</Button>
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
