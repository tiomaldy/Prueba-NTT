1.Abrir la carpeta Prueba Cypress desde Visual Studio Code
2.Hacer click en la parte superior en Terminal y seleccion nueva terminal
3.Ahora iniciaremos Cypress
- Npm init -y (PARA INICIAR CUALQUIER PROYECTO OBLIGATORIO)
- Npm install cypress -D (CON ESTE INSTALAMOS CYPRESS OBLIGATORIO CON SUS DEPENDENCIAS )
- npm i -D cypress-slow-down(CON ESTO HACEMOS LOS TEST MAS LENTO PARA EVITAR MENOS BUGS)
- Npx cypress open (ABRIMOS EL CYPRESS PARA TRABAJAR)
4.En la pantalla de Cypress escogemos la prueba E2E configurada 
5.Escogemos el navegador donde deseamos hacer las pruebas,por recomendacion siempre suelo utilizar Electron ya que presenta menos bugs
6.Dentro de la pestaña Specs escogemos el archivo Prueba
7.Se ejecutara la prueba ,algunas veces por la velocidad de la prueba estas suelen dar error ,hacer click en refrescar o escoger otro navegador


-----------------------.-----------------------------------------
Los casos de prueba 1 y 2 ,se pueden verificar en el Excel que es lo que realiza cada uno.
Los errores comumente no son por fallas de la creacion de la prueba sino porque las peticiones a la Api son muy lentas
lo que hace que el escribir una palabra no se haga con rapides,por lo que baje la velocidad de la prueba para evitar
los errores lo mayor posible.
