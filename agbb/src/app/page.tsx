import Link from "next/link"
import { CalendarDays, Clock, Scissors, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Scissors className="h-5 w-5" />
            <span>BarberShop</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Início
            </Link>
            <Link href="#servicos" className="text-sm font-medium">
              Serviços
            </Link>
            <Link href="#sobre" className="text-sm font-medium">
              Sobre
            </Link>
            <Link href="#contato" className="text-sm font-medium">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/agendamento">
              <Button size="sm">Agendar</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Agende seu horário na BarberShop
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Cortes modernos, ambiente agradável e profissionais experientes para cuidar do seu estilo.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/agendamento">
                  <Button size="lg">Agendar agora</Button>
                </Link>
                <Link href="#servicos">
                  <Button variant="outline" size="lg">
                    Ver serviços
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Serviços</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Conheça os serviços disponíveis para agendamento
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {services.map((service) => (
                <Card key={service.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration} minutos</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-lg font-bold">R$ {service.price.toFixed(2)}</span>
                    <Link href={`/agendamento?service=${service.id}`}>
                      <Button variant="outline" size="sm">
                        Agendar
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="profissionais" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Profissionais</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Conheça nossa equipe de barbeiros especializados
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {professionals.map((professional) => (
                <Card key={professional.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-center">
                      <div className="relative h-32 w-32 rounded-full overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center bg-muted">
                          <User className="h-16 w-16 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <CardTitle className="mt-4 text-center">{professional.name}</CardTitle>
                    <CardDescription className="text-center">{professional.specialty}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 text-center">
                    <p className="text-sm text-muted-foreground">{professional.bio}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Link href={`/agendamento?professional=${professional.id}`}>
                      <Button variant="outline" size="sm">
                        Agendar com {professional.name.split(" ")[0]}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Como Funciona</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Agendar seu horário é simples e rápido
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <Scissors className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">1. Escolha o serviço</h3>
                <p className="mt-2 text-muted-foreground">Selecione entre nossos diversos serviços disponíveis</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">2. Selecione data e hora</h3>
                <p className="mt-2 text-muted-foreground">Escolha o melhor horário disponível para você</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">3. Confirme seu agendamento</h3>
                <p className="mt-2 text-muted-foreground">Faça login ou cadastre-se para confirmar seu horário</p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/agendamento">
                <Button size="lg">Agendar agora</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8 md:text-left">
          <div className="flex items-center gap-2 font-bold">
            <Scissors className="h-5 w-5" />
            <span>BarberShop</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BarberShop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Dados de exemplo
const services = [
  {
    id: 1,
    name: "Corte de Cabelo",
    description: "Corte tradicional ou moderno com acabamento perfeito",
    price: 35.0,
    duration: 30,
  },
  {
    id: 2,
    name: "Barba",
    description: "Modelagem e acabamento de barba com toalha quente",
    price: 25.0,
    duration: 20,
  },
  {
    id: 3,
    name: "Combo (Cabelo + Barba)",
    description: "Corte de cabelo completo com serviço de barba",
    price: 55.0,
    duration: 50,
  },
  {
    id: 4,
    name: "Corte Degradê",
    description: "Corte especializado com técnica de degradê",
    price: 40.0,
    duration: 40,
  },
  {
    id: 5,
    name: "Coloração",
    description: "Aplicação de coloração para cabelo ou barba",
    price: 60.0,
    duration: 60,
  },
  {
    id: 6,
    name: "Hidratação",
    description: "Tratamento de hidratação profunda para cabelo",
    price: 45.0,
    duration: 40,
  },
]

const professionals = [
  {
    id: 1,
    name: "Carlos Silva",
    specialty: "Especialista em Degradê",
    bio: "Com mais de 10 anos de experiência, Carlos é especialista em cortes modernos e técnicas de degradê.",
  },
  {
    id: 2,
    name: "Rafael Oliveira",
    specialty: "Barbeiro Master",
    bio: "Rafael é conhecido por suas técnicas precisas de barba e acabamentos perfeitos.",
  },
  {
    id: 3,
    name: "André Santos",
    specialty: "Colorista",
    bio: "Especializado em coloração e tratamentos capilares, André traz as últimas tendências para nossos clientes.",
  },
]
