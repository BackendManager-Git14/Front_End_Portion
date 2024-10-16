$('document').ready(function(){

    const sidebar = document.querySelector('.sidebar');
    $(document).on('mouseenter','.sidebar',function(){
        sidebar.classList.add('active');
    })
    $(document).on('mouseleave','.sidebar',function(){
        sidebar.classList.remove('active');
    })
    /* this js will blur the background whenever we click the buttons of the side bar */
    // {
    var blurred_bg = document.getElementById('bgblur');
    var popup = document.getElementsByClassName('toggle-box');
    var previmgdiv = document.getElementById('previmage');
    var popup_delete = document.getElementsByClassName('toggle-confirm');
    
    $(document).on('click','#btn-add',function(){
        blurred_bg.classList.toggle('active');
        popup[0].classList.toggle('active');
    })
    $(document).on('click','.btn-close',function(){
        popup[0].classList.remove('active');
        blurred_bg.classList.remove('active');
    }) 

    $(document).on('click','#btn-edit',function(){
        blurred_bg.classList.toggle('active');
        popup[1].classList.toggle('active');
    })
    $(document).on('click','.btn-close',function(){
        popup[1].classList.remove('active');
        blurred_bg.classList.remove('active');
    }) 
    $(document).on('click','#btn-delete',function(){
        blurred_bg.classList.toggle('active');
        popup_delete[0].classList.toggle('active');
    })
    $(document).on('click','.btn-close',function(){
        blurred_bg.classList.remove('active');
        popup_delete[0].classList.remove('active');
    })
    $(document).on('click','#btn-no',function(){
        blurred_bg.classList.remove('active');
        popup_delete[0].classList.remove('active');
    })

    // }

    /* this function will load the preview of the image after uploading that image */
    // {
        $(document).on('change','#user-post',function(event){

        previmgdiv.innerHTML = '';
        /* the gives temporary url to generate uploaded image source */
        var imgsrc = URL.createObjectURL(event.target.files[0]);
        var previmg = document.createElement('img');
        previmg.src = imgsrc;
        /* Applying height and width for image tag */ 
        previmg.style.maxWidth = "450px";
        previmg.style.maxHeight = "150px";
        previmg.style.width = "100%";
        previmg.style.height = "100%";
        previmg.style.objectFit = "cover";

        /* this function will add the uploaded img preview tag in previmage div tag */
        previmgdiv.appendChild(previmg);
        console.log(imgsrc);        
    })
    // }

    /* this function will toggle the edit and delete menu on hover event on div class called cards */
    let options = document.querySelectorAll('.options');
    options.forEach((option) =>{
        option.addEventListener('click',function(){
            let toggle_menu = option.nextElementSibling;

            toggle_menu.classList.toggle('show');
        })
    })
})