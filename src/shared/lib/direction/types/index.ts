import cls from '../direction.module.scss';

export type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': cls.topLeft,
  'top right': cls.topRight,
  'bottom left': cls.bottomLeft,
  'bottom right': cls.botomRight,
};
