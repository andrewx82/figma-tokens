import { StorageProviderType } from '@/constants/StorageProviderType';
import { MessageFromPluginTypes } from '@/types/messages';
import { TokenStore } from '@/types/tokens';
import { mockUiPostMessage } from '../../../tests/__mocks__/figmaMock';
import { notifySelection, notifySetTokens } from '../notifiers';

describe('notifySelection', () => {
  it('should work', () => {
    notifySelection({
      selectionValues: [],
      mainNodeSelectionValues: [],
      selectedNodes: 0,
    });

    expect(mockUiPostMessage).toBeCalledTimes(1);
    expect(mockUiPostMessage).toBeCalledWith({
      type: MessageFromPluginTypes.SELECTION,
      selectionValues: [],
      mainNodeSelectionValues: [],
      selectedNodes: 0,
    });
  });
});

describe('notifySetTokens', () => {
  it('should work', () => {
    const mockStoreValues: TokenStore = {
      version: '',
      updatedAt: '',
      values: {},
      usedTokenSet: {},
      checkForChanges: true,
      activeTheme: null,
      themes: [],
      storageType: {
        provider: StorageProviderType.LOCAL,
      },
    };
    notifySetTokens(mockStoreValues);
    expect(mockUiPostMessage).toBeCalledTimes(1);
    expect(mockUiPostMessage).toBeCalledWith({
      type: MessageFromPluginTypes.SET_TOKENS,
      values: mockStoreValues,
    });
  });
});
