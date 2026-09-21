export async function getStudents() { return [] }
export async function getStudentById(id: string) { return null }
export async function createStudent(data: any) { return data }
export async function updateStudent(id: string, data: any) { return data }
export async function deleteStudent(id: string) { return true }
export async function getEnrollments(studentId?: string) { return [] }
export async function generateMatricule() { return "0000-0001" }
