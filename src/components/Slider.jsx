import React from 'react';
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

const Slider = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <Root
      ref={ref}
      className="relative flex w-full touch-none select-none items-center"
      {...otherProps}
      step={1}
      min={1}
      max={5}
    >
      <Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-base-content">
        <Range className="absolute h-full bg-primary" />
      </Track>
      <Thumb className="block h-4 w-10 bg-primary rounded-full border border-primary bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" 
      onChange={(e) => console.log(e)}/>
    </Root>
  );
});

Slider.displayName = 'Slider';

export { Slider };
