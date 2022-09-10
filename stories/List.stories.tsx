import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import List from '../Components/List'

export default{
    title: 'AppComponents/List',
    component: List,
    parameters: {
        actions: {
          handles: ['mouseover'],
        },
      },
} as ComponentMeta <typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary = Template.bind({})

Primary.args = {
    input: {results: [{ title: "1", image: "", summary:"" },{title: "2", image: "", summary:"" }]}
}
