(function(){
    
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
     
    var actionDiv = document.getElementById("action");
    var output = document.getElementById("result");

    //speech recognition events 
    recognition.onstart = function(){
        actionDiv.innerHTML="startSpeakText"
    };

    recognition.onspeechend = function(){
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
    };

    recognition.onresult = function(event){
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence * 100 + "%";
        speakLoud(transcript);
    };

    document.getElementById("startSpeakBtn").addEventListener("click", function(){
        recognition.start();
    });

    function speakLoud(message) {
        var speech = new SpeechSynthesisUtterance();
        speech.volume = 1;
        speech.text = message;
        window.speechSynthesis.speak(speech);
    }

})();