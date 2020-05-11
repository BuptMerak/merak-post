module.exports = function (hexo) {
    hexo.extend.generator.register('members', function (locals) {
        return {
            path: 'members/',
            layout: ['members'],
            data: Object.assign({}, locals, {
                __members: true
            })
        };
    });
}