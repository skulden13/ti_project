import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Mods } from 'shared/lib/classNames/classNames';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCurrency,
    onChangeCountry,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('ProfileErrorTitle')}
          text={t('ProfileErrorText')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max>
          <Avatar src={data.avatar} />
        </HStack>
      )}
      <Input
        value={data?.firstname}
        placeholder={t('Firstname')}
        readonly={readonly}
        onChange={onChangeFirstname}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Lastname')}
        readonly={readonly}
        onChange={onChangeLastname}
        data-testid="ProfileCard.lastname"
      />
      <Input
        value={data?.age}
        placeholder={t('Age')}
        readonly={readonly}
        onChange={onChangeAge}
        data-testid="ProfileCard.age"
      />
      <CurrencySelect
        value={data?.currency}
        readonly={readonly}
        onChange={onChangeCurrency}
        data-testid="ProfileCard.currency"
      />
      <CountrySelect
        value={data?.country}
        readonly={readonly}
        onChange={onChangeCountry}
        data-testid="ProfileCard.country"
      />
      <Input
        value={data?.city}
        placeholder={t('City')}
        readonly={readonly}
        onChange={onChangeCity}
        data-testid="ProfileCard.city"
      />
      <Input
        value={data?.username}
        placeholder={t('Username')}
        readonly={readonly}
        onChange={onChangeUsername}
        data-testid="ProfileCard.username"
      />
      <Input
        value={data?.avatar}
        placeholder={t('Avatar')}
        readonly={readonly}
        onChange={onChangeAvatar}
        data-testid="ProfileCard.avatar"
      />
    </VStack>
  );
};
