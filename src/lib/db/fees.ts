export async function getFees(academicYearId?: string) { return [] }
export async function createFee(data: any) { return data }
export async function getPayments(studentId?: string) { return [] }
export async function createPayment(data: any) { return data }
export async function getUnpaidFees(studentId: string, academicYearId: string) { return { totalFees: 0, totalPaid: 0, unpaid: [], totalAmount: 0, paidAmount: 0 } }
