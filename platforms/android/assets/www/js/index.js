
function traeJs(){
    document.addEventListener("deviceready", IniciarAplicacion, false);  
}


function IniciarAplicacion(){
var informacion="Tu SO es: " + device.platform + " Version: " + device.version + 
				"<br>" +" Modelo : " + device.model + 
				"<br>"+" Identificador Universal : " + device.uuid;


$("#info").html(informacion);
}

function aCel(){
	var watchID = navigator.accelerometer.watchAcceleration(onSuccess,onError,{frequency : 1000});
}

function onSuccess(acceleration) {
    var x=acceleration.x;
    var y=acceleration.y;
    var z=acceleration.z;

    $("#x").html(x);
    $("#y").html(y);
    $("#z").html(z);

};

function onError() {
    alert('onError!');
};

