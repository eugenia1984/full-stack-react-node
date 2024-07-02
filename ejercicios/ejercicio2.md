# Segundo ejercicio: 

## A partir del formulario elaborado para la tarea 1, se pide:

### 1 - Detallar los pasos que realizan para poder cargar el mismo.

1. **Abrir la página web**: ingresar en la página donde está el [formulario - https://eugenia1984.github.io/full-stack-react-node/ejercicio3/index.html](https://eugenia1984.github.io/full-stack-react-node/ejercicio3/index.html)

2. **Rellenar los campos - completar formulario**:

-En el primer "input" - "Nombre" se completa con el nombre

-En el segundo "input" - "Apellido" se completa con el apellido

-En el tercer "input" - "Correo electronico" se completa con el correo electronico.

-En el cuarto "input" - "Fecha de nacimiento" se completa con la fecha de nacimiento

-En el quinto "input" - "Pais de residencia" se completa con el pais de residencia

Si no están completos todos los campos, no se puede enviar el formulario, y si no están validados tampoco.

3. **Enviar el formulario**: haciendo click en el botón enviar.

### 2 - Indicar para cada campo cuales son los valores válidos y cuales inválidos. ¿Se realiza esa validación de alguna forma?

- Todos los campos son **obligatorios** porque tienen el atributo **required**.

1. En el "input" - "Nombre" se permite ingresar de 2 hasta 60 caracteres, es obligatorio, no puede estar vacío.

2. En el "input" - "Apellido" se permite ingresar de 2 hasta 60 caracteres, es obligatorio, no puede estar vacío.

3. En el "input" - "Correo electronico" se permite ingresa un correo que tenga el nombre del correo, el "@", luego el dominio, a continuación el "." y luego entre 2 a 4 caracteres. Es obligatorio, no puede estar vacío.

4. En el "input" - "Fecha de nacimiento" se permite ingresar una fecha de nacimiento que esté estre el 1ro de Enero de 1911 hasta el día en que se completa el formulario. Es obligatorio, no puede estar vacío.

6. En el "input" - "Pais de residencia" se permite ingresar de 2 hasta 60 caracteres, es obligatorio, no puede estar vacío.

Si no están completos todos los campos, no se puede enviar el formulario, y si no están validados tampoco.


### 3 - Realizar una exploración del formulario y verificar si mediante el lector de pantalla NVDA pueden acceder a cada campo mediante la tecla TAB y completa el mismo. ¿Hay algún campo o acción que no resulte accesible?


Se puede ir de input en input por medio de la tecla tab.

1. **Abrir el [formulario - https://eugenia1984.github.io/full-stack-react-node/ejercicio3/index.html](https://eugenia1984.github.io/full-stack-react-node/ejercicio3/index.html)**: para poder ver el formulario.

2. **Comenzar con NVDA**: activar el lector de pantalla NVDA / Screen Reader.

3. **Navegar el formulario**: con la tecla `TAB` para navegar por los elementos del formulario (de in input hacia otro input, porque el formulario tiene id y form en las etiquetas `label`e `input`para relacionarlas). 


---