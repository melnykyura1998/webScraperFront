
const CracoLessPlugin = require("craco-less");
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "#6808FD" },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
