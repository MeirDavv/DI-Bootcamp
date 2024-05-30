document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge: 'left'});
  });

function message(){
    var name = document.getElementById('full_name');
    var email = document.getElementById('email');
    var events = document.getElementById('events'); 
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(name.value === '' || email.value === '' || !validateEmail(email.value) || events.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            name.value = '';
            email.value = '';
            events.selectedIndex = 0;
        }, 2000);

        success.style.display = 'block';
        danger.style.display = 'none';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 2000)

}

function validateEmail(val) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(val);
  }