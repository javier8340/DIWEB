function accionPlay()
{
    if(!medio.paused && !medio.ended)
    {
        pause()
    }
    else
    {

        play()
    }
}
function play(){
    medio.play();
    play.value='||';
    document.body.style.backgroundColor = 'grey';
}
function pause(){
    medio.pause();
    play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
}
function accionReiniciar()
{
    //se pone el tiempo a 0 y se ejecuta el play
    medio.currentTime = 0;
    play()

    //Usar propiedad .currentTime
    //Reproducir el vídeo
    //Cambiar el valor del botón a ||
}
function accionRetrasar()
{
    //si el tiempo -10 es mayor que 0 se resta y si no se pone a 0
    if (medio.currentTime -10 >=0){
        medio.currentTime = medio.currentTime -10;
    }else{
        medio.currentTime = 0;
    }
    //Usar propiedad .curentTime
    //Contemplar que no existen valores negativos
}
function accionAdelantar()
{
    //si el tiempo +10 no supera el maximo se suma y si no se pone el maximo
    if (medio.currentTime +10 <= medio.duration){
        medio.currentTime = medio.currentTime +10;
    }else{
        medio.currentTime = medio.duration;
    }
    //Contemplar que no existen valores mayores a medio.duration
}
function accionSilenciar()
{
    //si esta muteado lo pongo a false y viceversa
    if (medio.muted){
        medio.muted = false;
    }else{
        medio.muted = true;
    }
    //Utilizar medio.muted = true; o medio.muted = false;
}
function accionMasVolumen()
{
    //si esta silenciado lo desmuteo para subir volumen
    if (medio.muted){
        accionSilenciar()
    }
    if (medio.volume <= 1){
        medio.volume+=0.1;
    }
    //Contemplar que el valor máximo de volumen es 1
}
function accionMenosVolumen()
{
    //si esta silenciado lo desmuteo para bajar volumen
    if (medio.muted){
        accionSilenciar()
    }
    if (medio.volume > 0){
        medio.volume-=0.1;
    }
    //Contemplar que el valor mínimo de volumen es 0
}

function iniciar()
{

    medio=document.getElementById('medio');
    play=document.getElementById('play');
    reiniciar=document.getElementById('reiniciar');
    retrasar=document.getElementById('retrasar');
    adelantar=document.getElementById('adelantar');
    silenciar=document.getElementById('silenciar');
    menosVolumen=document.getElementById('menosVolumen');
    masVolumen=document.getElementById('masVolumen');

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);