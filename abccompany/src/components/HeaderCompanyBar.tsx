import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography
} from '@mui/material';

export default function HeaderCompanyBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        ABC Company
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
