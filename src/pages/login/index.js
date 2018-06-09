import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'
// import { connect } from 'dva'
import { Button, Row, Form, Input } from '../../components/antd';
import { config } from '../../utils';
import styles from './index.module.less';

const FormItem = Form.Item

@observer
class Login extends React.Component {

  get store() {
    return this.props.rootStore.loginScreenStore
  }

  render() {
    const {
      form: {
        getFieldDecorator,
        validateFieldsAndScroll,
      },
    } = this.props;

    const {loading} = this.store;

    function handleOk () {
      validateFieldsAndScroll((errors, values) => {
        if (errors) {
          return
        }
        // dispatch({ type: 'login/login', payload: values })
      })
    }
  
    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt="logo" src={config.logo} />
          <span>{config.name}</span>
        </div>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input onPressEnter={handleOk} placeholder="Username" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input type="password" onPressEnter={handleOk} placeholder="Password" />)}
          </FormItem>
          <Row>
            <Button type="primary" onClick={handleOk} loading={loading}>
              Sign in
            </Button>
            <p>
              <span>Username：guest</span>
              <span>Password：guest</span>
            </p>
          </Row>
  
        </form>
      </div>
    )
  
  }
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default Form.create()(Login);

// export default connect(({ loading }) => ({ loading }))(Form.create()(Login))
