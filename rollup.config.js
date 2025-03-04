import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

// const packageJson = require('./package.json');

export default {
  // input: 'src/index.ts',
  input: ['src/index.ts', 'src/TestComponent/index.ts'],
  // output: [
  //   {
  //     file: packageJson.main,
  //     format: 'cjs',
  //     sourcemap: true,
  //   }, {
  //     file: packageJson.module,
  //     format: 'esm',
  //     sourcemap: true,
  //   },
  // ],
  output: {
    dir: 'build',
    format: 'cjs',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
  },

  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
  ],
};
