import React from 'react'

export default function TodoList(props: { children: React.ReactNode }) {
  return (
	<ul>
		{props.children}
	</ul>
  )
}
