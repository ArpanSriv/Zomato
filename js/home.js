

$('.logout-button').click(function (event) {
    event.stopPropagation();
    
    $('.lg-button-icon').addClass('lg-button-icon-hovered');
    
    $('.overflow-menu').children().each(function () {
        $element = $(this);
        $element.fadeIn();
    });
    
    
    
})

$('html').click(function () {
    $('.lg-button-icon').removeClass('lg-button-icon-hovered');
    
    $('.overflow-menu').children().each(function () {
        $element = $(this);
        $element.fadeOut(); 
    });
}) 

$('html').click();

initCounterAnimations();

var ratingCtx = $("#weekly-rating-chart");

var ratingsChart = new Chart(ratingCtx, {
    type: 'line',
    data: {
        labels: ["M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'Reviews',
            data: [4, 2, 3, 5, 4, 3],
            backgroundColor: 'transparent',
            borderColor: '#33DBC6',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                startAtZero: true
            }]
        }
    }
});

$('#radial-positive-indicator').radialIndicator({
        barColor: 'aqua',
        barBgColor: '#878FA9',
        barWidth: 20,
        initValue: 40,
        roundCorner : false,
        percentage: true,
        displayNumber: false
});

var posRadialObj = $('#radial-positive-indicator').data('radialIndicator');

posRadialObj.animate(60);

$('#radial-neutral-indicator').radialIndicator({
        barColor: '#ffff00',
        barBgColor: '#878FA9',
        barWidth: 20,
        initValue: 40,
        roundCorner : false,
        percentage: true,
        displayNumber: false
});

var neutralRadialObj = $('#radial-neutral-indicator').data('radialIndicator');

neutralRadialObj.animate(60);

$('#radial-negative-indicator').radialIndicator({
        barColor: '#d81b60',
        barBgColor: '#878FA9',
        barWidth: 20,
        initValue: 40,
        roundCorner : false,
        percentage: true,
        displayNumber: false
});

var negativeRadialObj = $('#radial-negative-indicator').data('radialIndicator');

negativeRadialObj.animate(60);

var visitorsCtx = document.getElementById("visitors-graph").getContext("2d");

var gradient = visitorsCtx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#8142FD');   
gradient.addColorStop(1, '#985EFF');

var visitorsChart = new Chart(visitorsCtx, {
    type: 'line',
    data: {
        labels: [
            "10:00",
            "11:00",
            "12:00",
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00"
        ],
        datasets: [{
            label: 'Visitors',
            data: [
                60,
                50,
                70,
                30,
                100,
                24,
                75,
                50,
                40,
                80,
                10,
                90,
                30,
                05,
                10
            ],
            backgroundColor: gradient,
            borderColor: gradient,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                startAtZero: true
            }]
        },
        elements: {
            line: {
                tension: 0
            }
        }
    }
});

function increment(element) {
    element.prop('Counter', 0).animate({
        Counter: element.text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            element.text(Math.ceil(now));
        }
    });
}

function initCounterAnimations() {
    increment($('.reviews-count'));
    increment($('.visitor-count'));
    $('.sentiment-review-count').each(function () {
        increment($(this));
    })
}