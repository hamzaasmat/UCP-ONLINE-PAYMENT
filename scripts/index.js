$(document).ready(function() {
    $('#select').show();
    $('#challan').hide();
    $('#demo-info').show();
    $('#list_internet_banking').show();
    $('#list_mobile_banking').hide();
    $('#list_atm_banking').hide();
    $('#list_cash_banking').hide();

})

// ENABLE OR DISABLE THE SELECTE BOX AND TEXT BOX

$('#easypaisa-tab, #visa-tab').click(function() {
    $('#select').hide();
    $('#challan').show();
    $('#demo-info').hide();
})
$('#internetbiling-tab,#mobilebiling-tab,#atm-tab,#cash-tab').click(function() {
    $('#select').show();
    $('#challan').hide();
    $('#demo-info').show();

})

// DROPDOWN FUNCTIONALITY

function myFunction() {
    $("#myDropdown").slideToggle();
}

// FILTER IN DROPDOWN

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("LI");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
$(document).on("click", function(event) {
    var $trigger = $(".dropdown");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $("#myDropdown").hide();
    }
});
$('#internetbiling-tab').click(function() {
    $('#list_internet_banking').show();
    $('#list_mobile_banking').hide();
    $('#list_atm_banking').hide();
    $('#list_cash_banking').hide();
})
$('#mobilebiling-tab').click(function() {
    $('#list_internet_banking').hide();
    $('#list_mobile_banking').show();
    $('#list_atm_banking').hide();
    $('#list_cash_banking').hide();
})
$('#atm-tab').click(function() {
    $('#list_atm_banking').show();
    $('#list_internet_banking').hide();
    $('#list_mobile_banking').hide();
    $('#list_cash_banking').hide();
})
$('#cash-tab').click(function() {
    $('#list_cash_banking').show();
    $('#list_internet_banking').hide();
    $('#list_mobile_banking').hide();
    $('#list_atm_banking').hide();
})

function changeTxt() {
    $('.dropbtn').html('-- Available Banks List --')
}

$(".list-box li").click(function() {
    var oldUrl = $('#proceed').attr("href", $(this).attr("value"))
    $('.dropbtn').html($(this).text());
    $("#myDropdown").hide();
});