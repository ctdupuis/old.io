document.addEventListener("DOMContentLoaded", () => {
    console.log('loaded');
    let pTag = document.querySelector('#header');

    pTag.addEventListener('click', (event) => toggleColor(event))

    function toggleColor(event) {
        debugger
    //    if (event.target.className === "test") {
    //        event.target.className = 'highlited'
    //    } else {
    //        event.target.className = 'test'
    //    }
    //    while (event.target.out)
    //    debugger
    }

    // pTag.addEventListener("mouseover", function( event ) {   
    //     // highlight the mouseover target
    //     event.target.style.color = "orange";
      
    //     // reset the color after a short delay
    //     setTimeout(function() {
    //       event.target.style.color = "";
    //     }, 500);
    //   }, false);
    

})
