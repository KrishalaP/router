import * as React from 'react'
import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$blogId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {blogId} = Route.useParams()
  console.log(blogId)
  return <div>Hello "/blog/$blogId/"!</div>
  // kashak
}
