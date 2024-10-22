import { mount } from '@vue/test-utils';
import TodoItem from '../src/components/TodoItem.vue';

describe('TodoItem.vue', () => {
  it('renders todo text', () => {
    const todo = { id: 1, text: 'Test Todo', completed: false };
    const wrapper = mount(TodoItem, {
      props: { todo },
    });
    expect(wrapper.text()).toContain('Test Todo');
  });
});
