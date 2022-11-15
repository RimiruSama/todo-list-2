import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Stack, Link as LinkMUI, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';

const Header = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ 
                borderBottom: '1px solid #0000003b',
                marginBottom: '5rem'
            }}
        >
            <div>
                <LinkMUI 
                    to='/'
                    component={Link}
                    variant='h5'
                    color='black'
                    underline='none'
                >
                    Todo List
                </LinkMUI>
            </div>            
           
            <List
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ListItem button component={Link} to="/login">
                    <ListItemIcon>
                        <FaSignInAlt color='black' />
                    </ListItemIcon>
                    <ListItemText color='black' primary="Login"/>
                </ListItem>
                <ListItem button component={Link} to="/register">
                    <ListItemIcon>
                        <FaUser color='black' />
                    </ListItemIcon>
                    <ListItemText color='black' primary="Register"/>
                </ListItem>
            </List>
        </Stack>
    )
}

export default Header;