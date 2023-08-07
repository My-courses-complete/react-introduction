import './TodoForm.css'

export default function index() {
  return (
    <form onSubmit={(event) => {
		event.preventDefault();
	}}>
      <label htmlFor="">Escribe un nuevo TODO</label>
      <textarea placeholder="Cortar la cebolla para el almuerzo" />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel" 
		>Cancelar</button>
        <button type="submit" className="TodoForm-button TodoForm-button--add"
		>Añadir</button>
      </div>
    </form>
  );
}
