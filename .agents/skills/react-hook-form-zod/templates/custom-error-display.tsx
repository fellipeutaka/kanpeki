/**
 * Custom Error Display Example
 *
 * Demonstrates:
 * - Custom error component
 * - Error summary at top of form
 * - Toast notifications for errors
 * - Inline vs summary error display
 * - Accessible error announcements
 * - Icon-based error styling
 */

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useEffect, useState } from 'react'

const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  age: z.number().min(18, 'You must be at least 18 years old'),
})

type FormData = z.infer<typeof formSchema>

/**
 * Custom Error Component
 */
function FormError({ message, icon = true }: { message: string; icon?: boolean }) {
  return (
    <div role="alert" className="flex items-start gap-2 text-sm text-red-600 mt-1">
      {icon && (
        <svg className="w-4 h-4 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span>{message}</span>
    </div>
  )
}

/**
 * Error Summary Component
 */
function ErrorSummary({ errors }: { errors: Record<string, any> }) {
  const errorEntries = Object.entries(errors).filter(([key, value]) => value?.message)

  if (errorEntries.length === 0) return null

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
    >
      <div className="flex items-center gap-2 mb-2">
        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="font-medium text-red-900">
          {errorEntries.length} {errorEntries.length === 1 ? 'Error' : 'Errors'} Found
        </h3>
      </div>
      <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
        {errorEntries.map(([field, error]) => (
          <li key={field}>
            <strong className="capitalize">{field}:</strong> {error.message}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Toast Notification for Errors
 */
function ErrorToast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-4 right-4 bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-start gap-3 max-w-sm animate-slide-in">
      <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
      <div className="flex-1">
        <h4 className="font-medium">Validation Error</h4>
        <p className="text-sm mt-1">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-white hover:text-gray-200"
        aria-label="Close notification"
      >
        x
      </button>
    </div>
  )
}

/**
 * Form with Custom Error Display
 */
export function CustomErrorDisplayForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      age: 18,
    },
  })

  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const onSubmit = form.handleSubmit(
    async (data) => {
      console.log('Form data:', data)
      setToastMessage('Form submitted successfully!')
    },
    (errors) => {
      // Show toast on validation error
      const errorCount = Object.keys(errors).length
      setToastMessage(`Please fix ${errorCount} error${errorCount > 1 ? 's' : ''} before submitting`)
    },
  )

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={onSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold">Registration Form</h2>

        {/* Error Summary */}
        <ErrorSummary errors={form.formState.errors} />

        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Username *
          </label>
          <input
            id="username"
            {...form.register('username')}
            aria-invalid={form.formState.errors.username ? 'true' : 'false'}
            aria-describedby={form.formState.errors.username ? 'username-error' : undefined}
            className={`w-full px-3 py-2 border rounded-md ${
              form.formState.errors.username ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
          />
          {form.formState.errors.username && (
            <FormError message={form.formState.errors.username.message!} />
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...form.register('email')}
            aria-invalid={form.formState.errors.email ? 'true' : 'false'}
            className={`w-full px-3 py-2 border rounded-md ${
              form.formState.errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {form.formState.errors.email && (
            <FormError message={form.formState.errors.email.message!} />
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password *
          </label>
          <input
            id="password"
            type="password"
            {...form.register('password')}
            aria-invalid={form.formState.errors.password ? 'true' : 'false'}
            className={`w-full px-3 py-2 border rounded-md ${
              form.formState.errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {form.formState.errors.password && (
            <FormError message={form.formState.errors.password.message!} />
          )}
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-1">
            Age *
          </label>
          <input
            id="age"
            type="number"
            {...form.register('age', { valueAsNumber: true })}
            aria-invalid={form.formState.errors.age ? 'true' : 'false'}
            className={`w-full px-3 py-2 border rounded-md ${
              form.formState.errors.age ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {form.formState.errors.age && (
            <FormError message={form.formState.errors.age.message!} />
          )}
        </div>

        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* Toast Notification */}
      {toastMessage && (
        <ErrorToast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

/**
 * Alternative: Grouped Error Display
 */
export function GroupedErrorDisplayForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = form.handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Grouped Error Display</h2>

      {/* All errors in single container */}
      {Object.keys(form.formState.errors).length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-600 p-4">
          <h3 className="font-medium text-red-900 mb-2">Please correct the following:</h3>
          <div className="space-y-2">
            {Object.entries(form.formState.errors).map(([field, error]) => (
              <div key={field} className="flex items-start gap-2 text-sm text-red-700">
                <span className="font-medium capitalize">{field}:</span>
                <span>{error.message}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Form fields without individual error messages */}
      <input {...form.register('username')} placeholder="Username" className="w-full px-3 py-2 border rounded" />
      <input {...form.register('email')} placeholder="Email" className="w-full px-3 py-2 border rounded" />
      <input {...form.register('password')} type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
      <input {...form.register('age', { valueAsNumber: true })} type="number" placeholder="Age" className="w-full px-3 py-2 border rounded" />

      <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  )
}
