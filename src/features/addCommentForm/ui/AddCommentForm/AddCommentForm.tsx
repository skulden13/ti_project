import { classNames } from 'shared/lib';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { TextTheme, Text } from 'shared/ui/Text/Text';

import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getAddCommentText, getAddCommentError } from '../../model/selectors/addCommentSelectors';
import { addCommentReducer, addCommentActions } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
  addCommentForm: addCommentReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation('comment');
  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentText);
  const error = useSelector(getAddCommentError);

  const changeTextHandler = useCallback((value: string) => {
    dispatch(addCommentActions.setText(value));
  }, [dispatch]);

  const sendCommentHandler = useCallback(() => {
    changeTextHandler('');

    if (text) {
      onSendComment(text);
    }
  }, [onSendComment, changeTextHandler, text]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.AddCommentForm, {}, className ? [className] : [])}>
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          type="text"
          className={cls.input}
          placeholder={t('EnterComment')}
          autoFocus
          value={text}
          onChange={changeTextHandler}
        />
        <Button
          type="submit"
          className={cls.button}
          theme={ButtonTheme.OUTLINE}
          onClick={sendCommentHandler}
        >
          {t('AddComment')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
