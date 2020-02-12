module.exports = {
    env: {
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier',
        'react-hooks'
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.js']
            },
        ],
        'import/prefer-default-export': 'off',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-console': 'off',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off',
        'react/sort-comp': 'off',
        'no-unused-vars': 'off',
        'no-param-reassign': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-undef': 'off',
        'camelcase': 'off'
    },
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                rootPathSuffix: 'src'
            }
        }
    }
};
