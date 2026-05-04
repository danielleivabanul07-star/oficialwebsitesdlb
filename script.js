const numeroWhatsApp = "16892220829";

/* 
HORARIOS DISPONIBLES:
Aquí puedes cambiar las horas que quieres ofrecer.
Ejemplo: "8:00 AM", "9:00 AM", etc.
*/
const horariosDisponibles = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM"
];

/*
HORARIOS NO DISPONIBLES:
Aquí puedes bloquear horarios específicos.
Por ejemplo, si no quieres aceptar citas a las 12:00 PM.
*/
const horariosNoDisponibles = [
  "12:00 PM"
];

/*
FECHAS NO DISPONIBLES:
Aquí puedes bloquear días completos.
Formato correcto: AÑO-MES-DÍA
Ejemplo: "2026-05-10"
*/
const fechasNoDisponibles = [
  "2026-12-25",
  "2026-01-01"
];

const selectHora = document.getElementById("hora");
const inputFecha = document.getElementById("fecha");
const formCita = document.getElementById("formCita");

if (selectHora) {
  horariosDisponibles.forEach(hora => {
    if (!horariosNoDisponibles.includes(hora)) {
      const option = document.createElement("option");
      option.value = hora;
      option.textContent = hora;
      selectHora.appendChild(option);
    }
  });
}

if (inputFecha) {
  const hoy = new Date().toISOString().split("T")[0];
  inputFecha.setAttribute("min", hoy);
}

if (formCita) {
  formCita.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const mensaje = document.getElementById("mensaje").value;

    if (fechasNoDisponibles.includes(fecha)) {
      alert("Ese día completo no está disponible. Por favor selecciona otra fecha.");
      return;
    }

    const texto = `
Hola, quiero agendar una cita.

Nombre: ${nombre}
Teléfono: ${telefono}
Correo: ${correo}
Servicio: ${servicio}
Fecha: ${fecha}
Hora: ${hora}
Mensaje: ${mensaje}
`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  });
}