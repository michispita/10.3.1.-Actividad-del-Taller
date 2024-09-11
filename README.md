 Objetivos de Aprendizaje
Aprender el uso de JSON.stringify para convertir un array en una cadena JSON y JSON.parse para convertir la cadena JSON que representa una lista en un array. Esto es especialmente útil cuando queremos almacenar datos complejos de los usuarios, como objetos y sus propiedades o un arreglo (lista) de elementos.
Aprender un uso avanzado de localStorage en combinación de cadenas JSON (recordar que el localStorage sólo almacena strings, por lo que no podemos almacenar arrays u objetos sin antes convertirlos a cadena JSON).
Trabajar operaciones básicas de arreglos como añadir o quitar elementos. Esto es útil cuando trabajamos con listas que necesitamos que el usuario pueda agregar o quitar datos.
 Pautas
Adjunta encontrarán una página web cuyo objetivo es guardar un listado de los ítems agregados por el usuario en el almacenamiento local, y mostrarlos en una lista ya definida para ello.


1- Realicen las modificaciones necesarias para que, si hay contenido en el campo para añadir nuevos ítems, al pulsar el botón Agregar:

Se agregue el nuevo ítem al listado guardado
Se actualice la vista del listado
Se limpie el campo para añadir nuevos ítems
2- Tener en cuenta que el contenido del listado (y su visualización) deben mantenerse aún cuando el navegador se cierre y se vuelva a abrir.

3- Realicen las modificaciones necesarias para que al pulsar el botón Limpiar:

Se elimine el listado almacenado
Se actualice la vista del listado (ahora vacío)
