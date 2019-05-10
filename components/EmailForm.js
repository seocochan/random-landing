import { Form, Input, Button } from 'antd'
import Router from 'next/router'
import { setToken } from '../utils'

const EmailForm = ({ form }) => {
	const { getFieldDecorator } = form

	const handleSubmit = e => {
		e.preventDefault()
		form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Email address: ', values)
				setToken(values.email)
				Router.push('/')
			}
		})
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Item label="Email">
				{getFieldDecorator('email', {
					rules: [
						{
							type: 'email',
							message: 'The input is not valid E-mail!',
						},
						{
							required: true,
							message: 'Please input your E-mail!',
						},
					],
				})(<Input />)}
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Register
				</Button>
			</Form.Item>
		</Form>
	)
}

export default Form.create()(EmailForm)
