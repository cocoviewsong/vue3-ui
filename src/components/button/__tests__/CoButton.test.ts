import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CoButton from '../CoButton.vue';

describe('CoButton', () => {
  // 测试默认类型按钮
  it('renders with default type', () => {
    const wrapper = mount(CoButton);
    expect(wrapper.classes()).toContain('co-button--default'); // 确认class有默认类型
  });

  // 测试按钮的文本内容
  it('renders the default slot content', () => {
    const wrapper = mount(CoButton, {
      slots: {
        default: '点击我',
      },
    });
    expect(wrapper.text()).toBe('点击我');
  });

  // 测试按钮的disabled属性
  it('renders as disabled when "disabled" prop is true', async () => {
    const wrapper = mount(CoButton, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.attributes('disabled')).toBeDefined(); // 确认按钮被禁用
    expect(wrapper.classes()).toContain('co-button--disabled'); // 确认按钮禁用状态
  });

  // 测试点击事件触发
  it('emits a click event when clicked and not disabled', async () => {
    const wrapper = mount(CoButton);
    const clickHandler = vi.fn(); // 创建点击事件监听器

    // 点击按钮
    await wrapper.trigger('click');

    // 使用 emitted() 检查是否触发了 click 事件
    expect(wrapper.emitted()).toHaveProperty('click');
    expect(wrapper.emitted('click')).toHaveLength(1); // 确保事件被触发一次
  });

  // 测试禁用按钮时点击不触发事件
  it('does not emit a click event when disabled', async () => {
    const wrapper = mount(CoButton, {
      props: {
        disabled: true,
      },
    });
    const clickHandler = vi.fn(); // 创建点击事件监听器

    // 点击按钮
    await wrapper.trigger('click');

    // 使用 emitted() 检查是否没有触发 click 事件
    expect(wrapper.emitted('click')).toBeUndefined(); // 禁用按钮不应该触发事件
  });

  // 测试不同类型的按钮
  it('renders with different types correctly', async () => {
    const types: ('default' | 'primary' | 'success' | 'warning' | 'danger')[] =
      ['default', 'primary', 'success', 'warning', 'danger'];
    for (const type of types) {
      const wrapper = mount(CoButton, {
        props: {
          type,
        },
      });
      expect(wrapper.classes()).toContain(`co-button--${type}`); // 根据传入类型检查类名
    }
  });
});
