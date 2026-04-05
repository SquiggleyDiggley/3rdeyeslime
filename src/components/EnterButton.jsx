import React from 'react'
import Link from 'next/link'

export default function EnterButton({ href = '/home', children = 'Enter Site', className = '' }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`enter-btn ${className}`}
        role="button"
        aria-label={typeof children === 'string' ? children : 'Enter site'}
      >
        {children}
      </a>
    </Link>
  )
}
