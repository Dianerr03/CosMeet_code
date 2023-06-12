window.onscroll = function() {
    showScrollButton();
  };
  
  function showScrollButton() {
    var myBtn = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myBtn.style.display = "block";
    } else {
      myBtn.style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }