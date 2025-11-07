import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { CreateMaterial, Material } from '@users/ui-materials';

export const MaterialsActions = createActionGroup({
  source: 'Materials',
  events: {
    loadMaterials: emptyProps(),
    loadMaterialsSuccess: props<{ materials: Material[] }>(),
    loadMaterialsFailure: emptyProps(),
    deleteMaterial: props<{ id: number }>(),
    deleteMaterialSuccess: props<{ deletedMaterialId: number }>(),
    deleteMaterialFailure: emptyProps(),
    createMaterial: props<{ createMaterial: CreateMaterial }>(),
    createMaterialSuccess: props<{ newMaterial: Material }>(),
    createMaterialFailure: emptyProps(),
  },
});
