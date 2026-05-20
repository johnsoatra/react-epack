import dts from 'rollup-plugin-dts';

export default {
  input: 'src/lib/index.ts',
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  external: [/\.css$/],
  plugins: [dts()],
};
