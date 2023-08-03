interface Todo {
	text: string;
	completed: boolean;
}

declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}


type TodoContextProps = {
	children: React.ReactNode;
};

type TodoContext = {
	loading: boolean;
	error: boolean;
	totalTodos: number;
	completedTodos: number;
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	searchedTodos: Array<Todo>;
	completeTodo: (index: number) => void;
	deleteTodo: (index: number) => void;
};