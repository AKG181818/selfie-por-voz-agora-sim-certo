var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    
    console.log(event);

    var Content = event.results[0][0].transcript;

    Textbox.innerHTML = content
    console.log(Content);
        if(content == "tire minha selfie")
            {
                console.log("tirando selfie ---");
                speak();
            }

}

function speak(){
    var synth = window.speechSynthesis;

    speakData = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUterance(speakData);

    synth.speak(utterThis);

    webcam.attach(camera);

    setTimeout(function()
    {
        takeSelfie();
        save();
    }, 5000);
}


camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg'
    jpeg_quality:90
});

function takeSelfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>'
    });
}

function save ()
{
    link = document.getElementById("link");
    image = document.getElementById ("selfieImage").src ;
    link.href = image;
    link.click();
}