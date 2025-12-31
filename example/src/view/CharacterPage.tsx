import { useCharacterViewModel } from '../viewmodel/useCharacterViewModel';
import { CharacterListView } from './CharacterListView';

export const CharacterPage = () => {
  // The 'Activity' / 'Controller'
  // 1. Instantiates the ViewModel
  const viewModel = useCharacterViewModel();

  // 2. Passes state and handlers to the View
  return (
    <CharacterListView 
      state={viewModel.state} 
      actions={viewModel.actions} 
      ui={viewModel.ui} 
    />
  );
};
