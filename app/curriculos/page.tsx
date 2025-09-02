import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Clock, Phone, Mail, MapPin, Download, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ResumesPage() {
  const lawyers = [
    {
      name: "Dr. Carlos Silva",
      title: "Sócio Fundador",
      image: "/professional-male-lawyer.png",
      specialties: ["Direito Civil", "Direito Empresarial"],
      experience: "25+ anos",
      oab: "OAB/SP 123.456",
      education: [
        "Graduação em Direito - Universidade de São Paulo (USP)",
        "Pós-graduação em Direito Empresarial - FGV",
        "MBA em Gestão Jurídica - Insper",
      ],
      experience_details: [
        "Sócio Fundador da Consultoria Jurídica (1995-presente)",
        "Advogado Sênior no Escritório Advocacia & Cia (1990-1995)",
        "Consultor Jurídico na Empresa XYZ Ltda (1988-1990)",
      ],
      achievements: [
        "Reconhecido como um dos 100 melhores advogados civilistas de SP",
        "Palestrante em mais de 50 eventos jurídicos",
        "Autor de artigos em revistas jurídicas especializadas",
        "Membro da Comissão de Direito Civil da OAB/SP",
      ],
      languages: ["Português (nativo)", "Inglês (fluente)", "Espanhol (intermediário)"],
    },
    {
      name: "Dra. Maria Santos",
      title: "Sócia Fundadora",
      image: "/female-lawyer-business-attire.png",
      specialties: ["Direito Trabalhista", "Direito Penal"],
      experience: "23+ anos",
      oab: "OAB/SP 234.567",
      education: [
        "Graduação em Direito - Pontifícia Universidade Católica (PUC-SP)",
        "Mestrado em Direito Penal - PUC-SP",
        "Especialização em Direito Trabalhista - Mackenzie",
      ],
      experience_details: [
        "Sócia Fundadora da Consultoria Jurídica (1995-presente)",
        "Defensora Pública do Estado de São Paulo (1992-1995)",
        "Advogada Trabalhista no Sindicato dos Metalúrgicos (1990-1992)",
      ],
      achievements: [
        "Especialista reconhecida em defesa criminal",
        "Mais de 500 casos trabalhistas com sucesso",
        "Professora convidada em cursos de pós-graduação",
        "Coordenadora da Comissão de Direito da Mulher da OAB/SP",
      ],
      languages: ["Português (nativo)", "Inglês (avançado)", "Francês (básico)"],
    },
    {
      name: "Dr. João Oliveira",
      title: "Advogado Associado",
      image: "/young-professional-male-lawyer.png",
      specialties: ["Direito Digital", "Direito Tributário"],
      experience: "8+ anos",
      oab: "OAB/SP 345.678",
      education: [
        "Graduação em Direito - Universidade Presbiteriana Mackenzie",
        "Especialização em Direito Digital - FGV",
        "Pós-graduação em Direito Tributário - PUC-SP",
      ],
      experience_details: [
        "Advogado Associado na Consultoria Jurídica (2018-presente)",
        "Advogado Júnior no Escritório Digital Law (2016-2018)",
        "Estagiário na Procuradoria Geral do Estado (2014-2016)",
      ],
      achievements: [
        "Pioneiro em casos de direito digital na região",
        "Consultor em LGPD para mais de 100 empresas",
        "Palestrante em eventos de tecnologia e direito",
        "Certificado em Privacy Officer pela IAPP",
      ],
      languages: ["Português (nativo)", "Inglês (fluente)", "Alemão (básico)"],
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
              <Link href="/areas" className="text-foreground hover:text-primary transition-colors">
                Áreas de Actuação
              </Link>
              <Link href="/servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              {/*<Link href="/blog" className="text-foreground hover:text-primary transition-colors">
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
              Currículos Profissionais
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Conheça a <span className="text-primary">experiência</span> da nossa equipe
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Profissionais altamente qualificados com décadas de experiência em diversas áreas do direito, prontos para
              defender seus interesses.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Profiles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {lawyers.map((lawyer, index) => (
              <Card key={index} className="max-w-6xl mx-auto overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Profile Image and Basic Info */}
                  <div className="lg:col-span-1 p-6">
                    <div className="text-center">
                      <div className="relative w-48 h-48 mx-auto mb-6">
                        <Image
                          src={lawyer.image || "/placeholder.svg"}
                          alt={lawyer.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">{lawyer.name}</h2>
                      <p className="text-primary font-medium mb-4">{lawyer.title}</p>
                      <div className="space-y-2 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center justify-center space-x-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{lawyer.experience} de experiência</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Award className="h-4 w-4" />
                          <span>{lawyer.oab}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {lawyer.specialties.map((specialty, specIndex) => (
                          <Badge key={specIndex} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download CV Completo
                      </Button>
                    </div>
                  </div>

                  {/* Detailed Information */}
                  <div className="lg:col-span-2 p-6 space-y-8">
                    {/* Education */}
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Formação Acadêmica</h3>
                      </div>
                      <ul className="space-y-2">
                        {lawyer.education.map((edu, eduIndex) => (
                          <li key={eduIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Professional Experience */}
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Experiência Profissional</h3>
                      </div>
                      <ul className="space-y-2">
                        {lawyer.experience_details.map((exp, expIndex) => (
                          <li key={expIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Principais Conquistas</h3>
                      </div>
                      <ul className="space-y-2">
                        {lawyer.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Languages */}
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Idiomas</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {lawyer.languages.map((language, langIndex) => (
                          <Badge key={langIndex} variant="outline" className="text-xs">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Quer conhecer nossa equipe pessoalmente?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agende uma consulta gratuita e converse diretamente com nossos especialistas sobre seu caso.
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
