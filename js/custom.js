//패밀리링크

$(function () {
    $('#flnk').on('change', function () {
        const lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
})


