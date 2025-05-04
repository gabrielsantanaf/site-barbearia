import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formatar data para exibição
export function formatDate(date: Date): string {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}

// Formatar hora para exibição
export function formatTime(time: string): string {
  return time
}

// Verificar se um horário está disponível
export function isTimeAvailable(
  date: Date,
  time: string,
  professionalId: string,
  appointments: any[],
  timeBlocks: any[],
): boolean {
  // Implementação da lógica para verificar disponibilidade
  return true
}

// Gerar horários disponíveis para um dia
export function generateAvailableTimes(
  date: Date,
  professionalId: string,
  workingHours: any[],
  appointments: any[],
  timeBlocks: any[],
  serviceDuration: number,
): string[] {
  // Implementação da lógica para gerar horários disponíveis
  return [
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
}

// Validar CPF
export function validateCPF(cpf: string): boolean {
  // Implementação da validação de CPF
  return true
}

// Validar telefone
export function validatePhone(phone: string): boolean {
  // Implementação da validação de telefone
  return true
}

// Calcular duração total de um agendamento
export function calculateAppointmentDuration(startTime: string, endTime: string): number {
  // Implementação do cálculo de duração
  return 30
}

// Formatar valor monetário
export function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
