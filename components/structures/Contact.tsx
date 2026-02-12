"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  roomType: z.string().min(1, "Room type is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      roomType: "",
      message: "",
    },
  })


async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const data = {
      
      ...values,
      entryUrl: window.location.href,
      referral: document.referrer,
      source: new URLSearchParams(window.location.search).get("source"),
    }

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await res.json()

    if (result.success) {
      setSubmitted(true)
      form.reset()

      setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    } else {
      alert("Something went wrong")
    }

  } catch (error) {
    console.error(error)
    alert("Error submitting form")
  }
}

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-100 to-yellow-50">
      <div className="max-w-2xl mx-auto px-4 text-center">

        {/* Badge  here */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow mb-6">
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          <span className="text-sm font-medium text-gray-700">
            Get in touch
          </span>
        </div>

        {/* Heading  h2 here*/}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Let's Start a Conversation
        </h2>

        <p className="text-gray-600 mb-8">
          Have a question or ready to take the next step? We'd love to hear from you.
        </p>

        {/* Success Message  Sent here*/}
        {submitted && (
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-3 rounded-lg mb-6 shadow">
            <CheckCircle className="w-5 h-5" />
            Your message has been sent successfully!
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-left">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>

              {/* Room Type  here*/}
              <FormField
                control={form.control}
                name="roomType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room type *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 2 bedrooms" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message *</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="How can we help you?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button Here */}
              <Button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-6 text-base rounded-xl"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>

            </form>
          </Form>

        </div>
      </div>
    </section>
  )
}
