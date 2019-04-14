const smartgrid = require('smart-grid');

smartgrid('src/css/libs', {
    mobileFirst: false,
    filename: "smart-grid",
    columns: 12,
    offset: "30px",
    container: {
        maxWidth: "1190px"
    },
    breakPoints: {
        lg: {
            width: "1300px",
            fields: "15px"
        },
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "768px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "380px"
        }
    },
    mixinNames: {
        container: "wrapper",
        size: "beam"
    },
});

smartgrid('src/css/libs', settings);




/*
smartgrid('.');
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */