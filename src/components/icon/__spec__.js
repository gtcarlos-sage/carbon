import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Icon from './icon';

describe('Icon', () => {
  let instance, span;

  describe('renderIcon', () => {
    beforeEach(() => {
      let warningInstance = TestUtils.renderIntoDocument(<Icon type='warning' />);
      spyOn(warningInstance, 'renderWarningIcon');
    });

    it('calls the render warning icon method', () => {
      warningInstance.renderIcon;
      expect(warningInstance.renderWarningIcon).toHaveBeenCalled();
    });
  });

  describe('with no additional options', () => {
    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(<Icon type='foo' />);
      span = TestUtils.findRenderedDOMComponentWithTag(instance, 'span');
    });

    it('renders with a class of icon-settings', () => {
      expect(span.className).toEqual('icon-foo');
    });
  });

  describe('with custom class name', () => {
    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(<Icon type='foo' className='custom' />);
      span = TestUtils.findRenderedDOMComponentWithTag(instance, 'span');
    });

    it('renders with a class of icon-settings and test', () => {
      expect(span.className).toEqual('custom icon-foo');
    });
  });
});
