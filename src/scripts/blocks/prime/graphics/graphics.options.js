define(function (require) {
    var getOptions = function (series) {
        return {
            chart: {
                className: 'currentChart',
                type: 'line',
                zoomType: 'x'
            },

            credits: {enabled: false},

            rangeSelector : {selected : 1},

            zoom: {enabled: false},

            exporting: {enabled: false},

            title : {text : ''},

            xAxis: {
                events: {
                    setExtremes: function (event) {
                        if (typeof event.rangeSelectorButton !== 'undefined') {
                            alert(event.rangeSelectorButton.count + ' ' + event.rangeSelectorButton.type )
                        }
                    },

                    afterSetExtremes: function(event) {}
                }
            },

            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                                alert('Category: '+ this.category +', value: '+ this.y);
                            }
                        }
                    },
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                useHTML: true,
                headerFormat: '<small>{point.key} м</small><table>',
                pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                    '<td style="text-align: right"><b>{point.y} °C</b></td></tr>',
                footerFormat: '</table>',
                valueDecimals: 2
            },

            series: series
        };
    };

    return {
        get: getOptions
    }
});
