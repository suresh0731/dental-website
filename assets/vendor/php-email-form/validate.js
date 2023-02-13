
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('change', function(event) {
      event.preventDefault();

      let thisForm = this;
      
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      var name = document.getElementById("name").value;
      var mail_id = document.getElementById("email").value;
      var mobile_no = document.getElementById("phone").value;
      var appointment_date = document.getElementById("datepicker").value;
      var service =  document.getElementById("service").value;
      var doctor = document.getElementById("doctor").value;
      var button = document.getElementById("mailbtn")
      if(name && mail_id && mobile_no && appointment_date && service && doctor){
        button.disabled = false
      }
      else{
        button.disabled = true
      }
      
    });
  });

})();
