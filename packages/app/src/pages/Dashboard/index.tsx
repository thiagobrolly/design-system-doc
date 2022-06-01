import React, { useState } from 'react';
import {
  Button,
  // Accordion,
  // AccordionContent,
  // AccordionTrigger,
  TextField,
  Card,
  Separator,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Modal,
} from '@brolly-ui/components';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [handleOpen, setHandleOpen] = useState(false);
  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button">Open Modal</button>
      <Button variant="secondary" onClick={() => setHandleOpen(true)}>
        Abrir Modal
      </Button>

      <Modal
        isOpen={handleOpen}
        viewCloseButton
        onRequestClose={setHandleOpen}
        shouldCloseOnOverlayClick
      >
        Content Modal
      </Modal>
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
            the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
            the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
            the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator color="#f00" />
      <Card
        title="title"
        subTitle="subTitle"
        size="large"
        style={{ backgroundColor: '#e3e3e3' }}
      >
        <TextField
          label="Default"
          name="name"
          outline={false}
          type="date"
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Default"
          name="name"
          inputType="email"
          outline={false}
          iconDefault
          iconPosition="right"
        />
      </Card>
      <Button size="small" variant="secondary">
        Home
      </Button>
      <Button size="medium" variant="secondary">
        Home
      </Button>
      <Button variant="approve" as="a" href="#" size="large">
        asLink
      </Button>
      <Button size="large" variant="secondary" disabled>
        Home
      </Button>
      <Button variant="approve" as="a" href="#" disabled size="large">
        asLink
      </Button>
      <Link to="/">
        <Button variant="secondary" disabled margin="1rem" size="large">
          Link
        </Button>
      </Link>
      <Link to="/">
        <Button variant="secondary" margin="1rem" size="large">
          Link
        </Button>
      </Link>
    </div>
  );
};

export default Dashboard;
