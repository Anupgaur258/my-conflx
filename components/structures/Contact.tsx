"use client"

import { useState, useEffect } from "react"
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
  name: z.string().min(2),
  email: z.string().email(),
  roomType: z.string().min(1),
  message: z.string().min(10),
})

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [source, setSource] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      roomType: "",
      message: "",
    },
  })

  // Capture UTM once and store in cookie
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const utm = params.get("utm_source")

    if (utm) {
      document.cookie = `utm_source=${utm}; path=/`
      setSource(utm)
    } else {
      const match = document.cookie.match(/(^| )utm_source=([^;]+)/)
      if (match) {
        setSource(match[2])
      }
    }
  }, [])

  const onSubmit = async (data: any) => {
    const entryUrl = window.location.href
    const referral = document.referrer || ""

    let finalSource = source

    if (!finalSource) {
      if (referral) {
        try {
          finalSource = new URL(referral).hostname
        } catch {
          finalSource = "Direct"
        }
      } else {
        finalSource = "Direct"
      }
    }

    await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        entryUrl,
        referral,
        source: finalSource,
      }),
    })

    setSubmitted(true)
    form.reset()
  }

  return (
    <section className="py-20 bg-radial from-blue-50 from-14% to-yellow-100 ">
      <div className="max-w-2xl mx-auto px-4 text-center">

        {submitted && (
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-3 rounded-lg mb-6 shadow">
            <CheckCircle className="w-5 h-5" />
            Your message has been sent successfully!
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8 text-left">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

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

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message *</FormLabel>
                    <FormControl>
                      <Textarea rows={4} placeholder="How can we help you?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
