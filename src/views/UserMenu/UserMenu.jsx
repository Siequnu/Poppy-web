import React from 'react';
import './UserMenu.css';

import UserHero from '../../components/UserHero/UserHero';
import UserTabs from '../../components/UserTabs/UserTabs';

export default function UserMenu() {

    const [currentTab, setCurrentTab] = React.useState(0)
    const [currentTabContent, setCurrentTabContent] = React.useState(null)

    React.useEffect(() => {
        const tabContent = () => {
            switch (currentTab) {
                case 0:
                    return <UserHero maximised={true} />
                default:
                    return <UserHero maximised={true} />
            }
        }
        setCurrentTabContent(tabContent)
    }, [currentTab])

    return (
        <div className="UserMenu">
            <UserTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
            {currentTabContent}
        </div>
    )
}