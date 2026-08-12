import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import AvatarImg from 'shared/assets/tests/storybook.jpeg';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { $api } from 'shared/api/api';
import { editableProfileCardReducer } from '../../model/slices/editableProfileCardSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profileData: Profile = {
  id: '1',
  firstname: 'First',
  lastname: 'Last',
  age: 22,
  currency: Currency.EUR,
  country: Country.Ukraine,
  city: 'Myko',
  username: 'admin',
  avatar: AvatarImg,
};

const options = {
  initialState: {
    user: {
      authData: {
        id: profileData.id,
        username: profileData.username,
      },
    },
    profile: {
      readonly: true,
      data: profileData,
      form: profileData,
    },
  },
  asyncReducers: { profile: editableProfileCardReducer },
};

describe('EditableProfileCard', () => {
  test('readonly mode should be switched', async () => {
    const user = userEvent.setup();

    componentRender(<EditableProfileCard />, options);
    await user.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    expect(screen.getByTestId('EditableProfilePageHeader.CancelButton'))
      .toBeInTheDocument();
  });

  test('cancel button should restore changed form values', async () => {
    const user = userEvent.setup();
    componentRender(<EditableProfileCard />, options);
    await user.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

    await user.clear(screen.getByTestId('ProfileCard.firstname'));
    await user.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await user.clear(screen.getByTestId('ProfileCard.lastname'));
    await user.type(screen.getByTestId('ProfileCard.lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

    await user.click(screen.getByTestId('EditableProfilePageHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('First');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Last');
  });

  test('should show error', async () => {
    const user = userEvent.setup();
    componentRender(<EditableProfileCard />, options);
    await user.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

    await user.clear(screen.getByTestId('ProfileCard.firstname'));

    await user.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
  });

  test('should make request on save data', async () => {
    const mockReq = jest.spyOn($api, 'put');
    const user = userEvent.setup();
    componentRender(<EditableProfileCard />, options);
    await user.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

    await user.type(screen.getByTestId('ProfileCard.firstname'), 'user');

    await user.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));

    expect(mockReq).toHaveBeenCalled();
  });
});
