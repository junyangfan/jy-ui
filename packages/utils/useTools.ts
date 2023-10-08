const defaultPrefixCls = 'jy-ui';

export const usePrefixCls = (suffixCls: string): string => {
  return `${defaultPrefixCls}-${suffixCls}`;
};
