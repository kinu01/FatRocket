import { localizeString } from 'i18n';
import { ToastOption } from './type';

const unknown: ToastOption = {
  type: 'error',
  position: 'top',
  text1: localizeString('Something_went_wrong'),
  text2: localizeString('An_unknwon_error_occrred_please_try_again_later'),
};

const internet_connection_failed: ToastOption = {
  type: 'error',
  position: 'bottom',
  text1: localizeString('No_internet_connection'),
  text2: localizeString('Please_ensure_that_you_are_connected_to_the_internet'),
};

const rockets_failed: ToastOption = {
  type: 'error',
  position: 'bottom',
  text1: localizeString('Could_not_Refresh_Rockets'),
  text2: '',
};

const crew_failed: ToastOption = {
  type: 'error',
  position: 'bottom',
  text1: localizeString('Could_not_Refresh_Crews'),
  text2: '',
};

export default {
  unknown,
  internet_connection_failed,
  rockets_failed,
  crew_failed,
  custom: (
    text1?: string,
    text2?: string,
    visibilityTime?: number,
  ): ToastOption => {
    return {
      type: 'error',
      position: 'top',
      text1,
      text2,
      visibilityTime: visibilityTime ?? 4000,
      text2NumberOfLines: 4,
    };
  },
};
