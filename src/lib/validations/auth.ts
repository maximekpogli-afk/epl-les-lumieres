import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
})

export const registerSchema = z.object({
  first_name: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  last_name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
  role: z.enum(["student", "teacher", "parent", "secretary", "accountant"]),
  phone: z.string().optional(),
})

export const studentSchema = z.object({
  first_name: z.string().min(2),
  last_name: z.string().min(2),
  sex: z.enum(["male", "female"]),
  date_of_birth: z.string(),
  place_of_birth: z.string().optional(),
  nationality: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  class_id: z.string().optional(),
  parent_id: z.string().optional(),
})

export const parentSchema = z.object({
  first_name: z.string().min(2),
  last_name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional(),
  profession: z.string().optional(),
  address: z.string().optional(),
  relationship: z.string(),
})

export const teacherSchema = z.object({
  first_name: z.string().min(2),
  last_name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional(),
  address: z.string().optional(),
  hire_date: z.string(),
})

export const feeSchema = z.object({
  name: z.string().min(2),
  type: z.enum(["registration", "tuition", "canteen", "transport", "uniform", "activities", "other"]),
  amount: z.number().positive(),
  is_mandatory: z.boolean().optional(),
})

export const paymentSchema = z.object({
  student_id: z.string(),
  fee_id: z.string(),
  amount: z.number().positive(),
  payment_method: z.string(),
  reference: z.string(),
})

export const gradeSchema = z.object({
  student_id: z.string(),
  subject_id: z.string(),
  grade_type_id: z.string(),
  value: z.number().min(0).max(20),
  period: z.string(),
  comment: z.string().optional(),
})

export const attendanceSchema = z.object({
  student_id: z.string(),
  class_id: z.string(),
  date: z.string(),
  status: z.enum(["present", "absent", "late", "justified_absent"]),
})
