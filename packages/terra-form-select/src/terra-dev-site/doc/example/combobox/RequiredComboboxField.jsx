import React from 'react';
import ComboboxField from 'terra-form-select/lib/ComboboxField';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const ComboboxFieldExample = () => (
  <ComboboxField label="T-shirt size" selectId="tshirt-size-field-3" required className={cx('form-select')}>
    <ComboboxField.Option value="xSmall" display="Extra Small" />
    <ComboboxField.Option value="small" display="Small" />
    <ComboboxField.Option value="medium" display="Medium" />
    <ComboboxField.Option value="large" display="Large" />
    <ComboboxField.Option value="xLarge" display="Extra Large" />
  </ComboboxField>
);

export default ComboboxFieldExample;
