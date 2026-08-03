import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
  title: 'enteties/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  parameters: {
    loki: {
      chromeSelector: '.ArticleTypeTabsStory',
      disableAutomaticViewportHeight: true,
    },
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => {
  const { value, onTabClick } = args;

  return (
    <div className="ArticleTypeTabsStory">
      <ArticleTypeTabs
        value={value}
        onTabClick={onTabClick}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  value: ArticleType.ALL,
  onTabClick: () => {},
};
