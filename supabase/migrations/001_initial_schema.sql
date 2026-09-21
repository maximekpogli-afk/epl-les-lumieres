-- ============================================
-- EPL LES LUMIÈRES - Base de données
-- Migration initiale
-- ============================================

-- Types et Enum
CREATE TYPE user_role AS ENUM ('super_admin', 'admin', 'secretary', 'teacher', 'accountant', 'parent');
CREATE TYPE student_status AS ENUM ('active', 'inactive', 'transferred', 'graduated', 'archived');
CREATE TYPE attendance_status AS ENUM ('present', 'absent', 'late', 'justified_absent');
CREATE TYPE enrollment_status AS ENUM ('pending', 'accepted', 'rejected', 'transferred');
CREATE TYPE fee_type AS ENUM ('registration', 'tuition', 'canteen', 'transport', 'uniform', 'activities', 'other');
CREATE TYPE academic_year_status AS ENUM ('active', 'closed', 'archived');
CREATE TYPE payment_method AS ENUM ('espèces', 'chèque', 'virement', 'mobile_money', 'autre');

-- ============================================
-- TABLE: profiles
-- ============================================
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  role user_role NOT NULL DEFAULT 'parent',
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  address TEXT,
  avatar_url TEXT,
  academic_year_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Super admin can read all profiles" ON profiles
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'super_admin'));

-- ============================================
-- TABLE: academic_years
-- ============================================
CREATE TABLE academic_years (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) NOT NULL,
  label VARCHAR(50) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status academic_year_status NOT NULL DEFAULT 'active',
  is_current BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE academic_years ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read academic years" ON academic_years
  FOR SELECT USING (true);

CREATE POLICY "Admin can manage academic years" ON academic_years
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('super_admin', 'admin')));

-- ============================================
-- TABLE: levels
-- ============================================
CREATE TABLE levels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  academic_year_id UUID REFERENCES academic_years(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE levels ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read levels" ON levels
  FOR SELECT USING (true);

CREATE POLICY "Admin can manage levels" ON levels
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('super_admin', 'admin')));

-- ============================================
-- TABLE: classes
-- ============================================
CREATE TABLE classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) NOT NULL,
  level_id UUID REFERENCES levels(id) ON DELETE SET NULL,
  academic_year_id UUID REFERENCES academic_years(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  capacity INTEGER DEFAULT 30,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE classes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read classes" ON classes
  FOR SELECT USING (true);

CREATE POLICY "Admin can manage classes" ON classes
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('super_admin', 'admin')));

-- ============================================
-- TABLE: subjects
-- ============================================
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  code VARCHAR(20) UNIQUE NOT NULL,
  coefficient DECIMAL(3,1) DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read subjects" ON subjects
  FOR SELECT USING (true);

CREATE POLICY "Admin can manage subjects" ON subjects
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('super_admin', 'admin')));

-- ============================================
-- TABLE: class_subjects
-- ============================================
CREATE TABLE class_subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  academic_year_id UUID REFERENCES academic_years(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(class_id, subject_id, academic_year_id)
);

ALTER TABLE class_subjects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read class subjects" ON class_subjects
  FOR SELECT USING (true);

CREATE POLICY "Admin can manage class subjects" ON class_subjects
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('super_admin', 'admin')));

-- ============================================
-- TABLE: students
-- ============================================
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  matricule VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  sex VARCHAR(10) CHECK (sex IN ('male', 'female')) NOT NULL,
  date_of_birth DATE,
  place_of_birth VARCHAR(100),
  nationality VARCHAR(100),
  address TEXT,
  phone VARCHAR(20),
  email VARCHAR(255),
  class_id UUID REFERENCES classes(id) ON DELETE SET NULL,
  academic_year_id UUID REFERENCES academic_years(id) ON DELETE SET NULL,
  enrollment_date DATE DEFAULT NOW(),
  status student_status DEFAULT 'active',
  parent_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE students ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can read own" ON students
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'parent' AND p.id = students.parent_id));

CREATE POLICY "Teachers can read own classes" ON students
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'teacher' AND students.class_id IN (SELECT c.id FROM classes c WHERE c.teacher_id = p.id)));

CREATE POLICY "Admin/Secretary can read all students" ON students
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'secretary')));

