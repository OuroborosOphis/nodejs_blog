module.exports = function sortMiddleware(req, res, next) {
    // res.locals la 1 object chua cac bien local
    res.locals._sort = {
        enabled: false, // mac dinh la khong sap xep 
        type: 'default' 
    };

    // neu co _sort trong query thi se gan gia tri cho res.locals._sort
    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, { 
            enabled: true,
            type: req.query.type,
            column: req.query.column
        });
    }

    next();
}