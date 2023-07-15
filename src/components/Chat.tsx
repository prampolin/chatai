'use client'

import { useChat } from 'ai/react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from './ui/scroll-area'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/chat',
  })
  return (
    <Card className="w-full h-screen rounded-none shadow-xl grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat Ai</CardTitle>
        <CardDescription>Using Vercel SDK to create chat bot.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea>
          {messages.map((message) => {
            return (
              <div
                className="flex gap-3 text-sm text-slate-600"
                key={message.id}
              >
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>DF</AvatarFallback>
                    <AvatarImage src="https://github.com/prampolin.png"></AvatarImage>
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>DF</AvatarFallback>
                    <AvatarImage src="https://github.com/adekz.png"></AvatarImage>
                  </Avatar>
                )}
                <pre className="mt-3">{message.content}</pre>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
