import { Meta, Story, Canvas } from '@storybook/addon-docs';
import Task from './Task';

<Meta title="MDX/Checkbox" component={Task} />

# Checkbox

With `MDX` we can define a story for `Checkbox` right in the middle of our
markdown documentation.

<Canvas>
  <Story name="all checkboxes">
    <form>
      <Task task={{id:"Unchecked" , title: "" , status: ""}}  />
    </form>
  </Story>
</Canvas>