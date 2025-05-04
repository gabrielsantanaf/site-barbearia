"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Check, Clock, Scissors, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AgendamentoPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [selectedProfessional, setSelectedProfessional] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleServiceSelect = (serviceId: number) => {
    setSelectedService(serviceId)
    setStep(2)
  }

  const handleProfessionalSelect = (professionalId: number) => {
    setSelectedProfessional(professionalId)
    setStep(3)
  }

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep(4)
  }

  const handleConfirm = () => {
    // Aqui seria a lógica para confirmar o agendamento
    // Redirecionaria para login se não estiver logado
    setStep(5)
  }

  const getServiceById = (id: number) => {
    return services.find((service) => service.id === id)
  }

  const getProfessionalById = (id: number) => {
    return professionals.find((professional) => professional.id === id)
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Escolha um serviço</h2>
              <p className="text-muted-foreground">Selecione o serviço que deseja agendar</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all ${selectedService === service.id ? "ring-2 ring-primary" : "hover:border-primary"}`}
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration} minutos</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-lg font-bold">R$ {service.price.toFixed(2)}</span>
                    {selectedService === service.id && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Escolha um profissional</h2>
              <p className="text-muted-foreground">Selecione o profissional de sua preferência</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {professionals.map((professional) => (
                <Card
                  key={professional.id}
                  className={`cursor-pointer transition-all ${selectedProfessional === professional.id ? "ring-2 ring-primary" : "hover:border-primary"}`}
                  onClick={() => handleProfessionalSelect(professional.id)}
                >
                  <CardHeader>
                    <div className="flex justify-center">
                      <div className="relative h-24 w-24 rounded-full overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center bg-muted">
                          <User className="h-12 w-12 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <CardTitle className="mt-4 text-center">{professional.name}</CardTitle>
                    <CardDescription className="text-center">{professional.specialty}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{professional.bio}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    {selectedProfessional === professional.id && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Escolha data e horário</h2>
              <p className="text-muted-foreground">Selecione a data e horário disponíveis</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Data</CardTitle>
                  <CardDescription>Selecione a data para o agendamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date) => {
                      // Desabilita datas passadas e domingos
                      return date < new Date() || date.getDay() === 0
                    }}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Horário</CardTitle>
                  <CardDescription>Horários disponíveis para {selectedDate?.toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 gap-2">
                      {availableTimes.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className="justify-start"
                          onClick={() => handleTimeSelect(time)}
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex h-40 items-center justify-center text-muted-foreground">
                      Selecione uma data para ver os horários disponíveis
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Confirme seu agendamento</h2>
              <p className="'text-muted-foreground">Verifique os detalhes do seu agendamento</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Resumo do agendamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="font-medium">Serviço</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Scissors className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedService ? getServiceById(selectedService)?.name : ""}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{selectedService ? getServiceById(selectedService)?.duration + " minutos" : ""}</span>
                    </div>
                    <div className="mt-1 font-medium">
                      R$ {selectedService ? getServiceById(selectedService)?.price.toFixed(2) : ""}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Profissional</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedProfessional ? getProfessionalById(selectedProfessional)?.name : ""}</span>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {selectedProfessional ? getProfessionalById(selectedProfessional)?.specialty : ""}
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="font-medium">Data</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {selectedDate?.toLocaleDateString("pt-BR", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Horário</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedTime}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleConfirm} className="w-full">
                  Confirmar agendamento
                </Button>
              </CardFooter>
            </Card>
          </div>
        )
      case 5:
        return (
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Agendamento confirmado!</h2>
              <p className="text-muted-foreground mt-2">
                Seu agendamento foi confirmado com sucesso. Enviamos os detalhes para seu e-mail/WhatsApp.
              </p>
            </div>
            <div className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Detalhes do agendamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h3 className="font-medium">Serviço</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Scissors className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedService ? getServiceById(selectedService)?.name : ""}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{selectedService ? getServiceById(selectedService)?.duration + " minutos" : ""}</span>
                      </div>
                      <div className="mt-1 font-medium">
                        R$ {selectedService ? getServiceById(selectedService)?.price.toFixed(2) : ""}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">Profissional</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedProfessional ? getProfessionalById(selectedProfessional)?.name : ""}</span>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {selectedProfessional ? getProfessionalById(selectedProfessional)?.specialty : ""}
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h3 className="font-medium">Data</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {selectedDate?.toLocaleDateString("pt-BR", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">Horário</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <Link href="/" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full">
                    Voltar para a página inicial
                  </Button>
                </Link>
                <Link href="/minha-conta" className="w-full sm:w-auto">
                  <Button className="w-full">Minha conta</Button>
                </Link>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Entrar
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <Tabs value={`step-${step}`} className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="step-1" disabled>
                    Serviço
                  </TabsTrigger>
                  <TabsTrigger value="step-2" disabled>
                    Profissional
                  </TabsTrigger>
                  <TabsTrigger value="step-3" disabled>
                    Data/Hora
                  </TabsTrigger>
                  <TabsTrigger value="step-4" disabled>
                    Confirmação
                  </TabsTrigger>
                  <TabsTrigger value="step-5" disabled>
                    Concluído
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            {renderStepContent()}
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
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

const availableTimes = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
]
