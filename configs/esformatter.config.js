export default {
    indent: {
        // set indentation to 4 spaces
        value: '    ',
    },
    plugins: [
        // https://www.npmjs.com/package/esformatter-jsx
        // 'esformatter-jsx',
        // https://github.com/magicdawn/esformatter-curly
        'esformatter-curly',
        // https://github.com/pgilad/esformatter-braces
        'esformatter-braces'
    ],
    // this is the section this plugin will use to store the settings for the jsx formatting
    jsx: {
        // by default is true, if set to false it works the same as esformatter-jsx-ignore
        formatJSX: true,
        // whether to recursively format jsx expressions with esformatter
        // set this to false if you dont want JSXExpressions to be formatted recursively,
        // like when using problematic plugins
        formatJSXExpressions: true,
        // By default ObjectExpression and ArrayExpression in JSXExpressions are inlined,
        // if false, the Expression might expand several lines
        JSXExpressionsSingleLine: true,
        // default to one space. Make it empty if you dont like spaces between JSXExpressionContainers
        spaceInJSXExpressionContainers: ' ',
        // keep the node attributes on the same line as the open tag. Default is true.
        // Setting this to false will put each one of the attributes on a single line
        attrsOnSameLineAsTag: false,
        // how many attributes should the node have before having to put each
        // attribute in a new line. Default 1
        maxAttrsOnTag: 1,
        // if the attributes are going to be put each one on its own line, then keep the first
        // on the same line as the open tag
        firstAttributeOnSameLine: true,
        // align the attributes with the first attribute
        // (if the first attribute was kept on the same line as on the open tag)
        alignWithFirstAttribute: true,
        // default false. if true <React.Something /> => <React.Something/>
        removeSpaceBeforeClosingJSX: false,
        htmlOptions: { // same as the ones passed to js-beautifier.html
            brace_style: 'collapse-preserve-inline',
            indent_char: ' ',
            indent_size: 4,
            preserve_newlines: true
        }
    }
}
