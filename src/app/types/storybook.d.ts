import type {
  Decorator,
  Meta,
  StoryFn,
} from '@storybook/react';

declare module '@storybook/react' {
  export type ComponentMeta<TComponent> = Meta<TComponent>;
  export type ComponentStory<TComponent> = StoryFn<TComponent>;
  export type DecoratorFn = Decorator;
  export type Story = StoryFn;
}
