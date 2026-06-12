import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

export default {
  title: 'enteties/Card',
  component: Card,
  parameters: {
    loki: {
      chromeSelector: '.CardStory',
      disableAutomaticViewportHeight: true,
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div className="CardStory">
    <Card {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <Text title="Test" text="Some test" />,
};
