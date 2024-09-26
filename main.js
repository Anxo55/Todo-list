import './style.css'
// Seleccionamos los elementos HTML
const newTaskInput = document.querySelector('#new-task');
const addTaskButton = document.querySelector('#add-task-btn');
const tasksList = document.querySelector('#tasks-list');

// Función para agregar una nueva tarea
function addTask() {
  const taskText = newTaskInput.value.trim();

  if (taskText === '') return;

  // Crear un nuevo elemento 'li'
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Botón para eliminar la tarea
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.addEventListener('click', () => {
    taskItem.remove();
  });

  // Hacer clic para marcar como completada
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Agregar el botón de eliminar a la tarea
  taskItem.appendChild(deleteButton);

  // Agregar la tarea a la lista
  tasksList.appendChild(taskItem);

  // Limpiar el input
  newTaskInput.value = '';
}

// Evento para el botón "Agregar"
addTaskButton.addEventListener('click', addTask);

// Permitir agregar tareas con la tecla 'Enter'
newTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});