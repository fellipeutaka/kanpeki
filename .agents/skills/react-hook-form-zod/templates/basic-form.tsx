/**
 * Basic Form Example - Login/Signup Form
 *
 * Demonstrates:
 * - Simple form with email and password validation
 * - useForm hook with zodResolver
 * - Error display
 * - Type-safe form data with z.infer
 * - Accessible error messages
 */

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// 1. Define Zod validation schema
const loginSchema = z.object({
  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  rememberMe: z.boolean().optional(),
})

// 2. Infer TypeScript type from schema (for use in function signatures, props, etc.)
type LoginFormData = z.infer<typeof loginSchema>

export function BasicLoginForm() {
  // 3. Initialize form with zodResolver — no generic needed, zodResolver infers types
  const form = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  // 4. Extract handleSubmit as a variable
  const onSubmit = form.handleSubmit(async (data) => {
    try {
      console.log('Form data:', data)

      // Make API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const result = await response.json()
      console.log('Login successful:', result)

      // Reset form after successful submission
      form.reset()
    } catch (error) {
      console.error('Login error:', error)
    }
  })

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Login</h2>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...form.register('email')}
          aria-invalid={form.formState.errors.email ? 'true' : 'false'}
          aria-describedby={form.formState.errors.email ? 'email-error' : undefined}
          className={`w-full px-3 py-2 border rounded-md ${
            form.formState.errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="you@example.com"
        />
        {form.formState.errors.email && (
          <span
            id="email-error"
            role="alert"
            className="text-sm text-red-600 mt-1 block"
          >
            {form.formState.errors.email.message}
          </span>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...form.register('password')}
          aria-invalid={form.formState.errors.password ? 'true' : 'false'}
          aria-describedby={form.formState.errors.password ? 'password-error' : undefined}
          className={`w-full px-3 py-2 border rounded-md ${
            form.formState.errors.password ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="••••••••"
        />
        {form.formState.errors.password && (
          <span
            id="password-error"
            role="alert"
            className="text-sm text-red-600 mt-1 block"
          >
            {form.formState.errors.password.message}
          </span>
        )}
      </div>

      {/* Remember Me Checkbox */}
      <div className="flex items-center">
        <input
          id="rememberMe"
          type="checkbox"
          {...form.register('rememberMe')}
          className="h-4 w-4 rounded"
        />
        <label htmlFor="rememberMe" className="ml-2 text-sm">
          Remember me
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {form.formState.isSubmitting ? 'Logging in...' : 'Login'}
      </button>

      {/* Form Status */}
      <div className="text-sm text-gray-600">
        {form.formState.isValid && !form.formState.isSubmitting && (
          <span className="text-green-600">Form is valid</span>
        )}
      </div>
    </form>
  )
}

/**
 * Signup Form Variant
 */
const signupSchema = loginSchema.extend({
  confirmPassword: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

type SignupFormData = z.infer<typeof signupSchema>

export function BasicSignupForm() {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
    },
  })

  const onSubmit = form.handleSubmit(async (data) => {
    console.log('Signup data:', data)
    // API call
  })

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Sign Up</h2>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <input
          id="name"
          {...form.register('name')}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="John Doe"
        />
        {form.formState.errors.name && (
          <span role="alert" className="text-sm text-red-600 mt-1 block">
            {form.formState.errors.name.message}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...form.register('email')}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="you@example.com"
        />
        {form.formState.errors.email && (
          <span role="alert" className="text-sm text-red-600 mt-1 block">
            {form.formState.errors.email.message}
          </span>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...form.register('password')}
          className="w-full px-3 py-2 border rounded-md"
        />
        {form.formState.errors.password && (
          <span role="alert" className="text-sm text-red-600 mt-1 block">
            {form.formState.errors.password.message}
          </span>
        )}
      </div>

      {/* Confirm Password Field */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...form.register('confirmPassword')}
          className="w-full px-3 py-2 border rounded-md"
        />
        {form.formState.errors.confirmPassword && (
          <span role="alert" className="text-sm text-red-600 mt-1 block">
            {form.formState.errors.confirmPassword.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
      >
        {form.formState.isSubmitting ? 'Creating account...' : 'Sign Up'}
      </button>
    </form>
  )
}
