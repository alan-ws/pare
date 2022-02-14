import { INavigation, INavigationBack } from './interfaces';

export const useNavigation = (): INavigation & INavigationBack => {
  return {
    navigate: () => '',
    params: () => '',
    goBack: () => '',
  };
};
