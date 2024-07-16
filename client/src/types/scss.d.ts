declare module "*.module.scss" {
  interface Styles {
    [className: string]: string;
  }
  const styles: Styles;
  export default styles;
}
