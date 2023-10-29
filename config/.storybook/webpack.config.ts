import { BuildPaths } from "../types/types";
import path from "path";
import { buildCssLoader } from "../loaders/buildCssLoader";

export default ({ config }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx')
    config.module.rules.push(buildCssLoader(true))
    return config;
}