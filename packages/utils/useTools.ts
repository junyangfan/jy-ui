// 组件库所使用到的工具函数，不向外暴露
const defaultPrefixCls = 'jy-ui';

export const usePrefixCls = (suffixCls: string): string => {
  return `${defaultPrefixCls}-${suffixCls}`;
};
