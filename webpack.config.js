import webpack from 'webpack'

export default const config = {
    context: __dirname,
    entry: {
        app: "./client/app"
    },
    output: {
        filename: "[hash]-[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}