CREATE POLICY "Admin/Secretary can insert students" ON students
  FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'secretary')));

CREATE POLICY "Admin/Secretary can update students" ON students
  FOR UPDATE USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'secretary')));

-- ============================================
-- TABLE: parents
-- ============================================
CREATE TABLE parents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  profession VARCHAR(100),
  address TEXT,
  relationship VARCHAR(50) DEFAULT 'parent',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE parents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Parents can read own" ON parents
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'parent' AND p.id = parents.id));

CREATE POLICY "Admin/Secretary can manage parents" ON parents
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'secretary')));

-- ============================================
-- TABLE: student_parents
-- ============================================
CREATE TABLE student_parents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  is_primary BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, parent_id)
);

ALTER TABLE student_parents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Parents can read own links" ON student_parents
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'parent' AND p.id = student_parents.parent_id));

-- ============================================
-- TABLE: teachers
-- ============================================
CREATE TABLE teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  matricule VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  address TEXT,
  subject_ids UUID[],
  class_ids UUID[],
  status VARCHAR(20) CHECK (status IN ('active', 'inactive')) DEFAULT 'active',
  hire_date DATE,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Teachers can read own data" ON teachers
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'teacher' AND teachers.id = p.id));

CREATE POLICY "Admin/Secretary can manage teachers" ON teachers
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'secretary')));

-- ============================================
-- TABLE: enrollments
-- ============================================
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  class_id UUID REFERENCES classes(id) ON DELETE SET NULL,
  academic_year_id UUID REFERENCES academic_years(id) ON DELETE CASCADE,
  enrollment_date DATE DEFAULT NOW(),
  status enrollment_status DEFAULT 'pending',
  documents TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin/Secretary can manage enrollments" ON enrollments
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'secretary')));

-- ============================================
-- TABLE: grade_types
-- ============================================
CREATE TABLE grade_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) UNIQUE NOT NULL,
  label VARCHAR(50) NOT NULL,
  coefficient DECIMAL(3,1) DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE grade_types ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read grade types" ON grade_types
  FOR SELECT USING (true);

CREATE POLICY "Admin can manage grade types" ON grade_types
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin')));

-- ============================================
-- TABLE: grades
-- ============================================
CREATE TABLE grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  grade_type_id UUID REFERENCES grade_types(id) ON DELETE SET NULL,
  value DECIMAL(5,2) CHECK (value >= 0 AND value <= 20),
  period VARCHAR(50),
  comment TEXT,
  teacher_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, subject_id, grade_type_id, period)
);

ALTER TABLE grades ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can read own grades" ON grades
  FOR SELECT USING (EXISTS (SELECT 1 FROM student_parents sp JOIN profiles p ON p.id = sp.parent_id WHERE p.id = auth.uid() AND sp.student_id = grades.student_id));

CREATE POLICY "Teachers can read/write own grades" ON grades
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'teacher' AND grades.teacher_id = p.id));

CREATE POLICY "Admin/Secretary can read all grades" ON grades
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'secretary')));

CREATE POLICY "Admin/Teacher can insert grades" ON grades
  FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'teacher', 'secretary')));

CREATE POLICY "Admin/Teacher can update grades" ON grades
  FOR UPDATE USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'teacher', 'secretary')));

-- ============================================
-- TABLE: attendance
-- ============================================
CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status attendance_status NOT NULL,
  teacher_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Teachers can read/write own class attendance" ON attendance
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'teacher' AND attendance.class_id IN (SELECT c.id FROM classes c WHERE c.teacher_id = p.id)));

CREATE POLICY "Admin/Secretary can read all attendance" ON attendance
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'secretary')));

-- ============================================
-- TABLE: fees
-- ============================================
CREATE TABLE fees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  type fee_type NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  academic_year_id UUID REFERENCES academic_years(id) ON DELETE CASCADE,
  class_id UUID REFERENCES classes(id) ON DELETE SET NULL,
  is_mandatory BOOLEAN DEFAULT true,
  due_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE fees ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin/Accountant can manage fees" ON fees
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'accountant')));

CREATE POLICY "Everyone can read fees" ON fees
  FOR SELECT USING (true);

