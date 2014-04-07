var _ = require('underscore');

module.exports = [
    {
        "startPeriod": 1396772243144,
        "millisecondOffset": 10,
        "values": [
            "{{repeat(100)}}",
            function (tags, index) {
                return Math.sin(index / 5);
            }
        ]
    }
];

