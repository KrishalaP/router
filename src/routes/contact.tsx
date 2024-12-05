import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import HelloContact from '../hello'

export const Route = createFileRoute('/contact')({
  component: HelloContact,
})
