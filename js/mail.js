//  ------------------------------ ENVIO CORREOS ---------------------------------------------
document.getElementById('partnership-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Enviado',
                text: 'Gracias por contactarnos, nos pondremos en contacto contigo pronto.'
            });
            form.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error, por favor intenta de nuevo.'
            });
        }
    };
    xhr.send(formData);
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Suscripción Exitosa',
                text: 'Te has suscrito exitosamente a nuestro boletín.'
            });
            form.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error, por favor intenta de nuevo.'
            });
        }
    };
    xhr.send(formData);
});