-- ============================================
-- TABLE: payments
-- ============================================
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  fee_id UUID REFERENCES fees(id) ON DELETE SET NULL,
  amount DECIMAL(10,2) NOT NULL,
  payment_date DATE NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  reference VARCHAR(100) NOT NULL,
  recorded_by UUID REFERENCES profiles(id),
  receipt_number VARCHAR(50),
  academic_year_id UUID REFERENCES academic_years(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students/parents can read own payments" ON payments
  FOR SELECT USING (EXISTS (SELECT 1 FROM students s JOIN profiles p ON p.id = s.parent_id WHERE p.id = auth.uid() AND s.id = payments.student_id));

CREATE POLICY "Admin/Accountant can manage payments" ON payments
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'accountant')));

-- ============================================
-- TABLE: announcements
-- ============================================
CREATE TABLE announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES profiles(id),
  audience VARCHAR(50) DEFAULT 'all',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  is_published BOOLEAN DEFAULT false
);

ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read published announcements" ON announcements
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admin can manage announcements" ON announcements
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin')));

-- ============================================
-- TABLE: notifications
-- ============================================
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  type VARCHAR(20) DEFAULT 'info',
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE notifications ENABLE ROW Level Security;

CREATE POLICY "Users can read own notifications" ON notifications
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications" ON notifications
  FOR UPDATE USING (auth.uid() = user_id);

-- ============================================
-- TABLE: audit_logs
-- ============================================
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  action VARCHAR(50) NOT NULL,
  entity_type VARCHAR(50) NOT NULL,
  entity_id UUID,
  details JSONB,
  ip_address INET,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin/Super admin can read audit logs" ON audit_logs
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin')));

-- ============================================
-- TABLE: schedules
-- ============================================
CREATE TABLE schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  day_of_week INTEGER CHECK (day_of_week BETWEEN 0 AND 6),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  room_id VARCHAR(50),
  academic_year_id UUID REFERENCES academic_years(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE schedules ENABLE ROW Level Security;

CREATE POLICY "Everyone can read schedules" ON schedules
  FOR SELECT USING (true);

CREATE POLICY "Admin can manage schedules" ON schedules
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin')));

-- ============================================
-- TABLE: documents
-- ============================================
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(200) NOT NULL,
  type VARCHAR(50) NOT NULL,
  file_url TEXT NOT NULL,
  student_id UUID REFERENCES students(id) ON DELETE SET NULL,
  teacher_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  generated_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE documents ENABLE ROW Level Security;

CREATE POLICY "Students/parents can read own documents" ON documents
  FOR SELECT USING (EXISTS (SELECT 1 FROM students s JOIN profiles p ON p.id = s.parent_id WHERE p.id = auth.uid() AND s.id = documents.student_id));

CREATE POLICY "Admin/Secretary can manage documents" ON documents
  FOR ALL USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role IN ('super_admin', 'admin', 'secretary')));

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX idx_students_matricule ON students(matricule);
CREATE INDEX idx_students_class_id ON students(class_id);
CREATE INDEX idx_students_status ON students(status);
CREATE INDEX idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX idx_enrollments_class_id ON enrollments(class_id);
CREATE INDEX idx_grades_student_id ON grades(student_id);
CREATE INDEX idx_grades_subject_id ON grades(subject_id);
CREATE INDEX idx_attendance_class_date ON attendance(class_id, date);
CREATE INDEX idx_attendance_student_date ON attendance(student_id, date);
CREATE INDEX idx_payments_student_id ON payments(student_id);
CREATE INDEX idx_payments_fee_id ON payments(fee_id);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(user_id, is_read);
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_academic_years_current ON academic_years(is_current);

-- ============================================
-- FUNCTIONS
-- ============================================
CREATE OR REPLACE FUNCTION calculate_student_average(p_student_id UUID)
RETURNS TABLE (average DECIMAL(5,2), subject_averages JSONB) AS $$
DECLARE
  total_avg DECIMAL(5,2) := 0;
  total_weight DECIMAL(5,2) := 0;
  result JSONB := '{}'::JSONB;
  subject_rec RECORD;
  subject_avg DECIMAL(5,2);
  subject_total DECIMAL(5,2) := 0;
  subject_weight DECIMAL(5,2) := 0;
