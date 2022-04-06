import request from 'axios';
import { toast } from 'react-toastify';
import { ErrorType } from '../types/error';
import { HttpCode } from '../const';

export const handleHttpError  = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        toast.error(response.data.error);
        break;
      case HttpCode.Unauthorized:
        toast.warning(response.data.error);
        break;
      case HttpCode.NotFound:
        toast.error(response.data.error);
        break;
    }
  }
};
