"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Scale, Clock, Phone, Mail, MapPin, CalendarIcon, User, FileText, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { cn } from "@/lib/utils"

export default function AppointmentPage() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpfCnpj: "",
    legalArea: "",
    consultationType: "",
    preferredTime: "",
    caseDescription: "",
    urgency: "",
    hasDocuments: false,
    agreeTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const legalAreas = [
    "Direito Civil",
    "Direito Penal",
    "Direito Trabalhista",
    "Direito Empresarial",
    "Direito Tributário",
    "Direito Imobiliário",
    "Direito de Família",
    "Direito do Consumidor",
    "Direito Previdenciário",
  ]

  const timeSlots = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Agendamento Confirmado!</h2>
            <p className="text-muted-foreground mb-6">
              Recebemos sua solicitação de agendamento. Nossa equipe entrará em contato em até 24 horas para confirmar
              sua consulta.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <p>
                <strong>Data:</strong> {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "A definir"}
              </p>
              <p>
                <strong>Horário:</strong> {formData.preferredTime || "A definir"}
              </p>
              <p>
                <strong>Área:</strong> {formData.legalArea}
              </p>
            </div>
            <Button asChild className="w-full">
              <Link href="/">Voltar ao Início</Link>
            </Button>
          </CardContent>
        </Card>
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
                Áreas de Actuação
              </Link>
              <Link href="/servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/contato" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
              <Button variant="outline" asChild>
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
              Agendamento Online
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Agende sua <span className="text-primary">consulta gratuita</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contacto para confirmar sua consulta jurídica
              gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-primary" />
                    <CardTitle>Informações Pessoais</CardTitle>
                  </div>
                  <CardDescription>Preencha seus dados para contacto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
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
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(+244) 999-999-999"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cpfCnpj">NIF</Label>
                      <Input
                        id="cpfCnpj"
                        value={formData.cpfCnpj}
                        onChange={(e) => handleInputChange("cpfCnpj", e.target.value)}
                        placeholder="000.000.000-00"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Details */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle>Detalhes da Consulta</CardTitle>
                  </div>
                  <CardDescription>Informações sobre sua necessidade jurídica</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Área Jurídica *</Label>
                    <Select value={formData.legalArea} onValueChange={(value) => handleInputChange("legalArea", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a área jurídica" />
                      </SelectTrigger>
                      <SelectContent>
                        {legalAreas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Tipo de Consulta *</Label>
                    <RadioGroup
                      value={formData.consultationType}
                      onValueChange={(value) => handleInputChange("consultationType", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="presencial" id="presencial" />
                        <Label htmlFor="presencial">Presencial (no escritório)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="online" id="online" />
                        <Label htmlFor="online">Online (videoconferência)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="telefone" id="telefone" />
                        <Label htmlFor="telefone">Por telefone</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Descrição do Caso *</Label>
                    <Textarea
                      value={formData.caseDescription}
                      onChange={(e) => handleInputChange("caseDescription", e.target.value)}
                      placeholder="Descreva brevemente sua situação jurídica..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Urgência do Caso</Label>
                    <RadioGroup value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="baixa" id="baixa" />
                        <Label htmlFor="baixa">Baixa - Posso aguardar alguns dias</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="media" id="media" />
                        <Label htmlFor="media">Média - Preciso resolver em breve</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="alta" id="alta" />
                        <Label htmlFor="alta">Alta - É urgente</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasDocuments"
                      checked={formData.hasDocuments}
                      onCheckedChange={(checked) => handleInputChange("hasDocuments", checked as boolean)}
                    />
                    <Label htmlFor="hasDocuments">Possuo documentos relacionados ao caso</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Date and Time Selection */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <CardTitle>Data e Horário Preferidos</CardTitle>
                  </div>
                  <CardDescription>Selecione sua preferência (sujeito à disponibilidade)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Data Preferida</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "Selecione uma data"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label>Horário Preferido</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => handleInputChange("preferredTime", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um horário" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Submit */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                        required
                      />
                      <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                        Concordo com os{" "}
                        <Link href="/termos" className="text-primary hover:underline">
                          termos de uso
                        </Link>{" "}
                        e{" "}
                        <Link href="/privacidade" className="text-primary hover:underline">
                          política de privacidade
                        </Link>
                        . Autorizo o contacto por telefone, e-mail e WhatsApp para agendamento da consulta.
                      </Label>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-muted-foreground">
                          <p className="font-medium text-foreground mb-1">Importante:</p>
                          <ul className="space-y-1">
                            <li>• A primeira consulta é sempre gratuita (até 30 minutos)</li>
                            <li>• Confirmaremos o agendamento por telefone em até 24 horas</li>
                            <li>• Traga documentos relacionados ao caso, se houver</li>
                            <li>• Cancelamentos devem ser feitos com 24h de antecedência</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !formData.agreeTerms}>
                      {isSubmitting ? (
                        <>
                          <Clock className="mr-2 h-5 w-5 animate-spin" />
                          Enviando Solicitação...
                        </>
                      ) : (
                        <>
                          <CalendarIcon className="mr-2 h-5 w-5" />
                          Agendar Consulta Gratuita
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Prefere falar conosco diretamente?</h2>
              <p className="text-muted-foreground">Entre em contacto pelos canais abaixo</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Telefone</h3>
                  <p className="text-muted-foreground">(+244) 999-999-999</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">E-mail</h3>
                  <p className="text-muted-foreground">contacto@consultoria.com.br</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Endereço</h3>
                  <p className="text-muted-foreground">Rua Exemplo, 123 - Kilamba</p>
                </CardContent>
              </Card>
            </div>
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
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-background/70">
                <p>(+244) 999-999-999</p>
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
