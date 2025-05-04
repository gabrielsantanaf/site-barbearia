// Tipos para Usuários
export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: "admin" | "professional" | "client"
  createdAt: Date
  updatedAt: Date
}

// Tipos para Serviços
export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

// Tipos para Profissionais
export interface Professional {
  id: string
  userId: string
  name: string
  specialty: string
  bio: string
  active: boolean
  createdAt: Date
  updatedAt: Date
}

// Tipos para Agendamentos
export interface Appointment {
  id: string
  clientId: string
  professionalId: string
  serviceId: string
  date: Date
  startTime: string
  endTime: string
  status: "scheduled" | "confirmed" | "completed" | "canceled"
  notes?: string
  createdAt: Date
  updatedAt: Date
}

// Tipos para Horários de Funcionamento
export interface WorkingHours {
  id: string
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6 // 0 = Domingo, 6 = Sábado
  openTime: string
  closeTime: string
  isOpen: boolean
}

// Tipos para Bloqueios de Horário
export interface TimeBlock {
  id: string
  professionalId?: string
  date: Date
  startTime: string
  endTime: string
  reason: string
  createdAt: Date
  updatedAt: Date
}

// Tipos para Avaliações
export interface Review {
  id: string
  appointmentId: string
  clientId: string
  professionalId: string
  rating: number
  comment?: string
  createdAt: Date
  updatedAt: Date
}
