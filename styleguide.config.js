module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true
							}
						},
					],
				},
			],
		},
	},
	configureServer(app) {
	  // app is undefined here, because styleguidist@13.1.4 does not run on an express server
	  // and devServer.app does not exist.
	  // Since webpack-dev-server 4.0.0, support for the built-in Express server has been removed.
	  //
	  // next comment from styleguidist docs:
      // `app` is the instance of the express server running Styleguidist
      app.get('/custom-endpoint', (req, res) => {
        res.status(200).send({ response: 'Server invoked' })
      })
    }
};
