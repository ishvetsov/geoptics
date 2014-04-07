var _ = require('underscore');

module.exports = {
    "startDistance": "{{numeric(0, 400)}}",
    "distanceOffset": 10,
    "values": [
        "{{repeat(100)}}",
        function (tags, index) {
            return Math.sin(index / 5);
        }
    ]
};
