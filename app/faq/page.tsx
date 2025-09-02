import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Scale, Clock, Phone, Mail, MapPin, HelpCircle, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Consultas e Atendimento",
      questions: [
        {
          question: "A primeira consulta é realmente gratuita?",
          answer:
            "Sim, oferecemos uma consulta inicial gratuita de até 30 minutos para avaliar seu caso e esclarecer suas dúvidas principais. Isso nos permite entender sua situação e você pode conhecer nosso trabalho sem compromisso.",
        },
        {
          question: "Como posso agendar uma consulta?",
          answer:
            "Você pode agendar através do nosso formulário online, por telefone (11) 9999-9999, WhatsApp ou e-mail. Respondemos em até 24 horas para confirmar o agendamento.",
        },
        {
          question: "Vocês atendem online?",
          answer:
            "Sim, oferecemos consultas presenciais, online (videoconferência) e por telefone. Você escolhe a modalidade que for mais conveniente para você.",
        },
        {
          question: "Qual documentação devo levar na consulta?",
          answer:
            "Traga todos os documentos relacionados ao seu caso: contratos, e-mails, notificações, comprovantes, etc. Se não tiver algum documento, não se preocupe - podemos orientá-lo sobre como obtê-los.",
        },
      ],
    },
    {
      category: "Custos e Pagamento",
      questions: [
        {
          question: "Como são calculados os honorários?",
          answer:
            "Nossos honorários variam conforme a complexidade do caso. Sempre informamos os valores previamente, sem surpresas. Oferecemos orçamentos detalhados após a análise inicial gratuita.",
        },
        {
          question: "Posso parcelar o pagamento?",
          answer:
            "Sim, oferecemos parcelamento em até 12x sem juros no cartão de crédito. Também aceitamos PIX, transferência bancária e boleto. Discutimos as melhores condições para cada caso.",
        },
        {
          question: "Existem custos adicionais?",
          answer:
            "Todos os custos são informados previamente. Custas judiciais, taxas cartoriais e outros gastos processuais são sempre comunicados antes de qualquer procedimento.",
        },
        {
          question: "Quando devo pagar os honorários?",
          answer:
            "O pagamento pode ser feito de diferentes formas: à vista com desconto, parcelado, ou conforme acordo específico para cada tipo de serviço. Sempre estabelecemos isso claramente no contrato.",
        },
      ],
    },
    {
      category: "Processos e Prazos",
      questions: [
        {
          question: "Quanto tempo demora um processo judicial?",
          answer:
            "O tempo varia muito conforme o tipo de processo e a complexidade do caso. Processos simples podem levar de 6 meses a 2 anos, enquanto casos complexos podem demorar mais. Sempre informamos uma estimativa realista.",
        },
        {
          question: "Como acompanho o andamento do meu processo?",
          answer:
            "Mantemos nossos clientes sempre informados através de relatórios periódicos, e-mails, WhatsApp e ligações. Você também pode nos contatar a qualquer momento para esclarecimentos.",
        },
        {
          question: "Posso desistir do processo depois de iniciado?",
          answer:
            "Sim, você pode desistir a qualquer momento, mas alguns custos já incorridos não são reembolsáveis. Sempre discutimos todas as implicações antes de qualquer decisão.",
        },
        {
          question: "O que acontece se eu perder o processo?",
          answer:
            "Analisamos cuidadosamente as chances de sucesso antes de iniciar qualquer ação. Se houver derrota, explicamos as opções de recurso e os custos envolvidos. Sempre trabalhamos para minimizar riscos.",
        },
      ],
    },
    {
      category: "Áreas de Atuação",
      questions: [
        {
          question: "Vocês atendem casos criminais?",
          answer:
            "Sim, temos especialistas em direito penal que atuam em defesas criminais, recursos, habeas corpus e acompanhamento de inquéritos policiais.",
        },
        {
          question: "Fazem divórcio consensual?",
          answer:
            "Sim, realizamos divórcios consensuais e litigiosos, incluindo questões de guarda, pensão alimentícia e partilha de bens. Buscamos sempre a solução mais rápida e econômica.",
        },
        {
          question: "Atendem questões trabalhistas?",
          answer:
            "Sim, atuamos tanto para empregados quanto empregadores em questões como rescisões, horas extras, assédio, acidentes de trabalho e consultoria preventiva.",
        },
        {
          question: "Fazem abertura de empresas?",
          answer:
            "Sim, auxiliamos na abertura de empresas, elaboração de contratos societários, consultoria tributária e assessoria jurídica empresarial completa.",
        },
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
              <Link href="/areas" className="text-foreground hover:text-primary transition-colors">
                Áreas de Atuação
              </Link>
              <Link href="/servicos" className="text-foreground hover:text-primary transition-colors">
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
              Perguntas Frequentes
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Tire suas <span className="text-primary">dúvidas</span> mais comuns
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Reunimos as perguntas mais frequentes de nossos clientes para ajudar você a esclarecer suas dúvidas sobre
              nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Ainda tem dúvidas?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Não encontrou a resposta que procurava? Nossa equipe está pronta para esclarecer todas as suas dúvidas
                  pessoalmente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/agendamento">
                      <Clock className="mr-2 h-5 w-5" />
                      Agendar Consulta Gratuita
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contato">
                      <Phone className="mr-2 h-5 w-5" />
                      Entrar em Contato
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
