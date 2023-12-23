function form(event) {
    
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const form = document.querySelector('.needs-validation');
  
    // Loop over them and prevent submission
   
      
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      
    
  }