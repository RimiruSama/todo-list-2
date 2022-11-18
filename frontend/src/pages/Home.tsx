import {Link} from 'react-router-dom';
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa';
import {Stack, Typography, Link as LinkMUI} from '@mui/material';

const Home = () => {
    return (
        <>
            <Stack
                direction='column'
                spacing={3}
                justifyContent='center'
                alignItems='center'
                sx={{
                    marginBottom: '3rem'
                }}
            >
                <Typography variant='h3'>
                    What do you need help with?
                </Typography>

                <Typography
                    variant='h5'
                    sx={{
                        color: '#12121291',
                        fontWeight: '700'
                    }}
                >
                    Please choose from an option below
                </Typography>

                <Stack
                    direction='column'
                    spacing={3}
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        width: '60%'
                    }}
                >
                    <LinkMUI
                        component={Link}
                        to='/category-list'
                        underline='none'
                        variant='h6'
                        color='black'
                        sx={{
                            width: '100%',
                            background: 'white',
                            border: '2px solid black',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px'
                        }}
                    >
                        <FaQuestionCircle/> View all categories
                    </LinkMUI>

                    <LinkMUI
                        component={Link}
                        to='/product-list'
                        underline='none'
                        variant='h6'
                        color='white'
                        sx={{
                            width: '100%',
                            background: 'black',
                            border: '2px solid black',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px'
                        }}
                    >
                        <FaTicketAlt/> View all products
                    </LinkMUI>
                </Stack>
            </Stack>

        </>
    )
}

export default Home;