export type Role = "super_admin" | "admin" | "secretary" | "teacher" | "accountant" | "parent"

export interface User {
  id: string
  email: string
  role: Role
  created_at: string
  updated_at: string
}

export interface Profile extends User {
  first_name: string
  last_name: string
  phone?: string
  address?: string
  avatar_url?: string
  academic_year_id?: string
}

export interface Student {
  id: string
  matricule: string
  first_name: string
  last_name: string
  sex: "male" | "female"
  date_of_birth: string
  place_of_birth?: string
  nationality?: string
  address?: string
  phone?: string
  email?: string
  class_id?: string
  academic_year_id?: string
  enrollment_date: string
  status: "active" | "inactive" | "transferred" | "graduated" | "archived"
  parent_id?: string
  created_at: string
  updated_at: string
}

export interface Parent {
  id: string
  first_name: string
  last_name: string
  phone: string
  email?: string
  profession?: string
  address?: string
  relationship: string
  created_at: string
}

export interface StudentParent {
  id: string
  student_id: string
  parent_id: string
  is_primary: boolean
}

export interface AcademicYear {
  id: string
  name: string
  label: string
  start_date: string
  end_date: string
  status: "active" | "closed" | "archived"
  is_current: boolean
  created_at: string
}

export interface Level {
  id: string
  name: string
  academic_year_id: string
  created_at: string
}

export interface Class {
  id: string
  name: string
  level_id: string
  academic_year_id: string
  teacher_id?: string
  capacity: number
  created_at: string
}

export interface Teacher {
  id: string
  matricule: string
  first_name: string
  last_name: string
  phone: string
  email?: string
  address?: string
  subject_ids: string[]
  class_ids: string[]
  status: "active" | "inactive"
  hire_date: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Subject {
  id: string
  name: string
  code: string
  coefficient: number
  created_at: string
}

export interface Enrollment {
  id: string
  student_id: string
  class_id: string
  academic_year_id: string
  enrollment_date: string
  status: "pending" | "accepted" | "rejected" | "transferred"
  documents?: string[]
  created_at: string
}

export interface GradeType {
  id: string
  name: string
  label: string
  coefficient: number
  created_at: string
}

export interface Grade {
  id: string
  student_id: string
  subject_id: string
  grade_type_id: string
  value: number
  period: string
  comment?: string
  teacher_id?: string
  created_at: string
  updated_at: string
}

export interface Attendance {
  id: string
  student_id: string
  class_id: string
  date: string
  status: "present" | "absent" | "late" | "justified_absent"
  teacher_id?: string
  created_at: string
}

export interface Fee {
  id: string
  name: string
  type: "registration" | "tuition" | "canteen" | "transport" | "uniform" | "activities" | "other"
  amount: number
  academic_year_id: string
  class_id?: string
  is_mandatory: boolean
  due_date?: string
  created_at: string
}

export interface Payment {
  id: string
  student_id: string
  fee_id: string
  amount: number
  payment_date: string
  payment_method: string
  reference: string
  recorded_by: string
  receipt_number?: string
  academic_year_id: string
  created_at: string
}

export interface Announcement {
  id: string
  title: string
  content: string
  author_id: string
  audience: "all" | "students" | "parents" | "teachers" | "admin"
  created_at: string
  is_published: boolean
}

export interface Document {
  id: string
  title: string
  type: string
  file_url: string
  student_id?: string
  teacher_id?: string
  generated_by: string
  created_at: string
}

export interface Notification {
  id: string
  user_id: string
  title: string
  message: string
  type: "info" | "warning" | "success" | "error"
  is_read: boolean
  created_at: string
}

export interface AuditLog {
  id: string
  user_id: string
  action: string
  entity_type: string
  entity_id?: string
  details?: string
  ip_address?: string
  created_at: string
}

export interface Schedule {
  id: string
  day_of_week: number
  start_time: string
  end_time: string
  class_id: string
  subject_id: string
  teacher_id: string
  room_id?: string
  academic_year_id: string
  created_at: string
}

export interface DashboardStats {
  totalStudents: number
  totalTeachers: number
  totalClasses: number
  presentToday: number
  absentToday: number
  recentEnrollments: number
  recentPayments: number
  unpaidFees: number
  overallAverage: number
  recentActivities: ActivityItem[]
}

export interface ActivityItem {
  id: string
  type: string
  description: string
  user_name: string
  created_at: string
}
