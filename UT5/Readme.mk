# Que es React 
React es una libreria de JavaScript para crear interfacez de usuarios (UI), nos permite que la página web se sienta más como una app. Se puede realizar lo mismo con JS pero React lo hace más fácil y rápido. Este tiene un enfoque declativo.
## Creacion de proyecto 
Vamos utilizar [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) para la creacion de proyetos, podemos  usar este comando desde una cmd 
````
bun create vite my-vue-app --template vue
````
https://vitejs.dev/guide/
## Temas para la prueba, conceptos de React
### Componentes 
Son el bloque básico de react, estos forman partes de la UI, se los arma como funciones que retornan JSX lo que nos permite que pongamos HTML directo en nuestro JS, las partes interactivos del JSX se les pone entre `{prop}` y se les hace referencia a través de prop, en el componente padre que lo utiliza, ejemplo 
```
Uso:
<>
	<ComponenteEjemplo prop="mi valor" />
</> 

Declaracion:
function ComponenteEjemplo({prop}) {
	return(
	<>
	<p>
		Aca tengo un elemento de HTML y quiero poder cambiar 
		una parte de manera dinamica, entonces uso {prop} 
	 </p>
	</>
	)
} 
```
Los componentes tiene dos reglas, nombres con mayúscula y deben retornar un valor que ReactJs pueda renderizar, usualmente JSX, pero otras variables tambien estan permitidas.
#### Children
Prop especial de todo los componentes, nos permite renderizar de forma dinamica el contenido que el componente recibe a la hora de usarlo dentro de sus tags, 
Ejemplo:
App.js
```
import { RowList, Row } from './RowList.js';

export default function App() {
  return (
    <RowList rows={[
      { id: 'first', content: <p>This is the first item.</p> },
      { id: 'second', content: <p>This is the second item.</p> },
      { id: 'third', content: <p>This is the third item.</p> }
    ]} />
  );
}
```

RowList.js
```
export function RowList({ rows }) {
  return (
    <div className="RowList">
      {rows.map(row => (
        <div className="Row" key={row.id}>
          {row.content}
        </div>
      ))}
    </div>
  );
}
```

### Eventos
Para escuchar eventos en React, podemos utilizar props con el evento correspondiente y le pasamos el comportamiento que queremos 
### State 
Para manejar estados podemos utilizar varios [hooks](https://react.dev/reference/react/hooks), pero el que vamos utitlizar más frecuentemente es useState:
#### useState
```
Syntax:
const[variable, setVariable] = useState(valorInicialVariable)

Example:
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  );
}

```
#### [useEffect](https://react.dev/reference/react/useEffect)
Es un hook nos permite ejectuar logica en determinados momentos del ciclo de vida de un componente.
Tiene 3 partes:
- La funcion que queremos ejecutar
- Una funcion de limpieza, que se ejecuta cuando se termina de renderizar en la UI
- Arreglo de dependencias

```
import { useEffect } from 'react';  
import { createConnection } from './chat.js';  


function ChatRoom({ roomId }) {  
	const [serverUrl, setServerUrl] = useState('https://localhost:1234');  
	
	useEffect(() => {  
		const connection = createConnection(serverUrl, roomId);  
		connection.connect();  
		return () => {  
		connection.disconnect();  
		};  
	}, [serverUrl, roomId]); // Arreglo de dependecia   
	// ... 
	}
```

El arreglo de dependencia tiene funciona de la siguiente manera:
1. Si no esta presente, se ejecuta siempre que se renderisa 
2. Si tiene un valor, se ejecuta cada vez que esos valores cambien 
3. Si esta vació, nuestra lógica se ejecutara solamente cuando el componente se renderise por primer vez 

Cuando usamos useEffect para ejecutar una fun async tengo que crear la función y  ejecutar dentro del useEffect 
### Context:
Es un hook que nos permite suscribirnos a un context de un componente. 
Ejemplo:
```
LevelContext.js:
import { createContext } from 'react';

export const LevelContext = createContext(1);
---
Component.jsx:
import { useContext } from 'react';  
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {  
	const level = useContext(LevelContext);  
	// ...  
}
```
### Navegation: 

useParams()
let { id = useParams();
}

}
useNavigate()


# Ejemplo

