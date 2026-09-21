import { Role } from "@/types"

export const ROLES: Record<Role, string> = {
  super_admin: "Super Administrateur",
  admin: "Administrateur",
  secretary: "Secrétaire",
  teacher: "Enseignant",
  accountant: "Comptable",
  parent: "Parent",
}

export const ROLE_PERMISSIONS: Record<Role, string[]> = {
  super_admin: [
    "users:read", "users:write", "users:delete",
    "students:read", "students:write", "students:delete",
    "teachers:read", "teachers:write", "teachers:delete",
    "classes:read", "classes:write", "classes:delete",
    "grades:read", "grades:write", "grades:delete",
    "attendance:read", "attendance:write",
    "fees:read", "fees:write", "fees:delete",
    "payments:read", "payments:write", "payments:delete",
    "documents:read", "documents:write", "documents:delete",
    "announcements:read", "announcements:write",
    "settings:read", "settings:write",
    "reports:read", "reports:write",
    "audit:read",
    "ai:read",
  ],
  admin: [
    "users:read", "users:write",
    "students:read", "students:write", "students:delete",
    "teachers:read", "teachers:write", "teachers:delete",
    "classes:read", "classes:write", "classes:delete",
    "grades:read", "grades:write", "grades:delete",
    "attendance:read", "attendance:write",
    "fees:read", "fees:write", "fees:delete",
    "payments:read", "payments:write", "payments:delete",
    "documents:read", "documents:write", "documents:delete",
    "announcements:read", "announcements:write",
    "settings:read", "settings:write",
    "reports:read", "reports:write",
    "audit:read",
    "ai:read",
  ],
  secretary: [
    "students:read", "students:write",
    "classes:read",
    "enrollments:read", "enrollments:write",
    "documents:read", "documents:write",
    "announcements:read",
    "ai:read",
  ],
  teacher: [
    "students:read",
    "classes:read",
    "grades:read", "grades:write",
    "attendance:read", "attendance:write",
    "announcements:read",
    "ai:read",
  ],
  accountant: [
    "students:read",
    "fees:read", "fees:write",
    "payments:read", "payments:write",
    "announcements:read",
    "ai:read",
  ],
  parent: [
    "students:read:own",
    "grades:read:own",
    "attendance:read:own",
    "payments:read:own",
    "documents:read:own",
    "announcements:read",
    "ai:read",
  ],
}

export const GRADE_TYPES = [
  { name: "devoir", label: "Devoir", coefficient: 1 },
  { name: "interrogation", label: "Interrogation", coefficient: 1 },
  { name: "examen", label: "Examen", coefficient: 2 },
  { name: "composition", label: "Composition", coefficient: 2 },
  { name: "controle_continu", label: "Contrôle Continu", coefficient: 1 },
]

export const PAYMENT_METHODS = [
  "espèces", "chèque", "virement", "mobile_money", "autre",
]

export const DAYS_OF_WEEK = [
  "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche",
]

export const STATUS_LABELS = {
  active: "Actif",
  inactive: "Inactif",
  pending: "En attente",
  accepted: "Accepté",
  rejected: "Rejeté",
  transferred: "Transféré",
  graduated: "Diplômé",
  archived: "Archivé",
}

export const SEX_LABELS = {
  male: "Masculin",
  female: "Féminin",
}
