import { INavigation } from './interfaces';

export const useNavigation = (): INavigation => {
  return {
    navigate: () => '',
    params: () => '',
  };
};
