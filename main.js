function recordSound(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pCuHHYqt-/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var cats = 0;
var dogs = 0;
var tigers = 0;
function gotResults(error, results){
 if(error){
     console.error(error);
 }else{
     document.getElementById("number").innerHTML = "Dogs Detected : "+dogs+", Cats Detected : "+cats+", Tigers Detected : "+tigers
     var rgb1 = (Math.floor(Math.random()*255))+1;
     var rgb2 = (Math.floor(Math.random()*255))+1;
     var rgb3 = (Math.floor(Math.random()*255))+1;
     document.getElementById("color_result").style.color = "rgb("+rgb1+","+rgb2+","+rgb3+")";
     document.getElementById("number").style.color = "rgb("+rgb1+","+rgb2+","+rgb3+")";

     if(results[0].label == "Roar"){
         document.getElementById("result").innerHTML = results[0].label;
         document.getElementById("pic_gif").src = "tiger-roar.png";
         tigers++;
         document.getElementById("number").innerHTML = "Dogs Detected : "+dogs+", Cats Detected : "+cats+", Tigers Detected : "+tigers;
     }else if(results[0].label == "Meow"){
        document.getElementById("result").innerHTML = results[0].label;
        document.getElementById("pic_gif").src = "cat.jpeg";
        cats++;
        document.getElementById("number").innerHTML = "Dogs Detected : "+dogs+", Cats Detected : "+cats+", Tigers Detected : "+tigers;
     }else if(results[0].label == "Bark"){
        document.getElementById("result").innerHTML = results[0].label;
        document.getElementById("pic_gif").src = "dog.jpeg";
        dogs++;
        document.getElementById("number").innerHTML = "Dogs Detected : "+dogs+", Cats Detected : "+cats+", Tigers Detected : "+tigers;
     }else{
        document.getElementById("result").innerHTML = results[0].label;
        document.getElementById("pic_gif").src = "backgroung noise.jpeg";
     }
 }
}