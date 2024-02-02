'use client'
import { useEffect } from 'react'
import Link from 'next/link'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <h2>Algo deu errado</h2>
      <div>
        <Link href="/">Voltar para página de HOME</Link>
      </div>
    </div>
  )
}

export default Error
