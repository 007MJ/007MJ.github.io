document.addEventListener("DOMContentLoaded",  function() {

    const containerCarousel = document.querySelector(".container-slide");
    // const arrowbtn = document.querySelector("");
    const firstSlide = document.querySelector(".slide");

    const firstSlideWidth = firstSlide.offsetWidth;

    let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

    const dragStart = (e) => {
        isDragging = true;
        containerCarousel.classList.add("dragging");
        startX  = e.pageX;
        console.log(" dragStart ---  -> ", isDragging)
        
        startScrollLeft = containerCarousel.scrollLeft;
        console.log("startScrollLeft ->",startScrollLeft)
        
    };
    
    console.log("the var in global --------->", isDragging)

    const dragging = (e) => {
        console.log("dragging step one  ->", isDragging)
        console.log("isDragging ? -> ", isDragging)
        if (!isDragging){
            console.log("if -- return -> ", isDragging)
            return;
        }
        console.log("true ? ->")
        
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
        console.log("newScrollLeft", newScrollLeft)
        
        if (newScrollLeft <= 0 || newScrollLeft >= 
            containerCarousel.scrollWidth - containerCarousel.offsetWidth){
                isDragging = false
                console.log("new position is false ->", newScrollLeft)
                return ;
            }
            
            containerCarousel.scrollLeft = newScrollLeft;
            console.log("dragging  ->",startScrollLeft)
    };

    const dragStop = () => {
        isDragging = false;
        containerCarousel.classList.remove("dragging");
    };

    containerCarousel.addEventListener("mousedown", dragStart);
    containerCarousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    
})