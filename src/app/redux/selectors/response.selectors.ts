import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { IResponseState } from '../states/response.state';

const selectResponses = (state: IAppState): IResponseState => state.responses;

export const selectResponseList = createSelector(
  selectResponses,
  (state: IResponseState) => state.responses || []
);

export const selectSelectedResponse = createSelector(
  selectResponses,
  (state: IResponseState) => state.selectedResponse
);
