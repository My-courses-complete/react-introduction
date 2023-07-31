import React from 'react'

type TodoCounterProps = {
	total: number
	completed: number
}

export default function TodoCounter({ total, completed }: TodoCounterProps) {
  return (
	<h2>Has completado {completed} de {total} TODOs</h2>
  )
}
