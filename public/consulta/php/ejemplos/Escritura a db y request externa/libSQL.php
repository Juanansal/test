<?php
         // Funciones utiles para manejar bases de datos




         // Ejecutar SQL sin retorno de valores (Insertar datos)
         // Si devuelve 0, el SQL se realizo correctamente
         function ejecutarSQL($servername, $username, $password, $dbname, $sql) {
            $respuesta = 0;

            try {
               // Realizar la conexion con la base de datos    
               $conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

               // Poner el errorMode en excepcion
               $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

               // Ejecucion del SQL -- exec()no retorna resultados
               $conexion->exec($sql); 

               // Escribe el ultimo id escrito (El ejecutado en este caso)
               $last_id = $conexion->lastInsertId();
               //echo $last_id;

            }
            catch(PDOException $e) {
               //echo $sql . "<br>" . $e->getMessage();
               $respuesta = 'Error: '. $e->getMessage();
            }
         $conexion = null;
         return $respuesta;
         }




         // Ejecutar de multiples SQL sin retorno de valores (Insertar datos)
         // sql es un array con llamadas sql
         // Si devuelve 0, el SQL se realizo correctamente
         function ejecutarMultipleSQL($servername, $username, $password, $dbname, $sql) {
            $respuesta = 0;

            try {
               // Realizar la conexion con la base de datos    
               $conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

               // Poner el errorMode en excepcion
               $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

               // Ejecucion del SQL multiple -- exec()no retorna resultados
               foreach($sql as $valor) {
                  $conexion->exec($valor); 
               }

               // Escribe el ultimo id escrito (El ejecutado en este caso)
               $last_id = $conexion->lastInsertId();
               //echo $last_id;

            }
            catch(PDOException $e) {
               //echo $sql . "<br>" . $e->getMessage();
               $respuesta = 'Error: '. $e->getMessage();
            }
         $conexion = null;
         return $respuesta;
         }




         // Ejecutar SQL con retorno de datos (util para SELECT)
         function ejecutarSelectSQL($servername, $username, $password, $dbname, $sql) {
            $respuesta = '';

            try {
               // Realizar la conexion con la base de datos   
               $conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

               // Poner el errorMode en excepcion
               $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

               // Ejecucion del SQL multiple -- exec()no retorna resultados
               $stmt = $conexion->prepare($sql); 
               $stmt->execute();

               // Modo asociativo para facilitar su lectura
               $resultado = $stmt->setFetchMode(PDO::FETCH_ASSOC);

               // Datos en un array[][]
               $respuesta = $stmt->fetchAll();
               
               // Asi se deben de leer los datos
               // Se ha creado una funcion rellenarTabla para realizar esto con los datos devueltos del select
               /*
               foreach($stmt->fetchAll() as $valor) { 
                  array_push($respuesta, $valor);

                  foreach($valor as $dato) {
                     echo $dato;
                  }
                  echo '<br>';
              }
              */
               
            }
            catch(PDOException $e) {
                  //echo $sql . "<br>" . $e->getMessage();
                  $respuesta = 'Error: '. $e->getMessage();
            }

         $conexion = null;
         return $respuesta;
         }



         // Funcion para rellenar una tabla con datos extraidos de la base de datos
         function rellenarTabla($datos) {
            foreach($datos as $fila) { 
               echo '<tr>';
               foreach($fila as $dato) {
                  echo '<td>'.$dato.'</td>';
               }
               echo '</tr>';
            }
         }


      ?>