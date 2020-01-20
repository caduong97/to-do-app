// const path = require('path')

// exports.module = {
//   test: /(\.module)?\.s(a|c)ss$/,
//   use: [
//     {
//       loader: 'sass-resources-loader',
//       options: {
//         resources: path.resolve(__dirname, '../src/assets/styles/_*.scss'),
//       },
//     },
//   ],
// }

exports.module = {
  module: {
    rules: [
      // Apply loader
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-resources-loader',
            options: {
              // Provide path to the file with resources
              resources: './src/assets/styles/variables.scss',
  
            },
          },
        ],
      },
    ]
  }
  
}