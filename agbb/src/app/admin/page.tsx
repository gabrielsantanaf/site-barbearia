"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  CalendarDays,
  Clock,
  Home,
  LogOut,
  Menu,
  Plus,
  Scissors,
  Settings,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr]">
        <Sidebar className="hidden md:flex">
          <SidebarHeader className="flex h-14 items-center border-b px-6">
            <div className="flex items-center gap-2 font-bold">
              <Scissors className="h-5 w-5" />
              <span>BarberShop Admin</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "dashboard"}>
                  <Link href="#dashboard" onClick={() => setActiveTab("dashboard")}>
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "agendamentos"}>
                  <Link href="#agendamentos" onClick={() => setActiveTab("agendamentos")}>
                    <Calendar className="h-4 w-4" />
                    <span>Agendamentos</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "servicos"}>
                  <Link href="#servicos" onClick={() => setActiveTab("servicos")}>
                    <Scissors className="h-4 w-4" />
                    <span>Serviços</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "profissionais"}>
                  <Link href="#profissionais" onClick={() => setActiveTab("profissionais")}>
                    <Users className="h-4 w-4" />
                    <span>Profissionais</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "clientes"}>
                  <Link href="#clientes" onClick={() => setActiveTab("clientes")}>
                    <User className="h-4 w-4" />
                    <span>Clientes</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "configuracoes"}>
                  <Link href="#configuracoes" onClick={() => setActiveTab("configuracoes")}>
                    <Settings className="h-4 w-4" />
                    <span>Configurações</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-6">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-full bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Admin</span>
                <span className="text-xs text-muted-foreground">admin@barbershop.com</span>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Sair</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <div className="flex items-center md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="mr-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] p-0">
                  <div className="flex h-14 items-center border-b px-6">
                    <div className="flex items-center gap-2 font-bold">
                      <Scissors className="h-5 w-5" />
                      <span>BarberShop Admin</span>
                    </div>
                  </div>
                  <div className="px-2 py-4">
                    <div className="flex flex-col gap-1">
                      <Link href="#dashboard" onClick={() => setActiveTab("dashboard")}>
                        <Button variant="ghost" className="w-full justify-start">
                          <Home className="mr-2 h-4 w-4" />
                          Dashboard
                        </Button>
                      </Link>
                      <Link href="#agendamentos" onClick={() => setActiveTab("agendamentos")}>
                        <Button variant="ghost" className="w-full justify-start">
                          <Calendar className="mr-2 h-4 w-4" />
                          Agendamentos
                        </Button>
                      </Link>
                      <Link href="#servicos" onClick={() => setActiveTab("servicos")}>
                        <Button variant="ghost" className="w-full justify-start">
                          <Scissors className="mr-2 h-4 w-4" />
                          Serviços
                        </Button>
                      </Link>
                      <Link href="#profissionais" onClick={() => setActiveTab("profissionais")}>
                        <Button variant="ghost" className="w-full justify-start">
                          <Users className="mr-2 h-4 w-4" />
                          Profissionais
                        </Button>
                      </Link>
                      <Link href="#clientes" onClick={() => setActiveTab("clientes")}>
                        <Button variant="ghost" className="w-full justify-start">
                          <User className="mr-2 h-4 w-4" />
                          Clientes
                        </Button>
                      </Link>
                      <Link href="#configuracoes" onClick={() => setActiveTab("configuracoes")}>
                        <Button variant="ghost" className="w-full justify-start">
                          <Settings className="mr-2 h-4 w-4" />
                          Configurações
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <div className="flex items-center gap-2 font-bold md:hidden">
                <Scissors className="h-5 w-5" />
                <span>BarberShop</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-semibold">
                {activeTab === "dashboard" && "Dashboard"}
                {activeTab === "agendamentos" && "Agendamentos"}
                {activeTab === "servicos" && "Serviços"}
                {activeTab === "profissionais" && "Profissionais"}
                {activeTab === "clientes" && "Clientes"}
                {activeTab === "configuracoes" && "Configurações"}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Novo Agendamento
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-4 sm:p-6">
            {activeTab === "dashboard" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Agendamentos Hoje</CardTitle>
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">+2 em relação a ontem</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Agendamentos Semana</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">64</div>
                    <p className="text-xs text-muted-foreground">+8 em relação à semana passada</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">120</div>
                    <p className="text-xs text-muted-foreground">+12 novos este mês</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Faturamento Mensal</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">R$ 4.200,00</div>
                    <p className="text-xs text-muted-foreground">+15% em relação ao mês anterior</p>
                  </CardContent>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Agendamentos de Hoje</CardTitle>
                    <CardDescription>Visão geral dos agendamentos para hoje</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {todayAppointments.map((appointment) => (
                        <div
                          key={appointment.id}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{appointment.client}</p>
                              <p className="text-sm text-muted-foreground">{appointment.service}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="font-medium">{appointment.time}</p>
                              <p className="text-sm text-muted-foreground">{appointment.professional}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Detalhes
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver todos os agendamentos
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Serviços Mais Populares</CardTitle>
                    <CardDescription>Serviços mais agendados este mês</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularServices.map((service) => (
                        <div key={service.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <Scissors className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{service.name}</p>
                              <p className="text-sm text-muted-foreground">R$ {service.price.toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{service.count} agendamentos</p>
                            <p className="text-sm text-muted-foreground">{service.duration} min</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver todos os serviços
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}
            {activeTab === "agendamentos" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Tabs defaultValue="hoje" className="w-full">
                    <TabsList>
                      <TabsTrigger value="hoje">Hoje</TabsTrigger>
                      <TabsTrigger value="amanha">Amanhã</TabsTrigger>
                      <TabsTrigger value="semana">Esta Semana</TabsTrigger>
                      <TabsTrigger value="todos">Todos</TabsTrigger>
                    </TabsList>
                    <TabsContent value="hoje" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Agendamentos de Hoje</CardTitle>
                          <CardDescription>
                            {new Date().toLocaleDateString("pt-BR", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {todayAppointments.map((appointment) => (
                              <div
                                key={appointment.id}
                                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                              >
                                <div className="flex items-center gap-4">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Clock className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <p className="font-medium">{appointment.client}</p>
                                    <p className="text-sm text-muted-foreground">{appointment.service}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="text-right">
                                    <p className="font-medium">{appointment.time}</p>
                                    <p className="text-sm text-muted-foreground">{appointment.professional}</p>
                                  </div>
                                  <Button variant="outline" size="sm">
                                    Detalhes
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="amanha" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Agendamentos de Amanhã</CardTitle>
                          <CardDescription>
                            {new Date(Date.now() + 86400000).toLocaleDateString("pt-BR", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex h-40 items-center justify-center">
                            <p className="text-muted-foreground">Nenhum agendamento para amanhã</p>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="semana" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Agendamentos desta Semana</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex h-40 items-center justify-center">
                            <p className="text-muted-foreground">Carregando agendamentos da semana...</p>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="todos" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Todos os Agendamentos</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex h-40 items-center justify-center">
                            <p className="text-muted-foreground">Carregando todos os agendamentos...</p>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            )}
            {activeTab === "servicos" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Lista de Serviços</h2>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Novo Serviço
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <Card key={service.id}>
                      <CardHeader>
                        <CardTitle>{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration} minutos</span>
                        </div>
                        <div className="mt-2 font-bold">R$ {service.price.toFixed(2)}</div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                        <Button variant="destructive" size="sm">
                          Excluir
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "profissionais" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Profissionais</h2>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Novo Profissional
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {professionals.map((professional) => (
                    <Card key={professional.id}>
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
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                        <Button variant="destructive" size="sm">
                          Excluir
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "clientes" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Clientes</h2>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Novo Cliente
                  </Button>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Lista de Clientes</CardTitle>
                    <CardDescription>Gerenciar clientes cadastrados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {clients.map((client) => (
                        <div
                          key={client.id}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{client.name}</p>
                              <p className="text-sm text-muted-foreground">{client.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Detalhes
                            </Button>
                            <Button variant="outline" size="sm">
                              Histórico
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            {activeTab === "configuracoes" && (
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações do Sistema</CardTitle>
                    <CardDescription>Gerenciar configurações gerais do sistema</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Horário de Funcionamento</h3>
                      <p className="text-sm text-muted-foreground">Defina os horários de funcionamento da barbearia</p>
                      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Dias de Semana</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">Segunda a Sexta: 09:00 - 18:00</p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm">
                              Editar
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Fim de Semana</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">Sábado: 09:00 - 16:00</p>
                            <p className="text-sm">Domingo: Fechado</p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm">
                              Editar
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Notificações</h3>
                      <p className="text-sm text-muted-foreground">Configure as notificações automáticas</p>
                      <div className="mt-2">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Configurações de WhatsApp</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">Status: Ativo</p>
                            <p className="text-sm">Número: (11) 99999-9999</p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm">
                              Configurar
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
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

const todayAppointments = [
  {
    id: 1,
    client: "João Silva",
    service: "Corte de Cabelo",
    time: "09:30",
    professional: "Carlos Silva",
  },
  {
    id: 2,
    client: "Pedro Oliveira",
    service: "Barba",
    time: "10:30",
    professional: "Rafael Oliveira",
  },
  {
    id: 3,
    client: "Marcos Santos",
    service: "Combo (Cabelo + Barba)",
    time: "11:30",
    professional: "Carlos Silva",
  },
  {
    id: 4,
    client: "Lucas Ferreira",
    service: "Corte Degradê",
    time: "14:00",
    professional: "André Santos",
  },
]

const popularServices = [
  {
    id: 1,
    name: "Corte Degradê",
    price: 40.0,
    duration: 40,
    count: 45,
  },
  {
    id: 2,
    name: "Combo (Cabelo + Barba)",
    price: 55.0,
    duration: 50,
    count: 38,
  },
  {
    id: 3,
    name: "Barba",
    price: 25.0,
    duration: 20,
    count: 30,
  },
]

const clients = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-1111",
  },
  {
    id: 2,
    name: "Pedro Oliveira",
    email: "pedro.oliveira@email.com",
    phone: "(11) 99999-2222",
  },
  {
    id: 3,
    name: "Marcos Santos",
    email: "marcos.santos@email.com",
    phone: "(11) 99999-3333",
  },
  {
    id: 4,
    name: "Lucas Ferreira",
    email: "lucas.ferreira@email.com",
    phone: "(11) 99999-4444",
  },
  {
    id: 5,
    name: "Gabriel Almeida",
    email: "gabriel.almeida@email.com",
    phone: "(11) 99999-5555",
  },
]
