import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

const text = 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
        + '\n'
        + 'export const Normal = Template.bind({});';

export const Primary = Template.bind({});
Primary.args = {
  children: text,
};

// Dark theme
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: text,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
