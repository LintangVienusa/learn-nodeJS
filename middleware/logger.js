const log = (req, res, next) => {
    console.log(new Date().toLocaleDateString(), new Date().toLocaleTimeString() ,"=>", req.method, req.originalUrl );
    next();
}   

module.exports = log;