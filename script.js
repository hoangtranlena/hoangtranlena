var index=1;
changeImage = function (){
    var imgs=["Img/meoragdoll.jpg","Img/meoragdoll1.jpg","Img/meoragdoll2.jpg","Img/meoragdoll3.jpg"];
    document.querySelector("#img").src=imgs[index];
    index++;
    if(index==4)
        index=0;
}

setInterval(changeImage,1000);


const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
   