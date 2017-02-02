var path = require('path');

module.exports = {
    entry: './src/App.js',
    output: {
        filename: './src/bundle.js'
    },
    module: {
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.jsx?$/,
                // include: [
                //     path.resolve(__dirname, "app")
                // ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                // these are matching conditions, each accepting a regular expression or string
                // test and include have the same behavior, both must be matched
                // exclude must not be matched (takes preferrence over test and include)
                // Best practices:
                // - Use RegExp only in test and for filename matching
                // - Use arrays of absolute paths in include and exclude
                // - Try to avoid exclude and prefer include

                //issuer: {test, include, exclude},
                // conditions for the issuer (the origin of the import)

                //enforce: "pre",
                //enforce: "post",
                // flags to apply these rules, even if they are overridden (advanced option)

                loader: "babel-loader",
                // the loader which should be applied, it'll be resolved relative to the context
                // -loader suffix is no longer optional in webpack2 for clarity reasons
                // see webpack 1 upgrade guide

                options: {
                    presets: ["es2015", "react"]
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)

        modules: [
            'node_modules', //if not exist, search for "react" module will be in path.resolve(__dirname, 'src')!
            path.resolve(__dirname, 'src')
        ],
        // directories where to look for modules

        extensions: [".js", ".json", ".jsx", ".css"],
        // extensions that are used

        alias: {
            // a list of module name aliases

            //"module": "new-module",
            // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"

            //"only-module$": "new-module",
            // alias "only-module" -> "new-module", but not "module/path/file" -> "new-module/path/file"

            default_cmp: 'components',
            app: 'app'
            // alias "module" -> "./app/third/module.js" and "module/file" results in error
            // modules aliases are imported relative to the current context
        }
    }
    // resolve: {
    //     modules: ['./node_modules', './src'],
    //     extensions: ['', '.js', '.jsx']
    // }
};
