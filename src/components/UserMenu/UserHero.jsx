import React from 'react';
import './UserHero.css';
import { withRouter } from 'react-router-dom';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

import Logout from '../Auth/Logout';
import config from '../../config';

import { authenticationService } from '../../services';
import jwt_decode from "jwt-decode";

export function UserHero(props) {

    const { data: userProfile } = useSWR(config.userProfileUrl)
    
    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    if (!userProfile) return <BounceLoader color={"#213459"} loading={true} css={bounceLoaderCss} size={100} />
    
    const thumbnail = '/assets/tsinghua1.jpeg'

    const currentUser = authenticationService.currentUserValue;
    const decodedToken = jwt_decode(currentUser.access_token)
    const isAdmin = decodedToken.admin

    const redirectToDashboard = () => {props.history.push('dashboard');}

    return (
        <div className="UserHero" style={{ backgroundImage: `url("${thumbnail}"` }}>
            <div className="UserHeroContent" style={{ 'background': `linear-gradient(90deg, rgba(131,255,231,1) 40%, rgba(255,255,255,0) 90%)` }}>
                
                {props.maximised ? 
                    <>
                        <Logout className="UserHeroLink" />
                        {isAdmin ? 
                            <Button color="primary" variant="contained" onClick={redirectToDashboard}>Dashboard</Button>
                        : null
                        }
                    </>
                : 
                    null 
                }

                <h1>{userProfile.username}</h1>
                
                {props.maximised ?
                <>
                    <p><AccountCircleIcon className="Icon" /> Member since:</p>
                    <p className="caption">{userProfile.registered}</p>

                    <span className="stamp is-nope">{isAdmin ? 'Admin' : 'Member' }</span>
                </>
                : 
                    null
                }
            </div>
        </div>
    )
}

export default withRouter(UserHero);