define({
    capitalize: function (string) {
        return string.charAt(0).toUpperCase() + string.substring(1);
    },

    uncapitalize: function (string) {
        return string.charAt(0).toLowerCase() + string.substring(1);
    },

    format: function () {
        var args = arguments,
            string = args[0];

        return string.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, i) {
            if (m === '{{') { return '{'; }
            if (m === '}}') { return '}'; }

            return args[+i+1];
        });
    }
});
