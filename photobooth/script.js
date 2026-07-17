const video=document.getElementById('video');
const canvas=document.getElementById('canvas');
const capture=document.getElementById('capture');
const download=document.getElementById('download');
const overlay=document.querySelector('.overlay');

navigator.mediaDevices.getUserMedia({
video:{
facingMode:"user"
}
})
.then(stream=>{
video.srcObject=stream;
});

capture.onclick=()=>{

canvas.width=video.videoWidth;
canvas.height=video.videoHeight;

const ctx=canvas.getContext("2d");

ctx.drawImage(video,0,0);

ctx.drawImage(
overlay,
0,
0,
canvas.width,
canvas.height
);

download.href=canvas.toDataURL();

download.style.display="inline";

download.click();

}