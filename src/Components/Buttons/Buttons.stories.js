import Button from './Buttons'

export default {
    component: Button,
    title: 'Design system/button',
    argTypes: {
        color: {
            control: {
                type: 'select',
            },
            options: ['#ff0000', '#00ff00', '#0000ff'],
        },
    },
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    color: '#2c01aa'
}