import { createContext } from 'react';

interface IFormControlContext {
    formId: string;
}

const UiContext = createContext<IFormControlContext>({} as IFormControlContext);

export default UiContext;
