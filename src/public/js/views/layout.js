if (window.templates == null || typeof(window.templates) != "object") {
    window.templates = {}
}

initEvent();

// code fragment
function initEvent() {
    $('#frmContact').on('submit', (e) => {
        e.preventDefault();

        var datas = {
            nom_prenom: $('#inputName').val(),
            email: $('#inputEmail').val(),
            telephone: $('#inputPhone').val(),
            message: $('#inputMessage').val()
        }

        $.post('/api/contact/envoyermessage', datas, (result) => {
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

            EnvoyerEmail(datas);

            $('#frmContact')[0].reset();
        });
    });

    function EnvoyerEmail(datas) {
        emailjs.init("user_hNAJaIJl0ELeIUAnXCFSw");
        emailjs.send("service_vhzw3a6", "template_z747a2a", datas);
    }
}