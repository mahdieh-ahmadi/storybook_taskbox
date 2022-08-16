import Task, { taskProps } from './Task'
import { taskStatusTypes } from './taskStatusTypes'

export default {
    component: Task,
    title: 'task'
}

const Template = (args) => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
    task:{
        status: taskStatusTypes.INPROGRESS,
        title: 'task 1',
        id: 1
    }
}

export const Pinned = Template.bind({})
Pinned.args = {
    task:{
        status: taskStatusTypes.PINNED,
        title: 'task 2',
        id: 2
    }
}

export const Done = Template.bind({})
Done.args = {
    task:{
        status: taskStatusTypes.DONE,
        title: 'task 3',
        id: 3
    }
}