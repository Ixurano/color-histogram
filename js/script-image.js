var redCount = [];
var greenCount = [];
var blueCount = [];
var alphaCount = [];
// skapar 4st tomma array för datan istället för att skriva 255 nollor för hand.
for (i = 0; i < 256; i++) {
    redCount.push(0);
    greenCount.push(0);
    blueCount.push(0);
    alphaCount.push(0);
}

var input = document.querySelector('input[type=file]');
// https://stackoverflow.com/questions/43279798/save-and-display-image-captured-from-input-type-file delar använda för upload funktion
input.onchange = function () {
    var file = input.files[0];
    drawOnCanvas(file);
};
function drawOnCanvas(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var context = canvas.getContext("2d");
        var dataURL = e.target.result,
            c = document.querySelector('canvas'),
            img = new Image();
        img.onload = function () {
            var x = 0; // vilken pixel x kord
            var y = 0;// vilken pixel y kord
            c.width = img.width;
            c.height = img.height;
            context.drawImage(img, 0, 0);
            // får datan från canvas/bilden
            var imgData = context.getImageData(x, y, c.width, c.height);
            //lägger variabel för enkelhetenskull för färgvärden/pixel i en array
            var pixelDataArray = imgData.data;
            console.log(imgData);
            //foor-loop som lägger värderna i rätt array från pixelDataArray.
            for (i = 0; i < pixelDataArray.length; i+=4) {
                var red = pixelDataArray[i];
                var green = pixelDataArray[i + 1];
                var blue = pixelDataArray[i + 2];
                var alpha = pixelDataArray[i + 3];

                redCount[red]++;
                greenCount[green]++
                blueCount[blue]++
                alphaCount[alpha]++
                
            }
        };
        img.src = dataURL;
    };
    reader.readAsDataURL(file);
}