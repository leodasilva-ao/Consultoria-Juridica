import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scale, Clock, Phone, Mail, MapPin, Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would normally come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "direitos-trabalhador-2024": {
      title: "Principais Direitos do Trabalhador em 2024",
      content: `
        <p>O mercado de trabalho brasileiro passou por diversas transformações nos últimos anos, e é fundamental que todo trabalhador conheça seus direitos básicos para garantir que sejam respeitados.</p>
        
        <h2>1. Carteira de Trabalho Digital</h2>
        <p>Desde 2019, a Carteira de Trabalho Digital é o documento oficial para registro de vínculos empregatícios. O empregador tem até 5 dias para fazer o registro após a admissão do funcionário.</p>
        
        <h2>2. Jornada de Trabalho</h2>
        <p>A jornada normal de trabalho é de 8 horas diárias e 44 horas semanais. Qualquer trabalho além desse limite deve ser remunerado como hora extra, com adicional mínimo de 50%.</p>
        
        <h2>3. Férias Remuneradas</h2>
        <p>Todo trabalhador tem direito a 30 dias de férias remuneradas após completar 12 meses de trabalho. As férias podem ser divididas em até 3 períodos, sendo que um deles deve ter pelo menos 14 dias.</p>
        
        <h2>4. 13º Salário</h2>
        <p>O décimo terceiro salário deve ser pago em duas parcelas: a primeira até 30 de novembro e a segunda até 20 de dezembro de cada ano.</p>
        
        <h2>5. FGTS (Fundo de Garantia)</h2>
        <p>O empregador deve depositar mensalmente 8% do salário do trabalhador em uma conta do FGTS. Este valor pode ser sacado em situações específicas, como demissão sem justa causa ou compra da casa própria.</p>
        
        <h2>Quando Procurar um Advogado?</h2>
        <p>Se você suspeita que seus direitos trabalhistas estão sendo violados, é importante buscar orientação jurídica. Nossa equipe está preparada para analisar sua situação e orientá-lo sobre os melhores caminhos a seguir.</p>
      `,
      author: "Dra. Maria Santos",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      category: "Direito Trabalhista",
      image: "/blog-trabalhista.png",
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
          <Button asChild>
            <Link href="/blog">Voltar ao Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

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

      {/* Back to Blog */}
      <section className="py-6 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Precisa de ajuda com questões trabalhistas?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para orientá-lo sobre seus direitos e defender seus interesses.
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
                Falar com Especialista
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
