import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={{
                my: 10,
                textAlign: 'center',
                p: 2,
                '& h3': {
                    fontWeight: "bold",
                    my: 2,
                    fontSize: '2rem'
                },
                '& p': {
                    textAlign: 'justify '
                },
                "@media (max-width:600px)": {
                    mt: 0,
                    "& h4": {
                        fontSize: "1.5 rem"
                    }
                }
            }}  >
                <Typography variant="h3">Welcome To My Restaurant</Typography>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga atque, consequatur exercitationem, facilis deleniti praesentium fugit provident aliquam temporibus fugiat distinctio soluta possimus, mollitia a. Labore ullam voluptatibus nisi molestiae, id a amet corrupti sint eaque ipsam quibusdam aliquam quas earum eius dolorem, tempore veritatis atque magni ex cupiditate aut! Eveniet, impedit enim vero delectus exercitationem pariatur ut assumenda unde labore nihil, alias aut, adipisci rem expedita mollitia! Laudantium porro modi, ab, voluptas eligendi ducimus delectus numquam deserunt nulla suscipit dolorum tempora tempore libero reiciendis laboriosam corrupti iste! Placeat ipsa, consequatur odio perspiciatis iste deserunt labore natus ex earum dolorem.</p>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga atque, consequatur exercitationem, facilis deleniti praesentium fugit provident aliquam temporibus fugiat distinctio soluta possimus, mollitia a. Labore ullam voluptatibus nisi molestiae, id a amet corrupti sint eaque ipsam quibusdam aliquam quas earum eius dolorem, tempore veritatis atque magni ex cupiditate aut! Eveniet, impedit enim vero delectus exercitationem pariatur ut assumenda unde labore nihil, alias aut, adipisci rem expedita mollitia! Laudantium porro modi, ab, voluptas eligendi ducimus delectus numquam deserunt nulla suscipit dolorum tempora tempore libero reiciendis laboriosam corrupti iste! Placeat ipsa, consequatur odio perspiciatis iste deserunt labore natus ex earum dolorem.</p>

            </Box>
        </Layout>
    )
}

export default About
