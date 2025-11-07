let zona = "";
let peso = 0;
let baseInicial = 5000;
let base = baseInicial;
let extra = 0;
let tieneSeguro = "No";
let valorSeguro = 2000;
let opcion = 0;


while (opcion != 5) {
  opcion = prompt(
    "=== COTIZADOR DE ENVÍOS ===\n" +
    "1. Elegir zona\n" +
    "2. Ingresar peso del paquete\n" +
    "3. Agregar seguro\n" +
    "4. Calcular total\n" +
    "5. Salir\n\n" +
    "Ingrese opción (1-5):"
  );

  opcion = opcion - 0;

  if (opcion == 1) {
    let zonaElegida = prompt("1. Nacional\n2. Internacional");
    zonaElegida = zonaElegida - 0;

    if (zonaElegida == 1) {
      zona = "Nacional";
      base = baseInicial;
      alert("Zona nacional seleccionada. Costo base $" + base);
    } else {
      if (zonaElegida == 2) {
        zona = "Internacional";
        base = baseInicial * 3;
        alert("Zona internacional seleccionada. Costo base $" + base);
      } else {
        alert("Opción inválida");
        zona = "";
      }
    }
  } 
  else {
    if (opcion == 2) {
      peso = prompt("Ingrese el peso en Kg:");
      peso = peso - 0;

      if (peso < 2) {
        extra = 0;
        alert("Sin recargo por peso");
      } else {
        if (peso >= 2 && peso <= 5) {
          extra = base * 0.25;
          alert("Recargo del 25% aplicado");
        } else {
          if (peso > 5) {
            extra = base * 0.5;
            alert("Recargo del 50% aplicado");
          } else {
            alert("Peso inválido");
            peso = 0;
          }
        }
      }
    } 
    else {
      if (opcion == 3) {
        let seguro = prompt("¿Desea seguro?\n1. Sí\n2. No");
        seguro = seguro - 0;

        if (seguro == 1) {
          tieneSeguro = "Sí";
          alert("Seguro aplicado (+$" + valorSeguro + ")");
        } else {
          if (seguro == 2) {
            tieneSeguro = "No";
            alert("Seguro no aplicado");
          } else {
            tieneSeguro = "No";
            alert("Opción inválida. No se aplicará seguro");
          }
        }
      } 
      else {
        if (opcion == 4) {
          if (zona == "" || peso == 0) {
            alert("Debe definir la zona y el peso antes de calcular.");
          } else {
            let total = base + extra;
            if (tieneSeguro == "Sí") {
              total = total + valorSeguro;
            }

            alert(
              "=== RESUMEN ===\n" +
              "Zona: " + zona + "\n" +
              "Peso: " + peso + " Kg\n" +
              "Costo base: $" + base + "\n" +
              "Recargo: $" + extra + "\n" +
              "Seguro: " + tieneSeguro + "\n" +
              "Total: $" + total
            );
          }
        } 
        else {
          if (opcion == 5) {
            alert("Gracias por usar el cotizador. ¡Hasta pronto!");
          } else {
            alert("Opción inválida. Intente de nuevo.");
          }
        }
      }
    }
  }
}