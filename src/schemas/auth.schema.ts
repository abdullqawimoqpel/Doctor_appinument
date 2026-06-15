import { z } from 'zod';

/**
 * Domain validation schemas for authentication.
 */

export const SignInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const SignUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['patient', 'doctor', 'admin'], {
    message: 'Role must be patient, doctor, or admin',
  }),
  fullName: z.string().min(2, 'Full name must be at least 2 characters').max(100).optional(),
});

export const CreateServiceSchema = z.object({
  name: z.string().min(2, 'Service name must be at least 2 characters').max(100),
  duration_minutes: z.number().int().min(5, 'Minimum 5 minutes').max(480, 'Maximum 8 hours'),
  price: z.number().min(0, 'Price cannot be negative').max(100000),
});

export type SignInInput = z.infer<typeof SignInSchema>;
export type SignUpInput = z.infer<typeof SignUpSchema>;
export type CreateServiceInput = z.infer<typeof CreateServiceSchema>;
