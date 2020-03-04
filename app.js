var constraints = { video: { facingMode: "user" }, audio: false };

const cameraView = document.querySelector('#camera--view');
const cameraOutput = document.querySelector('#camera--output');
const cameraSensor = document.querySelector('#camera--sensor');
const cameraTrigger = document.querySelector('#camera--trigger');
//TODO 
//Check if the user has a cam or enabled usage of cam
// add changing functionality of facingmode
//Camera init
var getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
    
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(err => {
            console.log('err:', err)
        })
}

//Take the picture when the camera is tapped
function takePicture() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext('2d').drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL('image/png');
    cameraOutput.classList.add('taken');
}
cameraTrigger.addEventListener('click',takePicture)


window.addEventListener("load", cameraStart, false);
