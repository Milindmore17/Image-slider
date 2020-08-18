(function() {
    const pictures = [
        "pic1",
        "pic2",
        "pic3",
        "pic4",
    ];

    const buttons = document.querySelectorAll('.btn');
    const imageDiv = document.querySelector('.image-container');
    let counter = 0

    buttons.forEach(function (button) {

        button.addEventListener('click', function(e) {
            if (button.classList.contains('btn-left')){
                counter--
                if(counter < 0){
                  counter = pictures.length -1
                }
                imageDiv.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
              }
              if (button.classList.contains('btn-right')){
                counter++
                if(counter > pictures.length -1){
                  counter = 0
                }
                imageDiv.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
              }
            
        })
        
    })

})();
