"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Scale, Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContatoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Consultoria Jurídica</span>
            </Link>
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
              {/*<Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link> */}
              <Link href="/contato" className="text-primary font-medium">
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
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Entre em Contacto
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Estamos aqui para <span className="text-primary">ajudar você</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer suas dúvidas e oferecer a melhor solução jurídica para seu caso.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">(+244) 936-822-703</p>
                <p className="text-muted-foreground mb-4">Segunda a Sexta: 8h às 18h</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+551134567890">Ligar Agora</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">(+244) 936-822-703</p>
                <p className="text-muted-foreground mb-4">Atendimento rápido e direto</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="http://wa.me/244936822703" target="_blank" rel="noopener noreferrer">
                    Conversar
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">contato@consultoria.com.br</p>
                <p className="text-muted-foreground mb-4">Resposta em até 24h</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:contato@consultoria.com.br">Enviar E-mail</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Envie sua mensagem</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Contato</CardTitle>
                  <CardDescription>Preencha o formulário abaixo e entraremos em contacto em breve</CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Mensagem enviada!</h3>
                      <p className="text-muted-foreground">Obrigado pelo contacto. Retornaremos em breve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome Completo *</Label>
                          <Input
                            id="nome"
                            value={formData.nome}
                            onChange={(e) => handleInputChange("nome", e.target.value)}
                            placeholder="Seu nome completo"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefone">Telefone *</Label>
                          <Input
                            id="telefone"
                            value={formData.telefone}
                            onChange={(e) => handleInputChange("telefone", e.target.value)}
                            placeholder="(+244) 000-000-000"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="assunto">Assunto *</Label>
                        <Select onValueChange={(value) => handleInputChange("assunto", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consulta">Consulta Jurídica</SelectItem>
                            <SelectItem value="civil">Direito Civil</SelectItem>
                            <SelectItem value="penal">Direito Penal</SelectItem>
                            <SelectItem value="trabalhista">Direito Trabalhista</SelectItem>
                            <SelectItem value="empresarial">Direito Empresarial</SelectItem>
                            <SelectItem value="familia">Direito de Família</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensagem">Mensagem *</Label>
                        <Textarea
                          id="mensagem"
                          value={formData.mensagem}
                          onChange={(e) => handleInputChange("mensagem", e.target.value)}
                          placeholder="Descreva brevemente seu caso ou dúvida..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Map and Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Nossa Localização</h2>

              {/* Office Info Card */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Endereço do Escritório
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground">Consultoria Jurídica Ltda.</p>
                      <p className="text-muted-foreground">
                        Rua dos Advogados, 123 - Sala 456
                        <br />
                        Centro - Kilamba- SP
                        <br />
                        NIF: 012-345-670-LA-024
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Horário de Funcionamento:</span>
                    </div>
                    <div className="text-sm text-muted-foreground ml-6">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Mapa Interativo</p>
                      <p className="text-sm text-muted-foreground">Centro - São Paulo - SP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de atendimento urgente?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Para casos urgentes, entre em contacto conosco através do WhatsApp ou telefone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="http://wa.me/244936822703" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Urgente
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+244936822703">
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </a>
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
                <a href="tel:+551134567890" className="text-secondary hover:text-secondary/80">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="mailto:contato@consultoria.com.br" className="text-secondary hover:text-secondary/80">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="http://wa.me/244936822703" className="text-secondary hover:text-secondary/80">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Áreas de Actuação</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link href="/areas" className="hover:text-background">
                    Direito Civil
                  </Link>
                </li>
                <li>
                  <Link href="/areas" className="hover:text-background">
                    Direito Penal
                  </Link>
                </li>
                <li>
                  <Link href="/areas" className="hover:text-background">
                    Direito Trabalhista
                  </Link>
                </li>
                <li>
                  <Link href="/areas" className="hover:text-background">
                    Direito Empresarial
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link href="/servicos" className="hover:text-background">
                    Consultas Jurídicas
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-background">
                    Elaboração de Documentos
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-background">
                    Representação Legal
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-background">
                    Assessoria Empresarial
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link href="/sobre" className="hover:text-background">
                    Sobre Nós
                  </Link>
                </li>
                {/*<li>
                  <Link href="/blog" className="hover:text-background">
                    Blog Jurídico
                  </Link>
                </li>*/}
                <li>
                  <Link href="/faq" className="hover:text-background">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/curriculos" className="hover:text-background">
                    Nossa Equipe
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-background/70">
            <p>&copy; 2024 Consultoria Jurídica. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/termos" className="hover:text-background text-sm">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="hover:text-background text-sm">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
