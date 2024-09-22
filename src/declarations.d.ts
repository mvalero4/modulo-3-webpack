declare module "*.scss";

declare module "*.png" {
    const value: string;
    export default value;
}
  
declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.jpeg" {
    const value: string;
    export default value;
}

declare module "*.gif" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    import * as React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

// src/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_BASE: string;
    }
}  