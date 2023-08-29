export type BuildMode = 'development' | 'production'

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    port: number,
    isDev: boolean
}
