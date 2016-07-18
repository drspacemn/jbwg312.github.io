$(document).ready(function(){
    var width = $(window).width();
    var dimensions = gr((width*0.8));
    var i = 1;
    $('#butt').click(function(){
      if(i % 4 === 0){
        $(`#${i}`).append(`<div class="next1" id='${i+1}' style="height:${dimensions[i].width}px;width:${dimensions[i].height}px;background:${rando()};float:right;"></div>`)
        i++;
      }
      else if(i === 5){
        $(`#${i}`).append(`<div class="next" id='${i+1}' style="height:${dimensions[i].width}px;width:${dimensions[i].height}px;background:${rando()};"></div>`)
        i++;
      }
      else {
        $(`#${i}`).append(`<div class="next" id='${i+1}' style="height:${dimensions[i].width}px;width:${dimensions[i].height}px;background:${rando()}"></div>`)
        i++;
      }
    })
})

var count = 0;
var arr = [];

function gr(width) {

    //return the stack if count reaches 10
    if (count === 15) return arr;

    //set height variable
    var height = (width / 1.618).toFixed(3);

    //increment count and push alternating height and width object to array
    count++;
    arr.push(count % 2 !== 0 ? {width: width, height: height} : {width: height, height: width});

    //recursively call function with new argument
    return gr((height));
}

function rando(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var rgb = "rgb(" + r + "," + g + "," + b +")";
  return rgb;
}
