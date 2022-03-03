import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import {Input, Button} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Title from './Title'

 function FormContent() {
    return(
        <>
        <CssBaseline />
        
         <Title> CSV Upload </Title>
         <label htmlFor='contained-button-file'>
             <Input accept="image/*" id="contained-button-file" multiple type="file" />
             <Button variant="contained" component="span">
            Upload
             </Button>
             </label>
        
        </>
        )
}

export default function Form() {
    return <FormContent />;
}