"use server"

import { z } from "zod"

// Define a schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(1, "Message cannot be empty."),
})

export async function sendContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Validate form data
  const validation = contactFormSchema.safeParse({ name, email, message })

  if (!validation.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validation.error.flatten().fieldErrors,
    }
  }

  // In a real application, you would send the email here using a service like Nodemailer, SendGrid, etc.
  // For this demonstration, we'll just log the data to the server console.
  console.log("--- Simulating Email Send ---")
  console.log(`From: ${validation.data.name} <${validation.data.email}>`)
  console.log(`Subject: New Contact Form Submission`)
  console.log(`Message: ${validation.data.message}`)
  console.log("-----------------------------")

  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return {
    success: true,
    message: "Your message has been sent successfully!",
  }
}
