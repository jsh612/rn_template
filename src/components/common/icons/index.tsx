import BellIcon from 'components/common/icons/BellIcon';

export interface IIconBaseProps {
  icon: IconsType;
  height?: number;
  width?: number;
  color?: string;
}

export const getIcons = (styleOptionsInput: Omit<IIconBaseProps, 'icon'>) => {
  const iconStyleOption = {
    width: 24,
    height: 24,
    ...styleOptionsInput,
  };

  return {
    bell: <BellIcon {...iconStyleOption} />,
    '': <></>,
  };
};

const defaultStyleIcons = getIcons({});
export type IconsType = keyof typeof defaultStyleIcons;

export default function IconBase(iconOptions: IIconBaseProps) {
  const { icon: iconName, ...styleOptions } = iconOptions;

  const icons = getIcons(styleOptions);

  return icons[iconName];
}
