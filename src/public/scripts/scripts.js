function mostrar(id){
    document.getElementById(id).style.display = "flex";
}

function ocultar(id){
    document.getElementById(id).style.display = "none";
}

function cambiarColor(id, color){
    document.getElementById(id).style.color = color;
}

function cambiarColorPorDefecto(value, id){ value != "" ? cambiarColor(id, '#000') : cambiarColor(id, '#999') }

function mostrarOcultarEstado(value){
    switch(value){
        case 'activo':
            mostrar('fecha-ingreso');
            document.getElementById('fecha-ingreso').className = 'field-12';
            ocultar('fecha-baja');
            break;
        case 'inactivo':
            mostrar('fecha-ingreso');
            document.getElementById('fecha-ingreso').className = 'field-6';
            mostrar('fecha-baja');
            break;
        case '':
            ocultar('fecha-ingreso'); 
            ocultar('fecha-baja');
            break;
    }
}




const form = document.getElementById('form-familiares');

let numeroDeFamiliar = 1;
function agregarFamiliar(){
    const familiarForm = document.createElement("div");
    familiarForm.innerHTML = 
    `<section class="form__section">
        <div class="titulo field-12">Datos del familiar</div>
        <input type="text" name="nombres-familiar${numeroDeFamiliar}" placeholder="Nombres" class="field-6">
        <input type="text" name="apellidos-familiar${numeroDeFamiliar}" placeholder="Apellidos" class="field-6">
        <select class="field-6" name="parentesco${numeroDeFamiliar}" id="parentesco${numeroDeFamiliar}" onchange="mostrarOcultarEstado(value); cambiarColorPorDefecto(value, id);" required>
            <option value="">Parentesco</option>
            <option value="">Parentesco</option>
            <option value="">Parentesco</option>
            <option value="">Parentesco</option>
        </select>
        <select class="field-6" name="genero-familiar${numeroDeFamiliar}" id="genero-familiar${numeroDeFamiliar}" onchange="cambiarColorPorDefecto(value, id);" required>
            <option value="">Género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
        </select>
        <input class="field-6" type="text" name="fecha-nac-familiar${numeroDeFamiliar}" placeholder="Fecha de Nacimiento" required>
        <input class="field-6" type="text" name="cuil-familiar${numeroDeFamiliar}" placeholder="CUIL" required >
        <input class="field-6" type="text" name="ultima-emision-carnet-familiar${numeroDeFamiliar}" placeholder="Ultima emision de Carnet" required>
        <select class="field-6" name="discapacitado${numeroDeFamiliar}" id="discapacitado${numeroDeFamiliar}" onchange="cambiarColorPorDefecto(value, id);" required>
            <option value="">Discapacitado</option>
            <option value="masculino">Si</option>
            <option value="femenino">No</option>
        </select>
        <button class="boton" onclick="agregarFamiliar(); ocultarBotones();">Agregar Familiar</button>
        <button class="boton" type="submit" name="enviar">Enviar</button>
    </section>`;
    form.appendChild(familiarForm);
    numeroDeFamiliar++;
}


function ocultarBotones(){
    const botones = Array.from(document.querySelectorAll('.boton'));
    for (let boton of botones) { boton.style.display = 'none' };
    botones.pop().style.display = 'flex';
    botones.pop().style.display = 'flex';
}


