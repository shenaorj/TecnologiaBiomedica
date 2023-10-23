document.addEventListener("DOMContentLoaded", function () {
    const videos = [

      
"https://www.youtube.com/embed/i0qpG4_OGu0?si=_YzaQAl_r6vkbQ5a" ,
      "https://www.youtube.com/embed/i0qpG4_OGu0",
      "https://www.youtube.com/embed/fBV6c46HwEU",
      // Agrega más enlaces a tus videos aquí
    ];
  
    const day = new Date().getDay();
    const videoIframe = document.querySelector(".video-iframe");
  
    if (day < videos.length) {
      videoIframe.src = videos[day];
    } else {
      // Si no hay más videos nuevos, regresa al primer video
      videoIframe.src = videos[0];
    }
  });
  
