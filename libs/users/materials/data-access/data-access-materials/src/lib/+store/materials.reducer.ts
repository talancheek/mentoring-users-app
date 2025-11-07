import { createFeature, createReducer, on } from '@ngrx/store';

import { Material } from '@users/ui-materials';

import { MaterialsActions } from './materials.actions';

export const MATERIALS_FEATURE_KEY = 'materials';

export interface MaterialsState {
  materials: Material[];
  status: string;
}

export const initialMaterialsState: MaterialsState = {
  materials: [],
  status: 'init',
};

export const materialsFeature = createFeature({
  name: MATERIALS_FEATURE_KEY,
  reducer: createReducer(
    initialMaterialsState,
    on(MaterialsActions.loadMaterials, (state: MaterialsState) => {
      return {
        ...state,
        status: 'loading',
      };
    }),
    on(MaterialsActions.loadMaterialsSuccess, (state, { materials }) => {
      return {
        ...state,
        status: 'loaded',
        materials,
      };
    }),
    on(MaterialsActions.loadMaterialsFailure, (state) => {
      return {
        ...state,
        status: 'failed',
      };
    }),
    on(MaterialsActions.deleteMaterialSuccess, (state, { deletedMaterialId }) => {
      return {
        ...state,
        status: 'loaded',
        materials: state.materials.filter(({ id }) => id !== deletedMaterialId),
      };
    }),
    on(MaterialsActions.createMaterialSuccess, (state, { newMaterial }) => {
      return {
        ...state,
        status: 'loaded',
        materials: [...state.materials, newMaterial],
      };
    }),
  ),
});
