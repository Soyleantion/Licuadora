let blenderState = "apagada";
let blender = document.getElementById("blender");
let blenderButtonSound = document.getElementById("blender-button-sound");
let blenderButtonOnOff = document.getElementById("blender-button-onOff");
let blenderButton= document.getElementsByClassName("blender-button");

/* Funciones para controlar el botón main para encender y apagar la licuadora, dandole una velocidad máxima añadiendo o quitando la clase "blender-active" dependiendo el estado de la licuadora
   ========================================================================== */
const controlarLicuadora = (speed) => {
    
    if (blenderState == "apagada"){
        blenderState = "encendida";
        blender.classList.add("blender-active");
        blenderSounds(speed);
    }
    else{
        blenderState = "apagada";
        blender.classList.remove("blender-active");
        blenderSounds(speed);
    }
}

const blenderSounds = (speed) =>{
    if (blenderButtonSound.paused){
        blenderButtonSound.volume = speed;
        blenderButtonSound.play();
        blenderButtonOnOff.play();
        
    }
    else {
        blenderButtonSound.volume = speed;
        blenderButtonSound.pause();
        blenderButtonOnOff.play();
        blenderButtonSound.currentTime = 0;
        
    }
}

/* Funciones para controlar los botones de velocidades de la licuadora, dandole una velocidad que se recibe por el parametro "speed" dependiendo el botón y añadiendo la clase "blender-active", para darle animación
   ========================================================================== */
const blenderSpeed = (speed) => {
    blenderState = "encendida";
    blender.classList.add("blender-active");
    blenderSoundsSpeed(speed);
}

const blenderSoundsSpeed = (speed) =>{
    blenderButtonSound.volume = speed;
    blenderButtonSound.play();
    blenderButtonOnOff.play();
}

