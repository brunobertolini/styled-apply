import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";

export default {
	input: "src/index.js",
	output: [
		{
			name: "styledRules",
			file: "lib/index.js",
			format: "cjs",
			interop: false
		}
	],

	plugins: [babel(), commonjs(), uglify()]
};
