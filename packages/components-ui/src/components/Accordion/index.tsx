import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
// import * as S from './styles';

export const Accordion = () => (
  <AccordionPrimitive.Root type="multiple">
    <AccordionPrimitive.Item value="item-1">
      <AccordionPrimitive.Trigger>Is it accessible?</AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content>
        {/* <button type="button" onClick={() => alert('Clicou')}>
          Teestando
        </button>
        <button type="button" disabled onClick={() => alert('Clicou')}>
          Teestando
        </button> */}
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>

    <AccordionPrimitive.Item value="item-2">
      <AccordionPrimitive.Trigger>Is it accessible?</AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  </AccordionPrimitive.Root>
);
