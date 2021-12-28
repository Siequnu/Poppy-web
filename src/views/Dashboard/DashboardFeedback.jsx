import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { postApiData } from '../../services/api.service';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import DeleteDialog from './DeleteDialog';

import { SnackbarContext } from '../../App';

export default function DashboardInquiries() {

    const { setSnackbar } = React.useContext(SnackbarContext);

    // Store the current inquiry in state for dialogs to access
    const [currentInquiry, setCurrentInquiry] = React.useState({});

    // Save state for delete dialog
    const [alertDialog, setAlertDialog] = React.useState(false)

    // API handlers for deleting an inquiry
    const handleDeleteInquiry = (inquiryId) => {
        postApiData('/api/inquiries/delete', { id: inquiryId }).then(
            response => setSnackbar({
                text: response.success || response.error,
                open: true,
                severity: (response.success ? 'success' : 'error')
            })
        );
        setAlertDialog(false)
        mutate();
    }

    const handleDeleteAll = () => {
        postApiData('/api/inquiries/delete/all', {}).then(
            response => setSnackbar({
                text: response.success || response.error,
                open: true,
                severity: (response.success ? 'success' : 'error')
            })
        );
        setAlertDialog(false)
        mutate();
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'inquiry', headerName: 'Inquiry', width: 300 },
        {
            field: "",
            headerName: "Actions",
            sortable: false,
            width: 120,
            disableClickEventBubbling: true,
            renderCell: (params) => {

                const getFields = () => {
                    return params.api
                        .getAllColumns()
                        .map((c) => c.field)
                        .filter((c) => c !== "__check__" && !!c);
                }

                const onDelete = () => {
                    const thisRow = {};
                    getFields().forEach((f) => {
                        thisRow[f] = params.row[f];
                    });
                    setCurrentInquiry(thisRow);
                    setAlertDialog(true);
                };

                return (
                    <div>
                        <Button onClick={onDelete}><DeleteOutlineIcon /></Button>
                    </div>
                )
            }
        },
    ];

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    const { data, mutate } = useSWR('/api/inquiries/get', { refreshInterval: 2 })
    if (!data) return <BounceLoader color={"#10253E"} loading={true} css={bounceLoaderCss} size={100} />

    const formData = data.map(entry => {
        var feedbackObject = JSON.parse(entry.inquiry)
        feedbackObject.id = entry.id
        return feedbackObject
    })

    return (
        <div className="DashboardUsers">

<DeleteDialog inquiry={currentInquiry} open={alertDialog} onConfirm={handleDeleteInquiry} onClose={() => setAlertDialog(false)} />

            <h1>Inquiries</h1>

            <div className="DataGridContainer" style={{ height: '600px' }}>
                <DataGrid
                    autoPageSize
                    rows={formData}
                    columns={columns}
                    pageSize={20}
                    className="UsersGrid"
                />
            </div>
            <Button onClick={handleDeleteAll} color="primary">
          Delete all
      </Button>
        </div>
    );
}