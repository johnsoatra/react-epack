declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.ComponentProps<'div'>;
  export default ReactComponent;
}
