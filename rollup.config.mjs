import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import minifyHtml from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import del from 'rollup-plugin-delete';

const isProduction = process.env.NODE_ENV === 'production';

export default {
    input: './src/components/index.ts',
    output: {
        dir: 'dist',
        format: 'es',
    },
    plugins: [
        del({ targets: 'dist/*', runOnce: true }),
        nodeResolve(),
        typescript(),

        ...(isProduction
            ? [
                minifyHtml.default(),
                terser({
                    ecma: 2021,
                    module: true,
                    warnings: true,
                    compress: {
                        drop_console: true,
                    },
                }),
                summary()
            ]
            : [
                html({
                    input: './src/index.html',
                }),
                serve({
                    contentBase: ['dist'],
                    port: 3000
                }),
                livereload({
                    watch: 'dist',
                    verbose: true
                })
            ]),
    ],
    watch: {
        include: 'src/**',
        clearScreen: false
    },
    preserveEntrySignatures: 'strict',
};