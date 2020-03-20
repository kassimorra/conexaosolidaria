module.exports = (app) => {
    require('../../back_end/modules/users/users.route')(app);
    require('../../back_end/modules/auth/auth.route')(app);
};