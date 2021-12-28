import React from "react"
import { Redirect } from 'react-router-dom';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import config from '../../config';

import DashboardTabs from './DashboardTabs';
import MemoizedUserList from './DashboardUsers';
import DashboardFeedback from './DashboardFeedback';

export default function Dashboard(props) {

    const [currentTab, setCurrentTab] = React.useState(0)
    const [currentTabContent, setCurrentTabContent] = React.useState(null)

    React.useEffect(() => {
        const tabContent = () => {
            switch (currentTab) {
                case 0:
                    return <MemoizedUserList />
                case 1:
                    return <DashboardFeedback />
                default:
                    return <MemoizedUserList />
            }
        }
        setCurrentTabContent (tabContent)
    }, [currentTab])
    
    const { data: isAdmin } = useSWR(config.getRoles)
    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    if (!isAdmin) return <BounceLoader color={"#213459"} loading={true} css={bounceLoaderCss} size={100} />

    if (!isAdmin.admin) {
        return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }

    return (
        <div style={{height: '-webkit-fill-available', padding: '15px'}}>
            <DashboardTabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            {currentTabContent}
        </div>
    )
}