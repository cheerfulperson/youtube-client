import {
  EResponsesActions,
  ResponseActions,
} from '../actions/response.actions';
import { initialResponseState, IResponseState } from '../states/response.state';

export const responseReducers = (
  state = initialResponseState,
  action: ResponseActions
): IResponseState => {
  switch (action.type) {
    case EResponsesActions.GetResponseSuccess:
      return {
        ...state,
        selectedResponse: action.payload,
      };
    case EResponsesActions.AddResponseSuccess:
      return {
        ...state,
        selectedResponse: action.payload,
      };
    case EResponsesActions.GetResponsesSuccess:
      return {
        ...state,
        responses: action.payload,
      };

    default:
      return state;
  }
};
