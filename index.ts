import { Editor } from 'document-model/document';
import * as documentModelsExports from './document-models';
import * as editorsExports from './editors';

export const documentModels = Object.values(documentModelsExports);
export const editors = Object.values(editorsExports) as Editor[];
