import Router, { withRouter } from 'next/router'
import { Tabs } from 'antd'
import Dashboard from './Dashboard'

const dashboards = [
	{
		id: 1,
		name: 'First Board',
		url:
			'https://public.tableau.com/views/the_tableau_interface_ko-kr/1_1?:embed=y&:display_count=yes&:origin=viz_share_link',
	},
	{
		id: 2,
		name: 'Second Board',
		url:
			'https://public.tableau.com/views/Superstore_15577287563570/Overview?:embed=y&:display_count=yes&:origin=viz_share_link',
	},
]

const DashboardContainer = ({ router }) => {
	const { id } = router.query

	return (
		<Tabs
			animated={false}
			activeKey={id}
			onChange={activeKey => Router.push(`/dashboard/${activeKey}`)}>
			{dashboards.map(({ id, name, url }) => (
				<Tabs.TabPane tab={name} key={id}>
					<Dashboard url={url} />
				</Tabs.TabPane>
			))}
		</Tabs>
	)
}

export default withRouter(DashboardContainer)
