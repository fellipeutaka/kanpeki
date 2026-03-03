/**
 * Multi-Step Form Example (Wizard)
 *
 * Demonstrates:
 * - Multi-step form with per-step validation
 * - Progress tracking
 * - Step navigation (next, previous)
 * - Partial schema validation
 * - Combined schema for final submission
 * - Preserving form state across steps
 */

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Step 1: Personal Information
const step1Schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
})

// Step 2: Address
const step2Schema = z.object({
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(2, 'State must be at least 2 characters'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
})

// Step 3: Account
const step3Schema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain uppercase letter')
    .regex(/[0-9]/, 'Password must contain number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

// Combined schema for final validation
const fullFormSchema = step1Schema.merge(step2Schema).merge(step3Schema)

type FormData = z.infer<typeof fullFormSchema>
type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>
type Step3Data = z.infer<typeof step3Schema>

const TOTAL_STEPS = 3

export function MultiStepRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)

  const form = useForm({
    resolver: zodResolver(fullFormSchema),
    mode: 'onChange', // Validate as user types
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  })

  // Navigate to next step
  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = []

    if (currentStep === 1) {
      fieldsToValidate = ['firstName', 'lastName', 'email', 'phone']
    } else if (currentStep === 2) {
      fieldsToValidate = ['street', 'city', 'state', 'zipCode']
    }

    // Trigger validation for current step fields
    const isValid = await form.trigger(fieldsToValidate)

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS))
    }
  }

  // Navigate to previous step
  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  // Final form submission
  const onSubmit = form.handleSubmit(async (data) => {
    console.log('Complete form data:', data)
    // Make API call
    alert('Form submitted successfully!')
  })

  // Calculate progress percentage
  const progressPercentage = (currentStep / TOTAL_STEPS) * 100

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep} of {TOTAL_STEPS}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {Math.round(progressPercentage)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between mt-4">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex items-center ${
                step < TOTAL_STEPS ? 'flex-1' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step < currentStep
                    ? 'bg-green-600 text-white'
                    : step === currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step < currentStep ? 'v' : step}
              </div>
              {step < TOTAL_STEPS && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step < currentStep ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Personal Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name *</label>
                <input
                  {...form.register('firstName')}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {form.formState.errors.firstName && (
                  <span className="text-sm text-red-600">{form.formState.errors.firstName.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Last Name *</label>
                <input
                  {...form.register('lastName')}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {form.formState.errors.lastName && (
                  <span className="text-sm text-red-600">{form.formState.errors.lastName.message}</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                {...form.register('email')}
                className="w-full px-3 py-2 border rounded-md"
              />
              {form.formState.errors.email && (
                <span className="text-sm text-red-600">{form.formState.errors.email.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone *</label>
              <input
                type="tel"
                {...form.register('phone')}
                placeholder="+1234567890"
                className="w-full px-3 py-2 border rounded-md"
              />
              {form.formState.errors.phone && (
                <span className="text-sm text-red-600">{form.formState.errors.phone.message}</span>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Address */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Address</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Street Address *</label>
              <input
                {...form.register('street')}
                className="w-full px-3 py-2 border rounded-md"
              />
              {form.formState.errors.street && (
                <span className="text-sm text-red-600">{form.formState.errors.street.message}</span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City *</label>
                <input
                  {...form.register('city')}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {form.formState.errors.city && (
                  <span className="text-sm text-red-600">{form.formState.errors.city.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">State *</label>
                <input
                  {...form.register('state')}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {form.formState.errors.state && (
                  <span className="text-sm text-red-600">{form.formState.errors.state.message}</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">ZIP Code *</label>
              <input
                {...form.register('zipCode')}
                placeholder="12345 or 12345-6789"
                className="w-full px-3 py-2 border rounded-md"
              />
              {form.formState.errors.zipCode && (
                <span className="text-sm text-red-600">{form.formState.errors.zipCode.message}</span>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Account */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Create Account</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Username *</label>
              <input
                {...form.register('username')}
                className="w-full px-3 py-2 border rounded-md"
              />
              {form.formState.errors.username && (
                <span className="text-sm text-red-600">{form.formState.errors.username.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password *</label>
              <input
                type="password"
                {...form.register('password')}
                className="w-full px-3 py-2 border rounded-md"
              />
              {form.formState.errors.password && (
                <span className="text-sm text-red-600">{form.formState.errors.password.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password *</label>
              <input
                type="password"
                {...form.register('confirmPassword')}
                className="w-full px-3 py-2 border rounded-md"
              />
              {form.formState.errors.confirmPassword && (
                <span className="text-sm text-red-600">{form.formState.errors.confirmPassword.message}</span>
              )}
            </div>

            {/* Summary */}
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium mb-2">Review Your Information:</h3>
              <div className="text-sm space-y-1">
                <p><strong>Name:</strong> {form.getValues('firstName')} {form.getValues('lastName')}</p>
                <p><strong>Email:</strong> {form.getValues('email')}</p>
                <p><strong>Phone:</strong> {form.getValues('phone')}</p>
                <p><strong>Address:</strong> {form.getValues('street')}, {form.getValues('city')}, {form.getValues('state')} {form.getValues('zipCode')}</p>
                <p><strong>Username:</strong> {form.getValues('username')}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-2 border rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {currentStep < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400"
            >
              {form.formState.isSubmitting ? 'Submitting...' : 'Complete Registration'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
