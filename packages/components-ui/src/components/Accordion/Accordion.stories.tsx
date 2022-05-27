import { Meta, Story } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionProps,
} from '.';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
  args: {
    width: '300px',
    type: 'single',
    disabled: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

// const Template: Story<AccordionProps> = (args) => (
//   <div
//     style={{
//       width: '100%',
//       height: '100%',
//       display: 'flex',
//       alignItems: 'flex-start',
//       justifyContent: 'center',
//       padding: '3rem',
//       background:
//         'linear-gradient(90deg, rgba(33,90,255,1) 20%, rgba(0,151,255,1) 60%)',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       bottom: 0,
//       right: 0,
//     }}
//   >
//     <Accordion {...args} />
//   </div>
// );
// export const OneItem = Template.bind({});
// OneItem.args = {
//   children: (
//     <>
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
//           WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
//           pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
//           adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
//           WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
//           pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
//           adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
//           WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
//           pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
//           adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//     </>
//   ),
// };

export const Template: Story<AccordionProps> = (args) => (
  <div
    style={{
      width: '100%',
      height: '1000px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '3rem',
      background:
        'linear-gradient(90deg, rgba(33,90,255,1) 20%, rgba(0,151,255,1) 60%)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }}
  >
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
          WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
          pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
          adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
          WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
          pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
          adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
          WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
          pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
          adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