BEGIN
  FOR subject_rec IN
    SELECT s.id, s.name, gt.coefficient
    FROM grades g
    JOIN subjects s ON s.id = g.subject_id
    JOIN grade_types gt ON gt.id = g.grade_type_id
    WHERE g.student_id = p_student_id
    GROUP BY s.id, s.name, gt.coefficient
  LOOP
    SELECT COALESCE(AVG(g.value * gt.coefficient), 0) / NULLIF(COALESCE(SUM(gt.coefficient), 0), 0),
           COALESCE(SUM(gt.coefficient), 0)
    INTO subject_avg, subject_weight
    FROM grades g
    JOIN grade_types gt ON gt.id = g.grade_type_id
    WHERE g.student_id = p_student_id AND g.subject_id = subject_rec.id;

    result := result || jsonb_build_object(subject_rec.name, subject_avg);
    total_avg := total_avg + subject_avg * subject_weight;
    total_weight := total_weight + subject_weight;
  END LOOP;

  IF total_weight > 0 THEN
    total_avg := total_avg / total_weight;
  END IF;

  RETURN QUERY SELECT total_avg, result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- AUTO-GENERATE MATRICULE FUNCTION
-- ============================================
CREATE OR REPLACE FUNCTION generate_student_matricule()
RETURNS TRIGGER AS $$
DECLARE
  year_str VARCHAR(4);
  seq_num INTEGER;
BEGIN
  year_str := EXTRACT(YEAR FROM NOW())::VARCHAR;
  SELECT COALESCE(MAX(CAST(SPLIT_PART(matricule, '-', 2) AS INTEGER)), 0) + 1
  INTO seq_num
  FROM students
  WHERE matricule LIKE year_str || '-%';

  NEW.matricule := year_str || '-' || LPAD(seq_num::VARCHAR, 4, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trg_generate_matricule
  BEFORE INSERT ON students
  FOR EACH ROW
  EXECUTE FUNCTION generate_student_matricule();

-- ============================================
-- DEMO DATA
-- ============================================
INSERT INTO academic_years (name, label, start_date, end_date, status, is_current) VALUES
('2025-2026', '2025-2026', '2025-09-01', '2026-06-30', 'active', true),
('2024-2025', '2024-2025', '2024-09-01', '2025-06-30', 'closed', false),
('2026-2027', '2026-2027', '2026-09-01', '2027-06-30', 'archived', false);

INSERT INTO levels (name, academic_year_id) VALUES
('Maternelle Petite Section', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Maternelle Moyenne Section', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Maternelle Grande Section', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Primaire CP', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Primaire CE1', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Primaire CE2', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Primaire CM1', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Primaire CM2', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Collège 6ème', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Collège 5ème', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Collège 4ème', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Collège 3ème', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Lycée Seconde', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Lycée Première', (SELECT id FROM academic_years WHERE name = '2025-2026')),
('Lycée Terminale', (SELECT id FROM academic_years WHERE name = '2025-2026'));

INSERT INTO grade_types (name, label, coefficient) VALUES
('devoir', 'Devoir', 1),
('interrogation', 'Interrogation', 1),
('examen', 'Examen', 2),
('composition', 'Composition', 2),
('controle_continu', 'Contrôle Continu', 1);

-- Create default admin user (password: admin123)
INSERT INTO profiles (id, email, role, first_name, last_name, phone)
VALUES ('00000000-0000-0000-0000-000000000001', 'admin@epl-lumieres.local', 'super_admin', 'Administrateur', 'Système', '+22800000000');

-- Create sample teachers
INSERT INTO profiles (id, email, role, first_name, last_name, phone) VALUES
('00000000-0000-0000-0000-000000000002', 'teacher1@epl-lumieres.local', 'teacher', 'Jean', 'Dupont', '+22800000001'),
('00000000-0000-0000-0000-000000000003', 'teacher2@epl-lumieres.local', 'teacher', 'Marie', 'Kouassi', '+22800000002');

-- Create sample secretary
INSERT INTO profiles (id, email, role, first_name, last_name, phone) VALUES
('00000000-0000-0000-0000-000000000004', 'secretary@epl-lumieres.local', 'secretary', 'Fatou', 'Diop', '+22800000003');

-- Create sample accountant
INSERT INTO profiles (id, email, role, first_name, last_name, phone) VALUES
('00000000-0000-0000-0000-000000000005', 'accountant@epl-lumieres.local', 'accountant', 'Martin', 'Ahounon', '+22800000004');
