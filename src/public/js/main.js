if (window.templates == null || typeof(window.templates) != "object") {
    window.templates = {}
}

initEvent();

function initEvent() {
    $('#frmContact').on('submit', (e) => {
        e.preventDefault();

        var nomPrenom = $('#inputName');
        var email = $('#inputEmail');
        var telephone = $('#inputPhone');
        var message = $('#inputMessage');

        $.post('/api/contact/envoyermessage', {
            nom_prenom: nomPrenom.val(),
            email: email.val(),
            telephone: telephone.val(),
            message: message.val()
        }, (result) => {
            $.bootstrapGrowl("Vôtre message a bien été envoyé. Je vous contacterais dans les plus bref delais.", {
                ele: 'body', // which element to append to
                type: 'success', // (null, 'info', 'error', 'success')
                offset: { from: 'bottom', amount: 20 }, // 'top', or 'bottom'
                align: 'center', // ('left', 'right', or 'center')
                width: 'auto', // (integer, or 'auto')
                delay: 4000,
                allow_dismiss: false,
                stackup_spacing: 10 // spacing between consecutively stacked growls.
            });

            $('#frmContact')[0].reset();
        });
    });
}