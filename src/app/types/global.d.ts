declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare const _IS_DEV_: boolean

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}
