declare module "*.svg" {
  import React from "react";

  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  const src: string;

  export { SVGComponent as ReactComponent };
  export default src;
}
