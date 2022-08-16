import Task from './Task'

export default {
    component: Task,
    title: 'task'
}

const Template = (args:any) => <Task {...args} />

export const Default = Template.bind({})