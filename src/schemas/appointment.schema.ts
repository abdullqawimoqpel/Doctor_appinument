import { z } from 'zod';

/**
 * Domain validation schemas for appointments.
 * Used in API routes AND services — single source of truth.
 */

export const CreateAppointmentSchema = z.object({
  doctorId: z.string().min(1, 'Doctor is required'),
  serviceId: z.string().optional(),
  appointmentDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
    .refine((d) => new Date(d) >= new Date(new Date().toISOString().split('T')[0]), {
      message: 'Appointment date cannot be in the past',
    }),
  startTime: z
    .string()
    .regex(/^\d{2}:\d{2}(:\d{2})?$/, 'Time must be in HH:MM format'),
});

export const CancelAppointmentSchema = z.object({
  appointmentId: z.string().uuid('Invalid appointment ID'),
  reason: z
    .string()
    .max(500, 'Reason must be under 500 characters')
    .optional(),
});

export const UpdateStatusSchema = z.object({
  status: z.enum(['pending', 'confirmed', 'completed', 'cancelled'], {
    message: 'Invalid status',
  }),
  cancellation_reason: z.string().max(500).optional(),
});

export type CreateAppointmentInput = z.infer<typeof CreateAppointmentSchema>;
export type CancelAppointmentInput = z.infer<typeof CancelAppointmentSchema>;
export type UpdateStatusInput = z.infer<typeof UpdateStatusSchema>;
