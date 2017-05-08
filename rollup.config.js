export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/filedropper.umd.js',
    format: 'umd',
    sourceMap: false,
    moduleName: 'ngx.filedropper',
    external: [
        '@angular/core',
        '@angular/common'
    ],
    onwarn: (warning) => {
        const skip_codes = [
            'THIS_IS_UNDEFINED',
            'MISSING_GLOBAL_NAME'
        ];
        if (skip_codes.indexOf(warning.code) != -1) return;
        console.error(warning);
    }
};