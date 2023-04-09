## Componente FollowMouse
El componente FollowMouse es un componente de React que permite que un elemento siga el cursor del ratón en la pantalla. Tiene las siguientes características:

- Utiliza los hooks useEffect y useState de React para manejar el estado y los efectos secundarios.
- Rastrea la posición del cursor del ratón utilizando el evento window.addEventListener('pointermove', handleMove).
- Actualiza la posición del elemento en la pantalla basándose en la posición actual del cursor del ratón.
- Alterna la clase CSS no-cursor en el elemento body para ocultar el cursor cuando el componente está habilitado.
- Tiene un botón para activar o desactivar el estado del componente.
