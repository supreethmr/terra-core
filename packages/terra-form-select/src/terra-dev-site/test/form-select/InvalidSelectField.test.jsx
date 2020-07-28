import React from 'react';
import classNames from 'classnames/bind';
import SelectField from '../../../SelectField';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const InvalidSelectFieldExample = () => (
  <div className={cx('content-wrapper')}>
    <SelectField isInvalid label="T-shirt size" selectId="select-field" defaultValue="small">
      <SelectField.Option value="small" display="Small" />
    </SelectField>
  </div>
);

export default InvalidSelectFieldExample;
