import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { ProgressPlugin } from "webpack"

export const buildPlugins = (path: string) => {
    return [
        new HtmlWebpackPlugin({
            template: path,
        }),
        new ProgressPlugin(),
    ]
}