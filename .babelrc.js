const presets = [
    [
        '@babel/preset-env',
        {
            targets: 'last 2 Chrome versions',
            useBuiltIns: 'usage'
        }
    ],
    '@babel/preset-react'
];

module.exports = { presets };
