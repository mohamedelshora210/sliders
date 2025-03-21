

var imgItem = document.getElementsByClassName("img-item");
var imgArray = [];
var lightBOxContainer = document.getElementById("lightBOxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex = 0 ;


for( var i = 0 ; i < imgItem.length ; i++)
{
     imgArray.push(imgItem[i]);
     imgArray[i].addEventListener("click" , function(e){
          currentIndex = imgArray.indexOf(e.target);
          lightBOxContainer.style.display = "flex";
          var imgSrc = e.target.getAttribute("src");
          lightBoxItem.style.backgroundImage = `url(`+imgSrc+`)`;
     })
}

function nextSlide()
{
     currentIndex++;
     if(currentIndex == imgArray.length)
     {
          currentIndex = 0 ;
     }
     var imgSrc = imgArray[currentIndex].getAttribute("src");
     lightBoxItem.style.backgroundImage = `url(`+imgSrc+`)`;
}

function prevSlide()
{
     currentIndex--;
     if(currentIndex < 0 )
     {
          currentIndex = imgArray.length - 1
     }
     var imgSrc = imgArray[currentIndex].getAttribute("src");
     lightBoxItem.style.backgroundImage = `url(`+imgSrc+`)`;
}

function closeSlide()
{
     lightBOxContainer.style.display = "none";
}

// lightBOxContainer.addEventListener("click" , function(e){
//      if(e.target == lightBoxItem || e.target == nextBtn || e.target == prevBtn)
//      {
//           return false
//      }
//      else{
//             closeSlide()
//      }
   
// })

document.body.addEventListener("keydown" , function(e){
     if(e.keyCode == 39)
     {
          nextSlide() 
     }
     else if(e.keyCode == 37)
     {
          prevSlide()
     }
     else if(e.keyCode == 27)
     {
          closeSlide()
     }
})
   
nextBtn.addEventListener("click" ,nextSlide );
prevBtn.addEventListener("click" ,prevSlide );
closeBtn.addEventListener("click" ,closeSlide );


//================================================================


var imgItems = document.getElementsByClassName("img-items");
var imgArrays = [];
var lightBOxContainers = document.getElementById("lightBOxContainers");
var lightBoxItems = document.getElementById("lightBoxItems");
var nextBtns = document.getElementById("nexts");
var prevBtns = document.getElementById("prevs");
var closeBtns = document.getElementById("closes");
var currentIndexs = 0 ;

for( var i = 0 ; i < imgItems.length ; i++)
     {
          imgArrays.push(imgItems[i]);
          imgArrays[i].addEventListener("click" , function(e){
               currentIndexs = imgArrays.indexOf(e.target);
               lightBOxContainers.style.display = "flex";
               var imgSrc = e.target.getAttribute("src");
               lightBoxItems.style.backgroundImage = `url(`+imgSrc+`)`;
          })
     }
     
     function nextSlides()
     {
          currentIndexs++;
          if(currentIndexs == imgArrays.length)
          {
               currentIndexs = 0 ;
          }
          var imgSrc = imgArrays[currentIndexs].getAttribute("src");
          lightBoxItems.style.backgroundImage = `url(`+imgSrc+`)`;
     }
     
     function prevSlides()
     {
          currentIndexs--;
          if(currentIndexs < 0 )
          {
               currentIndexs = imgArrays.length - 1
          }
          var imgSrc = imgArrays[currentIndexs].getAttribute("src");
          lightBoxItems.style.backgroundImage = `url(`+imgSrc+`)`;
     }
     
     function closeSlides()
     {
          lightBOxContainers.style.display = "none";
     }
     
    
     
     document.body.addEventListener("keydown" , function(e){
          if(e.keyCode == 39)
          {
               nextSlides() 
          }
          else if(e.keyCode == 37)
          {
               prevSlides()
          }
          else if(e.keyCode == 27)
          {
               closeSlides()
          }
     })
        
     nextBtns.addEventListener("click" ,nextSlides );
     prevBtns.addEventListener("click" ,prevSlides );
     closeBtns.addEventListener("click" ,closeSlides );
     
