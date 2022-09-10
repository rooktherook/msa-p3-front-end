import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RecipeModal from '../Components/RecipeModal'

export default{
    title: 'AppComponents/RecipeModal',
    component: RecipeModal,
        parameters: {
        actions: {
          handles: ['mouseover'],
        },
      },
} as ComponentMeta <typeof RecipeModal>

const Template: ComponentStory<typeof RecipeModal> = (args) => <RecipeModal {...args} />;



export const Primary = Template.bind({})

Primary.args = {
    input: 
    {title: "Button1", 
    image: "", 
    summary:"" 
    }
}

Primary.play = async({canvasElement}) => {
    const canvas = within(canvasElement);
    const Modal1 = canvas.getByRole('button')
    await userEvent.click(Modal1)
}