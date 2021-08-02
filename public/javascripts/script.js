function scrollToBottom() {

    if(document.getElementById('contactme') == null) {
        window.location.href = "/#Contact";
    }

    scrollInterval;
    stopScroll;

    var scrollInterval = setInterval(function () {
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
    }, 50);

    var stopScroll = setInterval(function () {
        clearInterval(scrollInterval);
    }, 100);
}


function scrollToProjects() {
    if(document.getElementById('projects') == null) {
        window.location.href = "/#Projects";
    }
    scrollInterval;
    stopScroll;

    var scrollInterval = setInterval(function () {
        document.documentElement.scrollTop = document.getElementById('projects').scrollHeight-1500;
    }, 50);

    var stopScroll = setInterval(function () {
        clearInterval(scrollInterval);
    }, 100);
}

function validateEmail() {
   var email =  document.getElementById('emailid').value;
   var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
   if(regexp.test(String(email).toLowerCase())) {
        document.getElementById('fullname').value = '';
        document.getElementById('emailid').value = '';
        document.getElementById('message').value = '';
        // {{!-- I can use AJAX to submit the form rather than refreshing all the Home Page again// --}}
       alert('Data Submitted Successfully');
        return true;
   }
   else {
       alert('Submission failed: wrong emailid')
       return false;
   }
}
